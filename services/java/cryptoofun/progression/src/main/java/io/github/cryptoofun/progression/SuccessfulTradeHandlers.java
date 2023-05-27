package io.github.cryptoofun.progression;

import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import io.github.cryptoofun.progression.domain.UserExperience;
import io.github.cryptoofun.progression.entity.ExperienceRecord;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.Instant;

@Service
@Slf4j
public class SuccessfulTradeHandlers {

    @Autowired
    private ExperienceRecordsRepository xpRecordsRepository;

    @KafkaListener(topics = "processed_trade_orders", groupId = "progression")
    private void handle(TradeOrderProcessedEvent event) {
        log.info("[processed_trade_orders] Consumed: " + event);

        double tradeVolume = event.getAmount() * event.getActualizationPrice();
        xpRecordsRepository.findById(event.getUserID())
                .ifPresentOrElse((record) -> {
                            var result = UserExperience.calcNewUserLevelForTradeVolume(record, tradeVolume);
                            record.setTotalXP(result.getTotalXP());
                            record.setLevel(result.getLevel());
                            record.setUpdatedAt(Instant.now());
                            xpRecordsRepository.save(record);
                        },
                        () -> {
                            ExperienceRecord record = ExperienceRecord.builder()
                                    .userID(event.getUserID())
                                    .totalXP(0)
                                    .level(0)
                                    .createdAt(Instant.now())
                                    .build();
                            var result = UserExperience.calcNewUserLevelForTradeVolume(record, tradeVolume);
                            record.setTotalXP(result.getTotalXP());
                            record.setLevel(result.getLevel());
                            xpRecordsRepository.save(record);
                        });
    }
}

package io.github.cryptoofun.progression.domain;

import io.github.cryptoofun.progression.entity.ExperienceRecord;
import lombok.*;

import java.math.BigInteger;

public class UserExperience {

    @AllArgsConstructor
    @Builder
    @Setter
    @Getter
    public static class CalcNewUserLevelForTradeVolumeResult {
        private long totalXP;
        private long level;
    }

    public static CalcNewUserLevelForTradeVolumeResult calcNewUserLevelForTradeVolume(ExperienceRecord record, double tradeVolume) {
        long currentXP = record.getTotalXP();

        // [+] Award with 10 XP for each trade volume of $1000
        double tradeVolAbs = Math.abs(tradeVolume);
        int countPerThousandVol = (int) (tradeVolAbs / 1000);
        long xpAwardForTradeVol = countPerThousandVol * 10L;
        currentXP += xpAwardForTradeVol;

        // [+] Award with 5 XP for each successful trade order
        currentXP += 5;

        // Calculate new level (levels up per 500 XP)
        long currentLevel = currentXP / 500;

        return CalcNewUserLevelForTradeVolumeResult.builder()
                .totalXP(currentXP)
                .level(currentLevel)
                .build();
    }
}

package io.github.cryptoofun.messages.events;

import lombok.*;
import lombok.extern.jackson.Jacksonized;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class TradeOrderProcessedEvent {
    String orderID;
    String userID;
    double actualizationPrice;
    double amount;
}

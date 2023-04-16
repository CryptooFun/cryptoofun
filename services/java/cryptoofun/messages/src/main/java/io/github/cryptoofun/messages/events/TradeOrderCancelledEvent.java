package io.github.cryptoofun.messages.events;

import lombok.*;
import lombok.extern.jackson.Jacksonized;

@AllArgsConstructor
@NoArgsConstructor
@Jacksonized
@Builder
@Data
@ToString
public class TradeOrderCancelledEvent {
    String orderID;
}

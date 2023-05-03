package io.github.cryptoofun.tradebutler.dto;

import io.github.cryptoofun.tradebutler.entity.Order;
import lombok.Data;

import java.util.List;

@Data
public class GetOrdersResponse {
    private final List<Order> orders;
}

package io.github.cryptoofun.progression.dto;

import lombok.Data;

import java.math.BigInteger;

@Data
public class GetLevelByUserIdResponse {
    private final String userID;
    private final long xp;
    private final long level;
}

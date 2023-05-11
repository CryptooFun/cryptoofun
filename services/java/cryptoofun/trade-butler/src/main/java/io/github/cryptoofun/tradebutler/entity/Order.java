package io.github.cryptoofun.tradebutler.entity;

import lombok.*;
import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.*;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Table(value = "orders")
public class Order {

    @PrimaryKeyColumn(name = "id", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    private String id;

    @PrimaryKeyColumn(name = "user_id", ordinal = 1, type = PrimaryKeyType.PARTITIONED)
    private String userID;

    @PrimaryKeyColumn(name = "ticker", ordinal = 2, type = PrimaryKeyType.CLUSTERED)
    private String ticker;

    @Column("order_type")
    private String orderType;

    @Column("intent")
    private String intent;

    @Column("price")
    private double price;

    @Column("amount")
    private double amount;

    @Column("actualization_price")
    private double actualizationPrice;

    @Column("processed")
    private boolean processed;

    @Column("cancelled")
    private boolean cancelled;

    @Column("created_at")
    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    private Instant createdAt = Instant.now();

    @Column("updated_at")
    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    private Instant updatedAt;
}

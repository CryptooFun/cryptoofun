package io.github.cryptoofun.tradebutler.entity;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Table(value = "orders")
public class Order {

    @PrimaryKey
    private String id;

    @Column("user_id")
    private String userID;

    @Column("order_type")
    private String orderType;

    @Column("intent")
    private String intent;

    @Column("ticker")
    private String ticker;

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

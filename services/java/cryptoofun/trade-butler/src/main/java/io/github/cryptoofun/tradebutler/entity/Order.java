package io.github.cryptoofun.tradebutler.entity;

import lombok.*;
import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.time.Instant;

@AllArgsConstructor
@Builder
@RequiredArgsConstructor
@Getter
@Table(value = "orders")
public class Order {

    @PrimaryKey
    private final String id;

    @Column("order_type")
    private final String orderType;

    @Column("created_at")
    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    private Instant createdAt = Instant.now();

    @Column("updated_at")
    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    private Instant updatedAt;
}

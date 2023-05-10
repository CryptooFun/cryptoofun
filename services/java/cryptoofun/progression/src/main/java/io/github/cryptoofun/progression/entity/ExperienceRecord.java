package io.github.cryptoofun.progression.entity;

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
@Table(value = "experience_records")
public class ExperienceRecord {

    @PrimaryKey("user_id")
    private String userID;

    @Column("total_xp")
    private long totalXP;

    @Column("level")
    private long level;

    @Column("created_at")
    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    private Instant createdAt = Instant.now();

    @Column("updated_at")
    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    private Instant updatedAt;
}

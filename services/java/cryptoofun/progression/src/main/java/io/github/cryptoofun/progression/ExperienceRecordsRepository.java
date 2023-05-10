package io.github.cryptoofun.progression;

import io.github.cryptoofun.progression.entity.ExperienceRecord;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRecordsRepository extends CassandraRepository<ExperienceRecord, String> {
}

create keyspace progression with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

create table progression.experience_records
(
    user_id     text primary key,
    total_xp    bigint,
    level       bigint,
    created_at  timestamp,
    updated_at  timestamp
)
    with caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'}
     and compaction = {'class': 'SizeTieredCompactionStrategy'}
     and compression = {'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
     and dclocal_read_repair_chance = 0
     and speculative_retry = '99.0PERCENTILE';

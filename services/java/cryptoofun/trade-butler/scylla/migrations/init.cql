create table tradebutler.orders
(
    id                  text primary key,
    user_id             text,
    order_type          text,
    intent              text,
    ticker              text,
    price               double,
    amount              double,
    actualization_price double,
    processed           boolean,
    cancelled           boolean,
    created_at          timestamp,
    updated_at          timestamp
)
    with caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'}
     and compaction = {'class': 'SizeTieredCompactionStrategy'}
     and compression = {'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
     and dclocal_read_repair_chance = 0
     and speculative_retry = '99.0PERCENTILE';

create index orders_user_id_index
    on tradebutler.orders (user_id);

package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.entity.Order;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CassandraRepository<Order, String> {
    @Query(allowFiltering = true)
    List<Order> findByUserID(String userID);

    @Query(allowFiltering = true)
    List<Order> findByUserIDAndTicker(String userID, String ticker);
}

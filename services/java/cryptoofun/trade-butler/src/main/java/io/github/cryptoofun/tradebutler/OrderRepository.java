package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.entity.Order;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends CassandraRepository<Order, String> {

    @Query(allowFiltering = true)
    Optional<Order> findByIdAndUserID(String id, String userID);

    @Query(allowFiltering = true)
    List<Order> findByUserID(String userID);

    @Query(allowFiltering = true)
    List<Order> findByUserIDAndTicker(String userID, String ticker);
}

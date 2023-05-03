package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.entity.Order;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CassandraRepository<Order, String> {
    List<Order> findByUserID(String userID);
}

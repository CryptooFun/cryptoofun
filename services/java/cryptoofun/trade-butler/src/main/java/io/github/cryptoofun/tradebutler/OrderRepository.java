package io.github.cryptoofun.tradebutler;

import io.github.cryptoofun.tradebutler.entity.Order;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.data.cassandra.repository.ReactiveCassandraRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

import java.util.Date;
import java.util.Optional;

@Repository
public interface OrderRepository extends ReactiveCassandraRepository<Order, String> {

    @Query(allowFiltering = true)
    Optional<Order> findByIdAndUserID(String id, String userID);

    @Query(allowFiltering = true)
    Flux<Order> findByUserIDAndCreatedAtAfter(String userID, Date createdAtAfter);

    @Query(allowFiltering = true)
    Flux<Order> findByUserIDAndTickerAndCreatedAtAfter(String userID, String ticker, Date createdAtAfter);
}

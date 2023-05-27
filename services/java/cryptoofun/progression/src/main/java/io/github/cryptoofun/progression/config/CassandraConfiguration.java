package io.github.cryptoofun.progression.config;

import com.datastax.oss.driver.api.core.CqlSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

import java.net.MalformedURLException;
import java.net.URL;

@Configuration
@EnableCassandraRepositories(basePackages = {"io.github.cryptoofun.progression"})
public class CassandraConfiguration {

    @Value("${spring.data.cassandra.keyspace}")
    private String keyspace;

    @Value("${spring.data.cassandra.username}")
    private String username;

    @Value("${spring.data.cassandra.password}")
    private String password;

    @Value("${spring.data.cassandra.cloudConnectBundleUrl}")
    private String cloudConnectBundle;

    @Bean
    @Primary
    protected CqlSession cqlSession() throws MalformedURLException {
        return CqlSession.builder()
                .withCloudSecureConnectBundle(new URL(cloudConnectBundle))
                .withAuthCredentials(username, password)
                .withKeyspace(keyspace)
                .build();
    }
}

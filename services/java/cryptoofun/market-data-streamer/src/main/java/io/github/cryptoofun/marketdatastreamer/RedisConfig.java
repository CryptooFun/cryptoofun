package io.github.cryptoofun.marketdatastreamer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig {

    @Value(value = "${spring.redis.host}")
    String host;

    @Value(value = "${spring.redis.port}")
    String port;

    @Value(value = "${spring.redis.username}")
    String user;

    @Value(value = "${spring.redis.password}")
    String pass;

    @Bean
    JedisConnectionFactory jedisConnectionFactory() {
        var configuration = new RedisStandaloneConfiguration();
        configuration.setHostName(host);
        configuration.setPort(Integer.parseInt(port));
        configuration.setUsername(user);
        configuration.setPassword(pass);
        return new JedisConnectionFactory(configuration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        var template = new RedisTemplate<String, Object>();
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(new StringRedisSerializer());
        template.setValueSerializer(new StringRedisSerializer());
        template.setConnectionFactory(jedisConnectionFactory());
        return template;
    }
}

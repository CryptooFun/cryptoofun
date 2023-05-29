package io.github.cryptoofun.tradebutler.config;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.cryptoofun.messages.events.TradeOrderProcessedEvent;
import org.apache.kafka.clients.CommonClientConfigs;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.config.SaslConfigs;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.CommonLoggingErrorHandler;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.support.converter.JsonMessageConverter;
import org.springframework.kafka.support.converter.StringJsonMessageConverter;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.io.IOException;
import java.util.HashMap;

@EnableKafka
@Configuration
public class KafkaConsumerConfiguration {

    @Value(value = "${spring.kafka.bootstrap-servers}")
    private String bootstrapAddress;

    @Value(value = "${spring.kafka.groupId}")
    private String groupId;

    @Value("${spring.kafka.properties.security.protocol}")
    private String protocol;

    @Value("${spring.kafka.properties.sasl.mechanism}")
    private String mechanism;

    @Value("${spring.kafka.properties.sasl.jaas.config}")
    private String jaasConfig;

    @Value("${spring.kafka.consumer.properties.session.timeout.ms}")
    private Integer sessionTimeoutMs;

    @Value("${spring.kafka.properties.ssl.truststore.location}")
    private Resource truststoreFile;

    @Value("${spring.kafka.properties.ssl.truststore.password}")
    private String truststorePwd;

    @Bean
    public ConsumerFactory<String, Object> consumerFactory() throws IOException {
        var props = new HashMap<String, Object>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        props.put(JsonDeserializer.TYPE_MAPPINGS, "tradeOrderProcessedEvent:io.github.cryptoofun.messages.events.TradeOrderProcessedEvent,tradeOrderCancelledEvent:io.github.cryptoofun.messages.events.TradeOrderCancelledEvent");
        props.put(CommonClientConfigs.SECURITY_PROTOCOL_CONFIG, protocol);
        props.put(SaslConfigs.SASL_MECHANISM, mechanism);
        props.put(SaslConfigs.SASL_JAAS_CONFIG, jaasConfig);
        props.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, sessionTimeoutMs);
        props.put("ssl.truststore.type", "JKS");
        props.put("ssl.truststore.location", truststoreFile.getFile().getAbsolutePath());
        props.put("ssl.truststore.password", truststorePwd);
        return new DefaultKafkaConsumerFactory<>(props);
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Object> kafkaListenerContainerFactory() throws IOException {
        var factory = new ConcurrentKafkaListenerContainerFactory<String, Object>();
        factory.setConsumerFactory(consumerFactory());
        factory.setCommonErrorHandler(new CommonLoggingErrorHandler()); // TODO: Use customized error handler.
        return factory;
    }
}

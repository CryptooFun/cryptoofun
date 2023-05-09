package io.github.cryptoofun.tradebutler;

import org.jose4j.jwt.MalformedClaimException;
import org.jose4j.jwt.consumer.InvalidJwtException;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JwtMiddlewareNoVerify implements HandlerInterceptor {

    public static final String UserIdAttrKey = "cryptoofun_user_id";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token;
        try {
            String[] authnHeader = request.getHeader("authorization").split(" ");
            token = authnHeader[1];
        } catch (Exception e) {
            response.setStatus(401);
            return false;
        }

        var jwtConsumer = new JwtConsumerBuilder()
                .setSkipSignatureVerification()
                .setSkipDefaultAudienceValidation()
                .build();
        try {
            var jwtClaims = jwtConsumer.processToClaims(token);
            var sub = jwtClaims.getSubject();
            request.setAttribute(UserIdAttrKey, sub);
            return true;
        } catch (InvalidJwtException | MalformedClaimException e) {
            response.setStatus(403);
            return false;
        }
    }
}

package com.canteen.backend.service;

import java.time.Duration;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class OTPService {

    private static final Logger logger = LoggerFactory.getLogger(OTPService.class);

    @Autowired
    private StringRedisTemplate redisTemplate;

    private static final Duration OTP_EXPIRATION = Duration.ofMinutes(5);

    public String generateOTP(String email) {
        String otp = String.format("%06d", new Random().nextInt(1_000_000)); // Generates 000000–999999
        try {
            redisTemplate.opsForValue().set("otp:" + email, otp, OTP_EXPIRATION);
            logger.info("✅ OTP stored in Redis for {}: {}", email, otp); // Do not expose OTP in production logs
        } catch (DataAccessException e) {
            logger.error("❌ Redis error while storing OTP for {}: {}", email, e.getMessage());
            throw new RuntimeException("Unable to connect to Redis while storing OTP", e);
        }
        return otp;
    }

    public boolean verifyOTP(String email, String otp) {
        try {
            String storedOtp = redisTemplate.opsForValue().get("otp:" + email);
            logger.info("🔍 Retrieved OTP for {}: {}", email, storedOtp);
            return storedOtp != null && storedOtp.equals(otp);
        } catch (DataAccessException e) {
            logger.error("❌ Redis error while verifying OTP for {}: {}", email, e.getMessage());
            throw new RuntimeException("Unable to verify OTP due to Redis error", e);
        }
    }

    public void clearOTP(String email) {
        try {
            redisTemplate.delete("otp:" + email);
            logger.info("🧹 OTP cleared for {}", email);
        } catch (DataAccessException e) {
            logger.error("❌ Redis error while clearing OTP for {}: {}", email, e.getMessage());
            // Not rethrowing, since cleanup failure isn't critical
        }
    }
}

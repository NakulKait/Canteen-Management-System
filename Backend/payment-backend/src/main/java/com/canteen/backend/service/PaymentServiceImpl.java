package com.canteen.backend.service;

import java.security.SignatureException;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.tomcat.util.buf.HexUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.canteen.backend.dto.PaymentVerificationDto;


@Service
public class PaymentServiceImpl implements PaymentService {

    @Value("${razorpay.key_secret}")  // Make sure this is set in application.properties
    private String secretKey;

    @Override
    public boolean verifyPayment(PaymentVerificationDto dto) throws Exception {
        // Razorpay signature = HMAC_SHA256(orderId|paymentId, secret)
        String data = dto.getOrderId() + "|" + dto.getPaymentId();
        String generatedSignature = generateSignature(data);

        return generatedSignature.equals(dto.getSignature());
    }

    private String generateSignature(String data) throws Exception {
        Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
        SecretKeySpec secret_key = new SecretKeySpec(secretKey.getBytes(), "HmacSHA256");
        sha256_HMAC.init(secret_key);

        byte[] hash = sha256_HMAC.doFinal(data.getBytes());
        return HexUtils.toHexString(hash);
    }
}



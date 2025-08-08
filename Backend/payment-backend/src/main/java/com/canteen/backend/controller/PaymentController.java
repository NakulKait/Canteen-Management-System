package com.canteen.backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.canteen.backend.dto.PaymentVerificationDto;
import com.canteen.backend.service.PaymentService;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "*") // optional: allow frontend access
public class PaymentController {

    private final PaymentService paymentService;

    @Value("${razorpay.key_id}")
    private String razorpayKey;

    @Value("${razorpay.key_secret}")
    private String razorpaySecret;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyPayment(@RequestBody PaymentVerificationDto dto) {
        try {
            boolean verified = paymentService.verifyPayment(dto);

            if (verified) {
                return ResponseEntity.ok("Payment verified and order updated.");
            } else {
                return ResponseEntity.badRequest().body("Invalid signature");
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Payment verification failed");
        }
    }

    @PostMapping("/create-payment-order")
    public ResponseEntity<Map<String, String>> createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
        int amount = (Integer) data.get("amount");

        RazorpayClient client = new RazorpayClient(razorpayKey, razorpaySecret);

        JSONObject options = new JSONObject();
        options.put("amount", amount * 100);
        options.put("currency", "INR");
        options.put("receipt", "txn_" + UUID.randomUUID());

        com.razorpay.Order razorpayOrder = client.orders.create(options);

        Map<String, String> response = new HashMap<>();
        response.put("orderId", razorpayOrder.get("id"));

        return ResponseEntity.ok(response);
    }
}

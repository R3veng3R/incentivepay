package com.incentive.payment.controller;

import com.incentive.payment.model.PaymentRecord;
import com.incentive.payment.service.PaymentRecordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
private final PaymentRecordService paymentRecordService;

    public PaymentController(final PaymentRecordService paymentRecordService) {
        this.paymentRecordService = paymentRecordService;
    }

    @GetMapping
    public ResponseEntity<String> getPayments() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("hello world!");
    }

    @PostMapping
    public ResponseEntity<PaymentRecord> savePayment(@RequestBody final PaymentRecord paymentRecord) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(paymentRecordService.save(paymentRecord));
    }
}

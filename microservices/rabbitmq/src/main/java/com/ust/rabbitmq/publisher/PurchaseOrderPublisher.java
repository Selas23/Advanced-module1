package com.ust.rabbitmq.publisher;

import java.util.UUID;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.rabbitmq.config.MessagingConfig;
import com.ust.rabbitmq.model.OrderStatus;
import com.ust.rabbitmq.model.PurchaseOrder;

@RestController
@RequestMapping("/order")
public class PurchaseOrderPublisher {

	@Value("$({ust.rabbitmq.queue})")
	String queueName;
	
	
	@Value("$({ust.rabbitmq.exchange})")
	 String exchange;
	
	
	@Value("$({ust.rabbitmq.routingkey})")
	 private String routingkey;
	
	@Autowired
	private RabbitTemplate template;

	@PostMapping("/{customerName}")
	public String bookOrder(@RequestBody PurchaseOrder order, @PathVariable String customerName) {
		order.setOrderId(UUID.randomUUID().toString());
		OrderStatus orderstatus = new OrderStatus(order, "ACCEPTED", "order placed successfully by" + customerName);
		//template.convertAndSend(MessagingConfig.EXCHANGE, MessagingConfig.ROUTING_KEY, orderstatus); 
		//removed when @valid was introduced into the file
		template.convertAndSend(exchange, routingkey, orderstatus);

		return "Success"; // this is confirmation to the sender of order
	}

}

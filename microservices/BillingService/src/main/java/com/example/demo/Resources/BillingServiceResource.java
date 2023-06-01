package com.example.demo.Resources;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/billingservice")
public class BillingServiceResource {

//	@Value("name") // goes to application.properties to fetch it
//	String strMessage;
//
//	@GetMapping
//	public String welcome()
//
//	{
//		return "Programming Microservices " + strMessage;
//	}
	@GetMapping
	public String status() {
		return "billing ->";
	}
	
}

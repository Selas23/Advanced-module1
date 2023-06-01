package com.example.demo.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/service")
public class HelloService {

	@Autowired
	Environment environment; // it is a reference to properties file

	@Value("name") // goes to application.properties to fetch it
	String strMessage;

	@GetMapping
	public String welcome() {
		String port = environment.getProperty("server.port");
		return "Programming Microservices " + port;
//		return "Programming Microservices " + strMessage;
	}

	@GetMapping("/status")
	public String status() {
		return "up and running ->";
	}
}

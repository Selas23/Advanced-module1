package com.chat.controller;

//public class ChatController {
//
//}

//package com.example.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.chat.model.ChatMessage;

@Controller
public class ChatController {
   private final SimpMessagingTemplate messagingTemplate;

   public ChatController(SimpMessagingTemplate messagingTemplate) {
       this.messagingTemplate = messagingTemplate;
   }

   @GetMapping("/")
   public String chatPage() {
       return "chat";
   }

   @MessageMapping("/chat/send")
   public void sendMessage(ChatMessage message) {
       messagingTemplate.convertAndSend("/topic/messages", message);
   }
}


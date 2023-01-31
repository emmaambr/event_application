package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.backend.entity.Event;
import com.example.backend.service.EventService;

@RestController
public class EventController {

    @Autowired
    EventService eventService;

    @GetMapping("/event")
    public ResponseEntity <List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventService.getAllEvents(), HttpStatus.OK);
    }
    
    // Event by userId 

    // New event
    @PostMapping("/event")
    public ResponseEntity<Event> newEvent(@RequestBody Event event) {  // @RequestParam(required = true) Long userId
        return new ResponseEntity<>(eventService.newEvent(event), HttpStatus.CREATED);
    }

}
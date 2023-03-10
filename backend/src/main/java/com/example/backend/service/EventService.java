package com.example.backend.service;

import java.util.List;

import com.example.backend.entity.Event;

public interface EventService {
    List<Event> getAllEvents();
    List<Event> getAllActiveEvents();
    List<Event> getActiveUserEvent(Long userId, Boolean active); 
    Event newEvent(Event event, Long userId);
}

package com.example.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.backend.repository.EventRepository;
import com.example.backend.entity.Event;
import com.example.backend.entity.User;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventRepository eventRepository; 

    @Autowired
    UserService userService; 

    @Override
    public List<Event> getAllEvents() {
        eventRepository.updateActive(false, LocalDateTime.now()); // (Quarts/Cron to handle inactive events is recommended) 
        return (List<Event>)eventRepository.findAll();
    }

    @Override
    public List<Event> getAllActiveEvents() {
        eventRepository.updateActive(false, LocalDateTime.now()); // (Quarts/Cron to handle inactive events is recommended) 
        return eventRepository.activeEvents();
    }

    @Override
    public List<Event> getActiveUserEvent(Long userId, Boolean active){ 
        eventRepository.updateActive(false, LocalDateTime.now()); // (Quarts/Cron to handle inactive events is recommended) 
        return eventRepository.activeUserEvent(userId, active); 
    }

    @Override
    public Event newEvent(Event event, Long userId) {
        if(event.getEventDate() != null && event.getEventDate().isAfter(LocalDateTime.now())) {
            User user = userService.getUser(userId);
            event.setUser(user);
            event.setActive(true);
            return eventRepository.save(event);
        } 
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"); 
    }
    
}


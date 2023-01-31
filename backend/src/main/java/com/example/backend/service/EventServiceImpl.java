package com.example.backend.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.backend.repository.EventRepository;
import com.example.backend.entity.Event;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventRepository eventRepository; 

    @Override
    public List<Event> getAllEvents() {
        eventRepository.updateActive(false, LocalDate.now(), LocalTime.now());

        return (List<Event>)eventRepository.findAll();
    }

    @Override
    public Event newEvent(Event event) { // Long userId 
        event.setActive(true);
    
        if(event.getDate().isAfter(LocalDate.now())) {
            return eventRepository.save(event);
        } 
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request"); 
    }
    
}




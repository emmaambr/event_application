package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.repository.EventRepository;
import com.example.backend.entity.Event;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventRepository eventRepository; 

    @Override
    public List<Event> getAllEvents() {
        return (List<Event>)eventRepository.findAll();
    }
    
}

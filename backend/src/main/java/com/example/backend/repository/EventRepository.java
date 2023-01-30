package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.Event;

public interface EventRepository extends CrudRepository<Event, Long> {
    
}

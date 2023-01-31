package com.example.backend.repository;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.backend.entity.Event;

import jakarta.transaction.Transactional;

public interface EventRepository extends CrudRepository<Event, Long> {

    @Transactional
    @Modifying
    @Query("UPDATE Event e SET e.active = :active WHERE e.date < :date AND e.time < :time")
        void updateActive(@Param("active") Boolean active, @Param("date") LocalDate date, @Param("time") LocalTime time);  
    
}

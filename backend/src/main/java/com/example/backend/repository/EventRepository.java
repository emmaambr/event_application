package com.example.backend.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.backend.entity.Event;

import jakarta.transaction.Transactional;

public interface EventRepository extends CrudRepository<Event, Long> {

    @Query("SELECT DISTINCT e FROM Event e LEFT JOIN FETCH e.user user WHERE e.user.id = :userId AND e.active = :active")  
        List<Event> activeUserEvent(@Param("userId") Long userId, @Param("active") Boolean active);

    @Query("SELECT DISTINCT e FROM Event e WHERE e.active = true") 
        List<Event> activeEvents();

    @Transactional
    @Modifying
    @Query("UPDATE Event e SET e.active = :active WHERE e.eventDate < :now")
        void updateActive(@Param("active") Boolean active, @Param("now") LocalDateTime now);  // (Quarts/Cron to handle inactive events is recommended) 
    
}

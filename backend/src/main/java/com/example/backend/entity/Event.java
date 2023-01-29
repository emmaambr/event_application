package com.example.backend.entity;

import jakarta.persistence.*;

public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id; 

    public Event(Long id) {
        this.id = id; 
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}

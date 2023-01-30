package com.example.backend.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.*;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private String title;
    private String description; 
    private LocalDate date; 
    private LocalTime time; 
    private int ageLimit;
    private Double cost; 

    // private String oranizer; (+ get & set)

    public Event() {
    
    }

    public Event(Long id, String title, String description, LocalDate date, LocalTime time, int ageLimit, Double cost) {
        this.id = id; 
        this.title = title; 
        this.description = description; 
        this.date = date;
        this.time = time; 
        this.ageLimit = ageLimit;
        this.cost = cost; 
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public int getAgeLimit() {
        return ageLimit;
    }

    public void setAgeLimit(int ageLimit) {
        this.ageLimit = ageLimit;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

}

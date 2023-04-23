package com.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.entities.Students;

public interface CrudRepository extends JpaRepository<Students, Integer> {

}

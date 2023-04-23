package com.student.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.entities.Students;
import com.student.exception.ResourceNotFoundException;
import com.student.repository.CrudRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
	@Autowired
	private CrudRepository crudRepository;
	
	@GetMapping
	public List<Students> getAllStudents(){
		List<Students> findAll =  crudRepository.findAll();
		return findAll;
	}
	
	@PostMapping
	public Students createStudents(@RequestBody Students students) {
		return  crudRepository.save(students);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Students> getStudentById(@PathVariable int id){
		Students student = crudRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("student not available"+id));
		return ResponseEntity.ok(student);
		
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Students> updateStudent(@PathVariable int id,@RequestBody Students s){
		Students s1 = crudRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("student not available"+id));
		
		s1.setFname(s.getFname());
		s1.setSname(s.getSname());
		s1.setStandard(s.getStandard());
		crudRepository.save(s1);
		return ResponseEntity.ok(s1);
	}
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> deleteStudent(@PathVariable int id){
		Students student = crudRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("student not available"+id));
		crudRepository.delete(student);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
}

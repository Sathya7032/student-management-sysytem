package com.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.student.entities.Students;
import com.student.repository.CrudRepository;

@SpringBootApplication
public class StudentApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	}
	
	@Autowired
	private CrudRepository crudRepository;
	
	@Override
	public void run(String... args) throws Exception {
		Students s = new Students();
		s.setId(1);
		s.setFname("sathya");
		s.setSname("chary");
		s.setStandard("4th");
		crudRepository.save(s);
		
		Students s1 = new Students();
		s1.setId(2);
		s1.setFname("sathya1");
		s1.setSname("chary1");
		s1.setStandard("4th");
		crudRepository.save(s1);
	}

}

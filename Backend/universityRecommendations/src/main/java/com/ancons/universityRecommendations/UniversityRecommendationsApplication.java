package com.ancons.universityRecommendations;

import java.time.LocalDate;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.service.StudentService;

@SpringBootApplication
public class UniversityRecommendationsApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(UniversityRecommendationsApplication.class, args);
		StudentService studentService = (StudentService) context.getBean("studentServiceImpl");
 		Student student = new Student();
		student.setFirstName("FirstName");
		student.setLastName("LastName");
		student.setEmail("myemail@mail.com");
		student.setDateOfBirth(LocalDate.parse("2000-01-01"));
		studentService.saveDetailsAndGeneratePin(student);
	}

}

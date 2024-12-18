package com.ancons.universityRecommendations.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ancons.universityRecommendations.model.Student;

@RestController
@RequestMapping("/api")
public class StudentController {
	
	@GetMapping
	public ResponseEntity<Student> getStudentDetails(@PathVariable String email) {
		return null;
	}
}

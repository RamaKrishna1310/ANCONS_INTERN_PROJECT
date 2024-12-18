package com.ancons.universityRecommendations.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.service.StudentService;

@RestController
@RequestMapping("/api")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/{id}/getStudent")
	public ResponseEntity<Student> getStudentDetails(@PathVariable Long id) {
		Student student = studentService.getStudent(id);
		return ResponseEntity.ok(student);
	}
	
	@GetMapping("/getStudentProfile")
	public ResponseEntity<Student> getStudentProfile(@RequestHeader("Authorization") String jwt) throws Exception {
		Student student = studentService.getStudentProfile(jwt);
		return ResponseEntity.ok(student);
	}
}

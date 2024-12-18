package com.ancons.universityRecommendations.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ancons.universityRecommendations.model.StudentApplication;
import com.ancons.universityRecommendations.service.StudentApplicationService;

@RestController
@RequestMapping("/api")
public class StudentApplicationController {
	
	@Autowired
	private StudentApplicationService studentApplicationService;
	
	@PutMapping("/{id}/createApplication")
	public ResponseEntity<Void> createApplication(@RequestBody StudentApplication studentApplication, @PathVariable Long id) {
		studentApplicationService.createApplication(studentApplication, id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}/getStudentApplication")
	public ResponseEntity<StudentApplication> getStudentApplication(@PathVariable Long id) {
		StudentApplication studentApplication = studentApplicationService.getStudentApplication(id);
		return ResponseEntity.ok(studentApplication);
	}
	
	@GetMapping("/{id}/getStudentApplications")
	public ResponseEntity<List<StudentApplication>> getStudentApplications(@PathVariable Long id) {
		List<StudentApplication> studentApplications = studentApplicationService.getStudentApplications(id);
		return ResponseEntity.ok(studentApplications);
	}
}

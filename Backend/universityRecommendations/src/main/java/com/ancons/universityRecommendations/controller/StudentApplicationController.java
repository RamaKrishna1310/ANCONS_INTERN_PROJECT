package com.ancons.universityRecommendations.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ancons.universityRecommendations.model.StudentApplication;
import com.ancons.universityRecommendations.service.StudentApplicationService;

@RestController
@RequestMapping("/api")
public class StudentApplicationController {
	
	@Autowired
	private StudentApplicationService studentApplicationService;
	
	@PostMapping("/{id}/createApplication")
	public ResponseEntity<Long> createApplication(@RequestBody StudentApplication studentApplication, @PathVariable Long id) {
		StudentApplication createdStudentApplication = studentApplicationService.createApplication(studentApplication, id);
		return ResponseEntity.ok(createdStudentApplication.getId());
	}
	
	@GetMapping("/{id}/getStudentApplication/{applicationId}")
	public ResponseEntity<StudentApplication> getStudentApplication(@PathVariable Long id, @PathVariable Long applicationId) {
		StudentApplication studentApplication = studentApplicationService.getStudentApplication(id, applicationId);
		return ResponseEntity.ok(studentApplication);
	}
	
	@GetMapping("/{id}/getStudentApplications")
	public ResponseEntity<List<StudentApplication>> getStudentApplications(@PathVariable Long id) {
		List<StudentApplication> studentApplications = studentApplicationService.getStudentApplications(id);
		return ResponseEntity.ok(studentApplications);
	}
}

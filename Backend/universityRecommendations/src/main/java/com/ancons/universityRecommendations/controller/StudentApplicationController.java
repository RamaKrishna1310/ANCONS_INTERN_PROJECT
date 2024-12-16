package com.ancons.universityRecommendations.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
	
	@PutMapping("/{email}/createApplication")
	public ResponseEntity<Void> createApplication(@RequestBody StudentApplication studentApplication, @PathVariable String email) {
		studentApplicationService.createApplication(studentApplication, email);
		return ResponseEntity.noContent().build();
	}
}

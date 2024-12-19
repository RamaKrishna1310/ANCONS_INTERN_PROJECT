package com.ancons.universityRecommendations.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ancons.universityRecommendations.model.EnrollmentPlan;
import com.ancons.universityRecommendations.service.EnrollmentPlanService;

@RestController
@RequestMapping("/api")
public class EnrollmentPlanController {
	
	@Autowired
	private EnrollmentPlanService enrollmentPlanService;
	
	@PostMapping("/{id}/createEnrollmentPlan")
	public ResponseEntity<Void> saveEnrollmentPlan(@RequestBody EnrollmentPlan enrollmentPlan, @PathVariable Long id){
		enrollmentPlanService.saveEnrollmentPlan(enrollmentPlan, id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}/getEnrollmentPlan")
	public ResponseEntity<EnrollmentPlan> getEnrollmentPlan(@PathVariable Long id) {
		EnrollmentPlan enrollmentPlan = enrollmentPlanService.getEnrollmentPlan(id);
		return ResponseEntity.ok(enrollmentPlan);
	}
}

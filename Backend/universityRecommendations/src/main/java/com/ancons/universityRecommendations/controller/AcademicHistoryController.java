package com.ancons.universityRecommendations.controller;

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

import com.ancons.universityRecommendations.model.AcademicHistory;
import com.ancons.universityRecommendations.service.AcademicHistoryService;

@RestController
@RequestMapping("/api")
public class AcademicHistoryController {

	@Autowired
	private AcademicHistoryService academicHistoryService;
	
	@PostMapping("/{id}/createAcademicHistory/{historyId}")
	public ResponseEntity<Void> saveAcademicHistory(@RequestBody AcademicHistory academicHistory, @PathVariable Long id, @PathVariable Long historyId) {
		academicHistoryService.saveAcademicHistory(academicHistory, id, historyId);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}/getAcademicHistory")
	public ResponseEntity<List<AcademicHistory>> getAcademicHistory(@PathVariable Long id) {
		List<AcademicHistory> academicHistory = academicHistoryService.getAcademicHistory(id);
		return ResponseEntity.ok(academicHistory);
	}
}

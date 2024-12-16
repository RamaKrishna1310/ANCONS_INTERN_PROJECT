package com.ancons.universityRecommendations.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ancons.universityRecommendations.model.PersonalInformation;
import com.ancons.universityRecommendations.service.PersonalInformationService;

@RestController
@RequestMapping("/api")
public class PersonalInformationController {
	
	@Autowired
	private PersonalInformationService personalInformationService;
	
	@PostMapping("/{email}/personal-information")
	public ResponseEntity<Void> savePersonalInformation(@RequestBody PersonalInformation personalInformation, @PathVariable String email) {
		personalInformationService.savePersonalInformation(personalInformation, email);
		return ResponseEntity.ok().build();
	}
	
}

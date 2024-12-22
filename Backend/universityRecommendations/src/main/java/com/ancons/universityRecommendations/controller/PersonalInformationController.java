package com.ancons.universityRecommendations.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ancons.universityRecommendations.dto.StudentDto;
import com.ancons.universityRecommendations.model.Address;
import com.ancons.universityRecommendations.model.PersonalInformation;
import com.ancons.universityRecommendations.service.PersonalInformationService;

@RestController
@RequestMapping("/api")
public class PersonalInformationController {
	
	@Autowired
	private PersonalInformationService personalInformationService;
	
	@PostMapping("/{id}/createPersonalInformation")
	public ResponseEntity<Void> savePersonalInformation(@RequestBody StudentDto studentDto, @PathVariable Long id) {
		personalInformationService.savePersonalInformation(studentDto, id);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/{id}/getPersonalInformation")
	public ResponseEntity<PersonalInformation> getPersonalInformation(@PathVariable Long id) {
		PersonalInformation personalInformation = personalInformationService.getPersonalInformation(id);
		return ResponseEntity.ok(personalInformation);
	}
	
	@GetMapping("/{id}/getAddresses")
	public ResponseEntity<List<Address>> getAddresses(@PathVariable Long id) {
		List<Address> addresses = personalInformationService.getAddresses(id);
		return ResponseEntity.ok(addresses);
	}
	
}

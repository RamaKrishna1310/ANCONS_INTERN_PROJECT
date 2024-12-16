package com.ancons.universityRecommendations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.model.Address;
import com.ancons.universityRecommendations.model.PersonalInformation;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.AddressRepository;
import com.ancons.universityRecommendations.repository.PersonalInformationRepository;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class PersonalInformationServiceImpl implements PersonalInformationService {

	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private PersonalInformationRepository personalInformationRepository;
	
	@Override
	public void savePersonalInformation(PersonalInformation personalInformation, String email) {
		Student existingStudent = studentRepository.findByEmail(email);
		for (Address address : personalInformation.getAddresses()) {
			addressRepository.save(address);
		}
		personalInformationRepository.save(personalInformation);
		existingStudent.setPersonalInformation(personalInformation);
		studentRepository.save(existingStudent);
	}

}

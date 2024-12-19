package com.ancons.universityRecommendations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.dto.StudentDto;
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
	public void savePersonalInformation(StudentDto studentDto, Long id) {
		Student existingStudent = studentRepository.findById(id).get();
		for (Address address : studentDto.getAddresses()) {
			address.setStudent(existingStudent);
			addressRepository.save(address);
		}
		PersonalInformation personalInformation = studentDto.getPersonalInformation();
		personalInformation.setStudent(existingStudent);
		personalInformationRepository.save(personalInformation);
		if (studentDto.getFirstName() != "" ) {
			
		}
	}

	@Override
	public PersonalInformation getPersonalInformation(Long id) {
		return personalInformationRepository.findByStudentId(id);
	}

}

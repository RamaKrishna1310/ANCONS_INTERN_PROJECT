package com.ancons.universityRecommendations.service;

import java.util.List;

import com.ancons.universityRecommendations.dto.StudentDto;
import com.ancons.universityRecommendations.model.Address;
import com.ancons.universityRecommendations.model.PersonalInformation;

public interface PersonalInformationService {
	public void savePersonalInformation(StudentDto studentDto, Long id);
	public PersonalInformation getPersonalInformation(Long id);
	public List<Address> getAddresses(Long id);
}

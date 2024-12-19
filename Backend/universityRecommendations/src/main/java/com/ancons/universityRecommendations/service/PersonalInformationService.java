package com.ancons.universityRecommendations.service;

import com.ancons.universityRecommendations.dto.StudentDto;
import com.ancons.universityRecommendations.model.PersonalInformation;

public interface PersonalInformationService {
	public void savePersonalInformation(StudentDto studentDto, Long id);
	public PersonalInformation getPersonalInformation(Long id);
}

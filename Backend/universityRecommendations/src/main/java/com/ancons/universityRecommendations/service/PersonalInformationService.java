package com.ancons.universityRecommendations.service;

import com.ancons.universityRecommendations.dto.StudentDto;

public interface PersonalInformationService {
	public void savePersonalInformation(StudentDto studentDto, Long id);
}

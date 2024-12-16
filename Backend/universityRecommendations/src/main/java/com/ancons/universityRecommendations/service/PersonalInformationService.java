package com.ancons.universityRecommendations.service;

import com.ancons.universityRecommendations.model.PersonalInformation;

public interface PersonalInformationService {
	public void savePersonalInformation(PersonalInformation personalInformation, String email);
}

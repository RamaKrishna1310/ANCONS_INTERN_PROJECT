package com.ancons.universityRecommendations.service;

import com.ancons.universityRecommendations.model.StudentApplication;

public interface StudentApplicationService {
	public void createApplication(StudentApplication studentApplication, String email);
}
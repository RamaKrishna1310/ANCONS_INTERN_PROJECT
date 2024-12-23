package com.ancons.universityRecommendations.service;

import java.util.List;

import com.ancons.universityRecommendations.model.StudentApplication;

public interface StudentApplicationService {
	public StudentApplication createApplication(StudentApplication studentApplication, Long id);
	public StudentApplication getStudentApplication(Long id, Long applicationId);
	public List<StudentApplication> getStudentApplications(Long id);
}
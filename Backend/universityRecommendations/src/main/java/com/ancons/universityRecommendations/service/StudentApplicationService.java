package com.ancons.universityRecommendations.service;

import java.util.List;

import com.ancons.universityRecommendations.model.StudentApplication;

public interface StudentApplicationService {
	public void createApplication(StudentApplication studentApplication, Long id);
	public StudentApplication getStudentApplication(Long id);
	public List<StudentApplication> getStudentApplications(Long id);
}
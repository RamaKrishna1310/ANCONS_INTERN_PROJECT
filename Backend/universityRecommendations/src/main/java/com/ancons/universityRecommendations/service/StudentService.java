package com.ancons.universityRecommendations.service;

import com.ancons.universityRecommendations.model.Student;

public interface StudentService {
	public Student getStudent(Long id);
	public Student getStudentProfile(String token) throws Exception;
}

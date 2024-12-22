package com.ancons.universityRecommendations.service;

import java.time.LocalDate;

import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.response.AuthResponse;

public interface AuthService {
	public Student registerAndGeneratePin(Student student) throws Exception;
	public String verifyPin(Integer pin, LocalDate dateOfBirth, String email);
	public AuthResponse createPassword(String password, String email);
}

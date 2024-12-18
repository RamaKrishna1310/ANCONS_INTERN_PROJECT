package com.ancons.universityRecommendations.service;

import java.time.LocalDate;

import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.response.AuthResponse;

public interface AuthService {
	public String registerAndGeneratePin(Student student);
	public String verifyPin(Integer pin, LocalDate dateOfBirth, String email);
	public AuthResponse createPassword(String password, String email);
}

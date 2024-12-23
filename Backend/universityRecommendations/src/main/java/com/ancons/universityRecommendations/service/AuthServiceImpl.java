package com.ancons.universityRecommendations.service;

import java.time.LocalDate;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ancons.universityRecommendations.config.JwtProvider;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.StudentRepository;
import com.ancons.universityRecommendations.response.AuthResponse;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private NotificationServiceImpl notificationServiceImpl;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public Student registerAndGeneratePin(Student student) throws Exception {
		if (studentRepository.existsByEmail(student.getEmail())) {
			throw new Exception("Email already exists");
		} else {
			Student newStudent = new Student();
			newStudent.setFirstName(student.getFirstName());
			newStudent.setLastName(student.getLastName());
			newStudent.setEmail(student.getEmail()); 
			newStudent.setDateOfBirth(student.getDateOfBirth());
			Integer pin = generatePin();
			newStudent.setPin(pin);
			notificationServiceImpl.sendNotification(student.getEmail(), "Verification PIN", String.valueOf(pin));
			Student createdStudent = studentRepository.save(newStudent);
			createdStudent.setPin(null);
			return createdStudent;
		}
	}

	public Integer generatePin() {
		final int LENGTH = 6;
		Random random = new Random();
		StringBuilder pin = new StringBuilder();
		for (int i = 0; i < LENGTH; i++) {
			int randomNumber = random.nextInt(10);
			pin.append(randomNumber);
		}
		return Integer.parseInt(pin.toString().trim());
	}

	@Override
	public String verifyPin(Integer pin, LocalDate dateOfBirth, String email) {
		Student foundStudent = studentRepository.findByEmail(email);
		if (foundStudent.getPin().equals(pin) && foundStudent.getDateOfBirth().equals(dateOfBirth)) {
			return email;
		}
		return null;
	}

	@Override
	public AuthResponse createPassword(String password, String email) {
		Student foundStudent = studentRepository.findByEmail(email);
		if (foundStudent != null) {
			if (password != null) {
				foundStudent.setPassword(passwordEncoder.encode(password));
			} else {
				return null;
			}
			studentRepository.save(foundStudent);
			Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String token = JwtProvider.generateToken(authentication);
			AuthResponse authResponse = new AuthResponse();
			authResponse.setJwt(token);
			authResponse.setMessage("Register success");
			
			return authResponse;
		}
		return null;
	}
}
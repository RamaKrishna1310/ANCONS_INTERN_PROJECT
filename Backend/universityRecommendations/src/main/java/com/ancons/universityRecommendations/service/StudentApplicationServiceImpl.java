package com.ancons.universityRecommendations.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.domain.ApplicationStatus;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.model.StudentApplication;
import com.ancons.universityRecommendations.repository.StudentApplicationRepository;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class StudentApplicationServiceImpl implements StudentApplicationService {

	@Autowired
	StudentRepository studentRepository;
	@Autowired
	StudentApplicationRepository studentApplicationRepository;
	
	@Override
	public void createApplication(StudentApplication studentApplication, String email) {
		Student existingStudent = studentRepository.findByEmail(email);
		studentApplication.setStartedAt(LocalDate.now());
		studentApplication.setStatus(ApplicationStatus.InProgress);
		studentApplicationRepository.save(studentApplication);
		existingStudent.getApplications().add(studentApplication);
		studentRepository.save(existingStudent);
	}

}

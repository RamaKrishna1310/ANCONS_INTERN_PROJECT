package com.ancons.universityRecommendations.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.domain.ApplicationStatus;
import com.ancons.universityRecommendations.domain.ApplicationType;
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
	public StudentApplication createApplication(StudentApplication studentApplication, Long id) {
		Student existingStudent = studentRepository.findById(id).get();
		studentApplication.setStartedAt(LocalDate.now());
		studentApplication.setStatus(ApplicationStatus.InProgress);
		studentApplication.setStudent(existingStudent);
		return studentApplicationRepository.save(studentApplication);
	}

	@Override
	public StudentApplication getStudentApplication(Long id, Long applicationId) {
		return studentApplicationRepository.findByStudentIdAndId(id, applicationId);
	}

	@Override
	public List<StudentApplication> getStudentApplications(Long id) {
		return studentApplicationRepository.findAllByStudentId(id);
	}

}

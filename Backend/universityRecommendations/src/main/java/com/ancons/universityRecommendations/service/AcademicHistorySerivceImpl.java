package com.ancons.universityRecommendations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.model.AcademicHistory;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.AcademicHistoryRepository;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class AcademicHistorySerivceImpl implements AcademicHistoryService {

	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private AcademicHistoryRepository academicHistoryRepository;
	
	@Override
	public void saveAcademicHistory(AcademicHistory academicHistory, String email) {
		Student existingStudent = studentRepository.findByEmail(email);
		academicHistoryRepository.save(academicHistory);
		existingStudent.getAcademicHistories().add(academicHistory);
		studentRepository.save(existingStudent);
	}

}

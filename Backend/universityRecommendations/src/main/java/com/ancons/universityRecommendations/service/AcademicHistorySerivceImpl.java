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
	public void saveAcademicHistory(AcademicHistory academicHistory, Long id) {
		Student existingStudent = studentRepository.findById(id).get();
		academicHistory.setStudent(existingStudent);
		academicHistoryRepository.save(academicHistory);
		existingStudent.getAcademicHistories().add(academicHistory);
	}

}

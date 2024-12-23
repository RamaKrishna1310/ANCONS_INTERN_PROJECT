package com.ancons.universityRecommendations.service;

import java.util.List;

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
	public void saveAcademicHistory(AcademicHistory academicHistory, Long id, Long historyId) {
		Student existingStudent = studentRepository.findById(id).get();
		if (historyId != 0) {
			AcademicHistory existingAcademicHistory = academicHistoryRepository.findById(historyId).orElseThrow();
			if (academicHistory.getCity() != null) {
				existingAcademicHistory.setCity(academicHistory.getCity());
			}
			if (academicHistory.getCountry() != null) {
				existingAcademicHistory.setCountry(academicHistory.getCountry());
			}
			if (academicHistory.getEndMonthYear() != null) {
				existingAcademicHistory.setEndMonthYear(academicHistory.getEndMonthYear());
			}
			if (academicHistory.getInstitutionName() != null) {
				existingAcademicHistory.setInstitutionName(academicHistory.getInstitutionName());
			}
			if (academicHistory.getLevelOfStudy() != null) {
				existingAcademicHistory.setLevelOfStudy(academicHistory.getLevelOfStudy());
			}
			if (academicHistory.getStartMonthYear() != null) {
				existingAcademicHistory.setStartMonthYear(academicHistory.getStartMonthYear());
			}
			if (academicHistory.getState() != null) {
				existingAcademicHistory.setState(academicHistory.getState());
			}
			if (academicHistory.getType() != null) {
				existingAcademicHistory.setType(academicHistory.getType());
			}
			academicHistoryRepository.save(existingAcademicHistory);
		} else {
			academicHistory.setStudent(existingStudent);
			academicHistoryRepository.save(academicHistory);
		}
	}

	@Override
	public List<AcademicHistory> getAcademicHistory(Long id) {
		return academicHistoryRepository.findAllByStudentId(id);
	}

}

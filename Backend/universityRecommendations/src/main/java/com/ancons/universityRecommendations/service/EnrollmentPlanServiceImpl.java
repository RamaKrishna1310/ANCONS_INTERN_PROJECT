package com.ancons.universityRecommendations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.model.EnrollmentPlan;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.EnrollmentPlanRepository;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class EnrollmentPlanServiceImpl implements EnrollmentPlanService {

	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private EnrollmentPlanRepository enrollmentPlanRepository;
	
	@Override
	public void saveEnrollmentPlan(EnrollmentPlan enrollmentPlan, Long id) {
		Student existingStudent = studentRepository.findById(id).get();
		if (enrollmentPlanRepository.existsByStudentId(id)) {
			EnrollmentPlan existingEnrollmentPlan = getEnrollmentPlan(id);
			if (enrollmentPlan.getApplicationType() != null) {
				existingEnrollmentPlan.setApplicationType(enrollmentPlan.getApplicationType());
			}
			if (enrollmentPlan.getIntendedMajor() != null) {
				existingEnrollmentPlan.setIntendedMajor(enrollmentPlan.getIntendedMajor());
			}
			if (enrollmentPlan.getSelectedGraduationType() != null) {
				existingEnrollmentPlan.setSelectedGraduationType(enrollmentPlan.getSelectedGraduationType());
			}
			if (enrollmentPlan.getStudentType() != null) {
				existingEnrollmentPlan.setStudentType(enrollmentPlan.getStudentType());
			}
			enrollmentPlanRepository.save(existingEnrollmentPlan);
		} else {
			enrollmentPlan.setStudent(existingStudent);
			enrollmentPlanRepository.save(enrollmentPlan);			
		}
	}

	@Override
	public EnrollmentPlan getEnrollmentPlan(Long id) {
		return enrollmentPlanRepository.findByStudentId(id);
	}

}

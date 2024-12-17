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
	public void saveEnrollmentPlan(EnrollmentPlan enrollmentPlan, String Email) {
		Student existingStudent = studentRepository.findByEmail(Email);
		enrollmentPlanRepository.save(enrollmentPlan);
		existingStudent.setEnrollmentPlan(enrollmentPlan);
		studentRepository.save(existingStudent);
	}

}

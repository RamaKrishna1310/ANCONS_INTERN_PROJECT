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
		enrollmentPlan.setStudent(existingStudent);
		enrollmentPlanRepository.save(enrollmentPlan);
		existingStudent.setEnrollmentPlan(enrollmentPlan);
	}

	@Override
	public EnrollmentPlan getEnrollmentPlan(Long id) {
		return enrollmentPlanRepository.findByStudentId(id);
	}

}

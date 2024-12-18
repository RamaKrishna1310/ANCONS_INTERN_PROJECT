package com.ancons.universityRecommendations.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.config.JwtProvider;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student getStudent(Long id) {
		return studentRepository.findById(id).get();
	}

	@Override
	public Student getStudentProfile(String token) throws Exception {
		String email = JwtProvider.getEmailFromJwtToken(token);
		Student student = studentRepository.findByEmail(email);
		if (student == null) {
			throw new Exception("Student not found with this email");
		} else {
			return student;
		}
	}

}

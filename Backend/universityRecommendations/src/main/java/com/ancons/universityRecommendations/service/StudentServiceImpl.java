package com.ancons.universityRecommendations.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private NotificationService notificationService;

	@Override
	public void saveDetailsAndGeneratePin(Student student) {
		if (studentRepository.existsByEmail(student.getEmail())) {
			System.out.println("email already exists");
		} else {
			Student newStudent = new Student();
			newStudent.setFirstName(student.getFirstName());
			newStudent.setLastName(student.getLastName());
			newStudent.setEmail(student.getEmail()); 
			newStudent.setDateOfBirth(student.getDateOfBirth());
			Integer pin = generatePin();
			newStudent.setPin(pin);
			studentRepository.save(newStudent);
			notificationService.sendNotification(student.getEmail(), "Verification PIN", String.valueOf(pin));
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
}
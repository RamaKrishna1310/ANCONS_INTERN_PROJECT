package com.ancons.universityRecommendations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
	boolean existsByEmail(String email);
	Student findByEmail(String email);
	Student findByPasswordResetToken(String passwordResetToken);
}

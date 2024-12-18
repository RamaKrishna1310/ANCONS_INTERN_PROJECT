package com.ancons.universityRecommendations.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.StudentApplication;

public interface StudentApplicationRepository extends JpaRepository<StudentApplication, Long>{
	StudentApplication findByStudentId(Long id);
	List<StudentApplication> findAllByStudentId(Long id);
}

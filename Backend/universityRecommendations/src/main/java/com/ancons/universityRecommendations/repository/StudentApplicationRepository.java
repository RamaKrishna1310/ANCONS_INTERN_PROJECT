package com.ancons.universityRecommendations.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ancons.universityRecommendations.domain.ApplicationType;
import com.ancons.universityRecommendations.model.StudentApplication;

public interface StudentApplicationRepository extends JpaRepository<StudentApplication, Long>{
	StudentApplication findByStudentIdAndId(Long studentId, Long id);
	List<StudentApplication> findAllByStudentId(Long id);
}

package com.ancons.universityRecommendations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.StudentApplication;

public interface StudentApplicationRepository extends JpaRepository<StudentApplication, Long>{

}

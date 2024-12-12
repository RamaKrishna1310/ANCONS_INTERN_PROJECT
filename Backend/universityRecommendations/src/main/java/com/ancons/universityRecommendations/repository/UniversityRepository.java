package com.ancons.universityRecommendations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.University;

public interface UniversityRepository extends JpaRepository<University, Long> {

}

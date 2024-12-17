package com.ancons.universityRecommendations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.EnrollmentPlan;

public interface EnrollmentPlanRepository extends JpaRepository<EnrollmentPlan, Long> {

}

package com.ancons.universityRecommendations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.PersonalInformation;

public interface PersonalInformationRepository extends JpaRepository<PersonalInformation, Long> {
	PersonalInformation findByStudentId(Long id);
}

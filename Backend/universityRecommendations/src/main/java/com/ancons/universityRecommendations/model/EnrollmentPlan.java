package com.ancons.universityRecommendations.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnrollmentPlan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String selectedGraduationType;
	private String studentType;
	private String applicationType;
	private String intendedMajor;
	private boolean isCaapApplication;
	private boolean optionalTest;
	private boolean honorsProgram;
	private boolean onCampusHousing;
	private boolean financialAid;
}

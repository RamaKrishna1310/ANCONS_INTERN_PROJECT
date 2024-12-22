package com.ancons.universityRecommendations.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AcademicHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String type;
	private String institutionName;
	private String country;
	private String city;
	private String state;
	private String startMonthYear;
	private String endMonthYear;
	private String levelOfStudy;
	
	@ManyToOne
	private Student student;
}

package com.ancons.universityRecommendations.model;

import java.time.LocalDate;

import com.ancons.universityRecommendations.domain.ApplicationStatus;
import com.ancons.universityRecommendations.domain.ApplicationType;

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
public class StudentApplication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private ApplicationType type;
	private ApplicationStatus status;
	private LocalDate startedAt;
	
	@ManyToOne
	private Student student;
}

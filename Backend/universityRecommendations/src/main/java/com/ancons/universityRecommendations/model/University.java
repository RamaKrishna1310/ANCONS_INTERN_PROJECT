package com.ancons.universityRecommendations.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class University {

	@Id
	private Long id;
	private String name;
	
	private Location ;
	private String typeOfSchool;
	private Long totalEnrolments;
	private Double acceptance;
	
	private Long deptId;
	private Long tuitionFee;
	private LocalDate fallDeadline;
	private LocalDate springDeadline;
	private Long applicationFee;
	private Double gpa;
	private Long toefl;
	private Double ielts;
	private Long pte;
	private Long greV;
	private Long greQ;
	private String email;
	private String phoneNo;
	
}

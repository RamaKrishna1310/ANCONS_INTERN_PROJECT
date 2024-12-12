package com.ancons.universityRecommendations.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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

	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "zip_code")
	private Location location;
	private String typeOfSchool;
	private Long totalEnrolments;
	private Double acceptance;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "department_id")
	private Department department;

	@JsonIgnore
	@ManyToMany
	private List<Course> courses = new ArrayList<>();
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

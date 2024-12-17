package com.ancons.universityRecommendations.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String firstName;
	private String lastName;
	@NotNull
	private String email;
	@NotNull
	private LocalDate dateOfBirth;
	private Integer pin;
	private String password;
	private String role;
	
	@JsonIgnore
	@OneToMany
	private List<StudentApplication> applications = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne
	private PersonalInformation personalInformation;
	
	@JsonIgnore
	@OneToMany
	private List<Address> addresses = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne
	private EnrollmentPlan enrollmentPlan;
	
	@JsonIgnore
	@OneToMany
	private List<AcademicHistory> academicHistories = new ArrayList<>();
}

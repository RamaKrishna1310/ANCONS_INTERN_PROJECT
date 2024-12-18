package com.ancons.universityRecommendations.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
	private String firstName;
	private String lastName;
	private String email;
	private LocalDate dateOfBirth;
	private Integer pin;
	private String password;
	private String role;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<StudentApplication> applications = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private PersonalInformation personalInformation;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Address> addresses = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private EnrollmentPlan enrollmentPlan;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<AcademicHistory> academicHistories = new ArrayList<>();
}

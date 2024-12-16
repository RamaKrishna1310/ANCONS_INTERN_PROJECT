package com.ancons.universityRecommendations.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalInformation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String prefix;
	private String firstName;
	private String middleName;
	private String lastName;
	private String suffix;
	private String otherFirstName;
	private String otherLastName;
	
	@JsonIgnore
	@OneToMany
	private List<Address> addresses = new ArrayList<>();
	private String email;
	private String dayTimeNo;
	private String homePhone;
	private String cellPhone;
	private String gender;
	private LocalDate dateOfBirth;
	private String primaryCitizenship;
	private String dualCitizenship;
	private String socialSecurityNumber;
	private boolean hispanicOrLatino;
	private List<String> memberGroups = new ArrayList<>();
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="student_id")
	private Student student;
}

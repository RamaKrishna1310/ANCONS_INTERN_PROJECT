package com.ancons.universityRecommendations.model;

import java.util.ArrayList;
import java.util.List;


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
public class PersonalInformation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String prefix;
	private String middleName;
	private String suffix;
	private String otherFirstName;
	private String otherLastName;
	private String dayTimeNo;
	private String homePhone;
	private String cellPhone;
	private String gender;
	private String primaryCitizenship;
	private String dualCitizenship;
	private String socialSecurityNumber;
	private boolean hispanicOrLatino;
	private List<String> memberGroups = new ArrayList<>();
}

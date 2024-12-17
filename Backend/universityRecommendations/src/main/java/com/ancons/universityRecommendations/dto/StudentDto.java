package com.ancons.universityRecommendations.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.ancons.universityRecommendations.model.Address;
import com.ancons.universityRecommendations.model.PersonalInformation;
import com.ancons.universityRecommendations.model.StudentApplication;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {

	private String firstName;
	private String lastName;
	private String email;
	private LocalDate dateOfBirth;
	private List<StudentApplication> applications = new ArrayList<>();
	private PersonalInformation personalInformation;
	private List<Address> addresses = new ArrayList<>();

}

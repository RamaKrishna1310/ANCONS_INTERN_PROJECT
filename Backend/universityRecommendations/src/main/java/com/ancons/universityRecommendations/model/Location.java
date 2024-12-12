package com.ancons.universityRecommendations.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Location {

	@Id
	private Long zipCode;
	private String City;
	private String State;
	
	@OneToOne(mappedBy = "location")
	private University university;
}

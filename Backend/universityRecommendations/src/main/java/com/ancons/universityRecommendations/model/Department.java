package com.ancons.universityRecommendations.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Department {

	@Id
	private Long id;
	private String name;
	
	@OneToMany(mappedBy = "department")
	private List<University> universitys = new ArrayList<>();
}

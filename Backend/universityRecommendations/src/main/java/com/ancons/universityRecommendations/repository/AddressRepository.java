package com.ancons.universityRecommendations.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
	List<Address> findAllByStudentId(Long id);
	boolean existsByStudentId(Long studentId);
}

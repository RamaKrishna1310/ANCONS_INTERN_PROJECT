package com.ancons.universityRecommendations.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ancons.universityRecommendations.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}

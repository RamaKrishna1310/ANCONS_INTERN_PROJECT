package com.ancons.universityRecommendations.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.StudentRepository;


@Service
public class CustomUserServiceImpl implements UserDetailsService {

	private StudentRepository studentRepository;

	public CustomUserServiceImpl(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Student student = studentRepository.findByEmail(username);

		if (student == null) {

			throw new UsernameNotFoundException("user not found with email  - " + username);
		}
		
		String role = student.getRole();
		if (role == null) {
			role = "STUDENT";
		}
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(role));

		return new org.springframework.security.core.userdetails.User(student.getEmail(), student.getPassword(), authorities);
	}

}

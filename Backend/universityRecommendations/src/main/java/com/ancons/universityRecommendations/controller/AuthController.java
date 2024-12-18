package com.ancons.universityRecommendations.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpStatus;

import com.ancons.universityRecommendations.config.JwtProvider;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.request.LoginRequest;
import com.ancons.universityRecommendations.response.AuthResponse;
import com.ancons.universityRecommendations.service.AuthService;
import com.ancons.universityRecommendations.service.CustomUserServiceImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthService authService;
	@Autowired
	private CustomUserServiceImpl customUserDetails;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/registerAndGeneratePin")
	public ResponseEntity<Void> registerAndGeneratePin(@RequestBody Student student, UriComponentsBuilder ucb)
			throws Exception {
		String registeredEmail = authService.registerAndGeneratePin(student);
		if (registeredEmail == null) {
			throw new Exception("email already exists");
		} else {
			URI newLocation = ucb.path("/auth/{email}/verify-pin").buildAndExpand(registeredEmail).toUri();
			return ResponseEntity.created(newLocation).build();
		}
	}
	
	@PostMapping("/{email}/verify-pin")
	public ResponseEntity<Void> verifyPin(@RequestBody Student student, @PathVariable String email, UriComponentsBuilder ucb) throws Exception {
		String verifiedEmail = authService.verifyPin(student.getPin(), student.getDateOfBirth(), email);
		if (verifiedEmail == null) {
			throw new Exception("pin cannot be verified");
		} else {
			URI newLocation = ucb.path("/auth/{email}/create-password").buildAndExpand(verifiedEmail).toUri();
			return ResponseEntity.created(newLocation).build();
		}
	}
	
	@PutMapping("/{email}/create-password")
	public ResponseEntity<AuthResponse> createPassword(@RequestBody Student student, @PathVariable String email) throws Exception {
		AuthResponse authResponse = authService.createPassword(student.getPassword(), email);
		if (authResponse == null) {
			throw new Exception("error while creating password");
		} else {
 			return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
		}
	}
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {

		String username = loginRequest.getEmail();
		String password = loginRequest.getPassword();


		Authentication authentication = authenticate(username, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = JwtProvider.generateToken(authentication);
		AuthResponse authResponse = new AuthResponse();

		authResponse.setMessage("Login Success");
		authResponse.setJwt(token);

		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
	}

	private Authentication authenticate(String username, String password) {
		UserDetails userDetails = customUserDetails.loadUserByUsername(username);

		if (userDetails == null) {
			throw new BadCredentialsException("Invalid username or password");
		}
		if (!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid username or password");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	}
}

package com.ancons.universityRecommendations.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ancons.universityRecommendations.dto.StudentDto;
import com.ancons.universityRecommendations.model.Address;
import com.ancons.universityRecommendations.model.PersonalInformation;
import com.ancons.universityRecommendations.model.Student;
import com.ancons.universityRecommendations.repository.AddressRepository;
import com.ancons.universityRecommendations.repository.PersonalInformationRepository;
import com.ancons.universityRecommendations.repository.StudentRepository;

@Service
public class PersonalInformationServiceImpl implements PersonalInformationService {

	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private PersonalInformationRepository personalInformationRepository;

	@Override
	public void savePersonalInformation(StudentDto studentDto, Long id) {
		Student existingStudent = studentRepository.findById(id).get();

		// update or save new addresses
		if (addressRepository.existsByStudentId(id)) {
			List<Address> existingAddresses = getAddresses(id);
			for (int i = 0; i < existingAddresses.size(); i++) {
				Address newAddress = studentDto.getAddresses().get(i);
				if (newAddress.getCity() != null) {
					existingAddresses.get(i).setCity(newAddress.getCity());
				}
				if (newAddress.getCountry() != null) {
					existingAddresses.get(i).setCountry(newAddress.getCountry());
				}
				if (newAddress.getPostalCode() != null) {
					existingAddresses.get(i).setPostalCode(newAddress.getPostalCode());
				}
				if (newAddress.getState() != null) {
					existingAddresses.get(i).setState(newAddress.getState());
				}
				if (newAddress.getStreetAddress() != null) {
					existingAddresses.get(i).setStreetAddress(newAddress.getStreetAddress());
				}
				if (newAddress.getType() != null) {
					existingAddresses.get(i).setType(newAddress.getType());
				}
			}
			addressRepository.saveAll(existingAddresses);
		} else {
			for (Address address : studentDto.getAddresses()) {
				address.setStudent(existingStudent);
				addressRepository.save(address);
			}
		}

		// update or save new personalInformation
		PersonalInformation newPersonalInformation = studentDto.getPersonalInformation();
		if (personalInformationRepository.existsByStudentId(id)) {
			PersonalInformation existingPersonalInformation = getPersonalInformation(id);
			if (newPersonalInformation.getCellPhone() != null) {
				existingPersonalInformation.setCellPhone(newPersonalInformation.getCellPhone());
			}
			if (newPersonalInformation.getDayTimeNo() != null) {
				existingPersonalInformation.setDayTimeNo(newPersonalInformation.getDayTimeNo());
			}
			if (newPersonalInformation.getDualCitizenship() != null) {
				existingPersonalInformation.setDualCitizenship(newPersonalInformation.getDualCitizenship());
			}
			if (newPersonalInformation.getGender() != null) {
				existingPersonalInformation.setGender(newPersonalInformation.getGender());
			}
			if (newPersonalInformation.getHomePhone() != null) {
				existingPersonalInformation.setHomePhone(newPersonalInformation.getHomePhone());
			}
			if (newPersonalInformation.getMiddleName() != null) {
				existingPersonalInformation.setMiddleName(newPersonalInformation.getMiddleName());
			}
			if (newPersonalInformation.getOtherFirstName() != null) {
				existingPersonalInformation.setOtherFirstName(newPersonalInformation.getOtherFirstName());
			}
			if (newPersonalInformation.getOtherLastName() != null) {
				existingPersonalInformation.setOtherLastName(newPersonalInformation.getOtherLastName());
			}
			if (newPersonalInformation.getPrefix() != null) {
				existingPersonalInformation.setPrefix(newPersonalInformation.getPrefix());
			}
			if (newPersonalInformation.getPrimaryCitizenship() != null) {
				existingPersonalInformation.setPrimaryCitizenship(newPersonalInformation.getPrimaryCitizenship());
			}
			if (newPersonalInformation.getSocialSecurityNumber() != null) {
				existingPersonalInformation.setSocialSecurityNumber(newPersonalInformation.getSocialSecurityNumber());
			}
			if (newPersonalInformation.getSuffix() != null) {
				existingPersonalInformation.setSuffix(newPersonalInformation.getSuffix());
			}
			existingPersonalInformation.getMemberGroups().clear();
			existingPersonalInformation.getMemberGroups().addAll(newPersonalInformation.getMemberGroups());
			personalInformationRepository.save(existingPersonalInformation);
		} else {
			newPersonalInformation.setStudent(existingStudent);
			personalInformationRepository.save(newPersonalInformation);
		}
		
		// update new student
		if (studentDto.getFirstName() != null) {
			existingStudent.setFirstName(studentDto.getFirstName());
		}
		if (studentDto.getLastName() != null) {
			existingStudent.setLastName(studentDto.getLastName());
		}
		if (studentDto.getEmail() != null) {
			existingStudent.setEmail(studentDto.getEmail());
		}
		if (studentDto.getDateOfBirth() != null) {
			existingStudent.setDateOfBirth(studentDto.getDateOfBirth());
		}
		studentRepository.save(existingStudent);
	}

	@Override
	public PersonalInformation getPersonalInformation(Long id) {
		return personalInformationRepository.findByStudentId(id);
	}

	@Override
	public List<Address> getAddresses(Long id) {
		return addressRepository.findAllByStudentId(id);
	}

}

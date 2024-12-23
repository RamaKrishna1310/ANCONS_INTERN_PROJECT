package com.ancons.universityRecommendations.service;

import java.util.List;

import com.ancons.universityRecommendations.model.AcademicHistory;

public interface AcademicHistoryService {
	public void saveAcademicHistory(AcademicHistory academicHistory, Long id, Long historyId);
	public List<AcademicHistory> getAcademicHistory(Long id);
}

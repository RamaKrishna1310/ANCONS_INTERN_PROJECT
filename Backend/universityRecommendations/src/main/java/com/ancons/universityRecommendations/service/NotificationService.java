package com.ancons.universityRecommendations.service;

public interface NotificationService {
	public void sendNotification(String to, String subject, String body);
}

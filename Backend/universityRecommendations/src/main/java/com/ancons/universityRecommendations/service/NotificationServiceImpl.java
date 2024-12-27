package com.ancons.universityRecommendations.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class NotificationServiceImpl {

	private final JavaMailSender javaMailSender;
	
	public NotificationServiceImpl(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotification(String to, String subject, String body) throws MessagingException {
		
		MimeMessage message = javaMailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	    
	    String content = "<p>Hello, </p>"
	    		+ "<p>You have requested to verify your account registration.</p>"
	    		+ "<p>Your Verification PIN is:</p>" + body + "<br/>"
	            + "<p>Ignore this email if you already verified your account, "
	            + "or you have not made the request.</p>";
		
	    helper.setTo(to);
	    helper.setSubject(subject);
	    helper.setText(content, true);
	    
		javaMailSender.send(message);
	}
	
	public void sendResetPasswordLink(String to, String token) throws MessagingException {
		
		MimeMessage message = javaMailSender.createMimeMessage();              
	    MimeMessageHelper helper = new MimeMessageHelper(message);
	    
		String link = "http://localhost:3000/apply/reset-password?token=" + token;
		String subject = "Here's the link to reset your password";
		String content = "<p>Hello,</p>"
	            + "<p>You have requested to reset your password.</p>"
	            + "<p>Click the link below to change your password:</p>"
	            + "<p><a href=\"" + link + "\">Change my password</a></p>"
	            + "<br/>"
	            + "<p>Ignore this email if you do remember your password, "
	            + "or you have not made the request.</p>";
		
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setText(content, true);
		
		javaMailSender.send(message);
	}

}

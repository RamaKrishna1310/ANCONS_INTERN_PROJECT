create database university_recommendation;
show databases;
use university_recommendation;
show tables;
desc university;
desc location;
desc department;
desc course;
desc university_courses;
desc student;
desc student_application;
desc student_applications;
desc address;
desc student_addresses;
desc personal_information;
desc enrollment_plan;
desc academic_history;
desc student_academic_histories;

select * from university;
select * from course;
select * from location;
select * from department;
select * from university_courses;
select * from student;
select * from student_application;
select * from student_applications;
select * from personal_information;
select * from address;
select * from student_addresses;
select * from enrollment_plan;
select * from academic_history;
select * from student_academic_histories;

select * from university_courses join university on university_courses.university_id=university.id join course on university_courses.courses_id=course.id;
select * from university_courses join university on university_courses.university_id=university.id join course on university_courses.courses_id=course.id where university.acceptance = 55;

delete from address;

alter table personal_information drop column date_of_birth;

drop database university_recommendation;

commit
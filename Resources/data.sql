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

select * from university;
select * from course;
select * from location;
select * from department;
select * from university_courses;
select * from student;
select * from university_courses join university on university_courses.university_id=university.id join course on university_courses.courses_id=course.id;
select * from university_courses join university on university_courses.university_id=university.id join course on university_courses.courses_id=course.id where university.acceptance = 55;

drop database university_recommendation;

commit
create database university_recommendation;
show databases;
use university_recommendation;
show tables;

create table universities(u_id int primary key, name varchar(100) not null unique, zip_code int, type_of_school varchar(50), total_enrolments int, acceptance_in_pct double, dept_id int, tuition_fee_in_dollars int, Fall_deadline date, spring_deadline date, app_fee_in_dollar int, req_GPA double, req_TOEFL int, req_IELTS double, req_PTE int, req_GRE_V int, req_GRE_Q int, email varchar(30), phone varchar(15));
create table courses(c_id int primary key, course_name varchar(100));
create table locations(zip_code int primary key, city varchar(30), state varchar(30));
create table departments(dept_id int primary key, dept_name varchar(30));
create table university_courses(u_id int not null, course_id int not null, constraint FK_u_id foreign key(u_id) references universities(u_id));

insert into universities(u_id,name) values(2,'Cambridge');
insert into departments(dept_id,dept_name) values(3,'Science');
insert into university_departments(u_id,dept_id) values(2,3);

update universities set dept_id=1 where u_id=2;

alter table universities modify column email varchar(80);
alter table universities add constraint FK_zip_code foreign key(zip_code) references locations(zip_code);
alter table university_courses rename column course_id to c_id;
alter table university_courses add constraint FK_c_id foreign key(c_id) references courses(c_id);

desc university_courses;

select * from universities;
select * from courses;
select * from locations;
select * from departments;
select * from university_courses;
select * from university_courses join universities on university_courses.u_id=universities.u_id join courses on university_courses.c_id=courses.c_id;

delete from university_courses;

commit
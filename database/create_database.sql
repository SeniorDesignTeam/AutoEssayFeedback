CREATE DATABASE IF NOT EXISTS AutoEssayDB;
USE 'AutoEssayDB';


DROP TABLE IF EXISTS Student;
CREATE TABLE IF NOT EXISTS Student (student_id varchar(20) NOT NULL AUTO_INCREMENT, first_name varchar(30),
									last_name varchar(30),
									email varchar(30), password varchar(50), PRIMARY KEY(id),
									FOREIGN KEY(class_id) REFERENCES Class(class_id) ON DELETE CASCADE);

DROP TABLE IF EXISTS Class;
CREATE TABLE IF NOT EXISTS Class (course_id varchar(20) NOT NULL AUTO_INCREMENT,
								  course_name varchar(100), PRIMARY KEY(course_id),
								  FOREIGN KEY(student_id) REFERENCES User(student_id) ON DELETE CASCADE);

DROP TABLE IF EXISTS Teacher;
CREATE TABLE IF NOT EXISTS Teacher (teacher_id varchar(20) NOT NULL AUTO_INCREMENT, first_name varchar(30),
									last_name varchar(30), email varchar(30), password varchar(50),
									PRIMARY KEY(teacher_id), FOREIGN KEY(class_id) 
									REFERENCES Class(class_id) ON DELETE CASCADE);

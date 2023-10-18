# Functional Requirements Document (FRD) for School Management System

## Introduction

The School Management System (SMS) is a robust web application designed to automate various administrative and academic tasks within a school. This system will utilize React for the client-side interface, Node.js for server-side logic, and MongoDB for database management.

## Users and Roles

### 1. Admin

- **Description**: Admins have the highest level of access and control over the application. They are the owners of the system.
- **Capabilities**:
  - **Authentication and Authorization**: Admins can log in securely and manage user roles and permissions.
  - **School Management**: Admins can create, edit, and delete schools, and manage system settings and configurations.

### 2. School Admin

- **Description**: School Admins oversee the management of a specific school, handling tasks related to teachers, students, and financials.
- **Capabilities**:
  - **User Management**: Create, edit, and delete teacher and student accounts.
  - **Financial Transactions**: Manage financial transactions, including fees collection and expense tracking.
  - **Reports**: Generate financial and performance reports.
  - **Academic Promotions**: Promote students based on performance.

### 3. Teachers

#### a. Class Teacher

- **Description**: Class Teachers are responsible for a specific class and handle attendance and related tasks.
- **Capabilities**:
  - **Attendance Management**: Mark attendance for their assigned class.
  - **View Attendance Reports**: Access attendance reports for their class.

#### b. Subject Teacher

- **Description**: Subject Teachers are responsible for specific subjects and may teach multiple classes.
- **Capabilities**:
  - **Lesson Planning**: Create lesson notes for assigned subjects.
  - **Assignment Management**: Create and manage weekly assignments for their subjects.
  - **Exams and Tests**: Create tests and exams for their subjects.
  - **View Reports**: Access reports related to their subjects.

### 4. Students

- **Description**: Students are enrolled in specific classes and participate in various academic activities.
- **Capabilities**:
  - **Personal Information**: View their personal information.
  - **Assignment Submission**: Access and submit assignments.
  - **Attendance Records**: View their attendance records.
  - **View Exam Results**: Access exam and test results.
  - **Promotion Status**: Receive promotions based on performance.

### 5. Parents

- **Description**: Parents are linked to one or more students and have access to their children's academic information.
- **Capabilities**:
  - **View Report Cards**: Access report cards of their children.
  - **Communication**: Communicate with teachers through a messaging system.
  - **Raise Concerns**: Raise concerns or complaints.

## Core Functionalities

### 1. User Management

- **Description**: The system should facilitate the creation, modification, and deletion of user accounts. It should also manage authentication and authorization.

### 2. School Management

- **Description**: Admins and School Admins should be able to manage schools, including adding new schools, editing school details, and deleting schools if necessary.

### 3. Financial Management

- **Description**: School Admins should be able to manage financial transactions, including fees collection and expense tracking. They should also be able to generate financial reports.

### 4. Attendance Management

- **Description**: Class Teachers should be able to mark attendance for their assigned classes. Students and parents should be able to view attendance records.

### 5. Academic Activities

- **Description**: Subject Teachers should be able to create lesson notes, weekly assignments, and tests/exams. Students should be able to access and submit assignments, view test/exam results, and receive promotions.

### 6. Parent-Student Communication

- **Description**: Parents should be able to communicate with teachers, view report cards, and raise concerns or complaints.

### 7. Exam Management

- **Description**: Subject Teachers should be able to create, schedule, and manage final exams and tests. Students should be able to view their exam schedules and results.

## Conclusion

The School Management System encompasses a comprehensive range of functionalities to efficiently manage educational institutions. By catering to the specific needs of each user type, the system aims to enhance communication, streamline administrative tasks, and improve the overall academic experience for all stakeholders involved.

# Master-Registry
Master-Registry is a simple web-based CRUD application using Spring Boot back-end and Angular front-end.

It's a REST API that you can perform user registration, login and CRUD operations, as well as displaying dashboards based on the data in the database.

It consists of two parts:
1. Backed-end (Spring Boot APIs) - master-registry
2. Fron-end (Angular) - master-registry-ui

The Angular front-end calls the back-end Spring Boot APIs 
The back-end exposed the APIs, which are consumed by the front-end service

Application to demonstrate various parts of a service oriented RESTful application.
Backend (REST-API)	SpringBoot (Java)
Frontend	Angular 8+
Database	PostgreSQL
Persistence	JPA (Using Spring Data)
Client Build Tools	angular-cli, Webpack, npm
Server Build Tools	Maven(Java)

Prerequisites
Ensure you have this installed before proceeding further

    Java 8
    Maven 3.3.9+
    Node 6.0 or above
    npm 4 or above
    Angular-cli

About
This is an RESTfull implementation of a simple CRUD app. The goal of the project is to

    Highlight techniques of making a REST full app using SpringBoot
    How to consume an RESTfull service and make an HTML5 based Single Page App using Angular

Install Frontend
# Navigate to PROJECT_FOLDER (should contain package.json )
npm install
Or Open it in Visual Studio Code IDE, and run => ng serve, to start the development server

Install Backend (SpringBoot Java)
# Maven Build : Navigate to the root folder where pom.xml is present and open with IntelliJ IDEA prefereble
and run it

The you can access the Back-end API and Web UI using the below URLs

Frontend	http://localhost:4200
Backend (API Ref)	http://localhost:8080/ (Default User Registration and Login)

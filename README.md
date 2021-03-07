# Master-Registry
Master-Registry is a simple web-based CRUD application using Spring Boot back-end and Angular front-end.

Project to train Spring Boot programming with Angular doing the Front-end part.

It's a REST API that you can perform user registration, login and CRUD operations.

The Angular front-end calls the back-end Spring Boot APIs 

Application to demonstrate various parts of a service oriented RESTfull application.
Backend (REST-API)	SpringBoot (Java)
Frontend	Angular 8+
Database	PostgreSQL
Persistence	JPA (Using Spring Data)
Client Build Tools	angular-cli, Webpack, npm
Server Build Tools	Maven(Java)
Folder Structure

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

Install Backend (SpringBoot Java)

# Maven Build : Navigate to the root folder where pom.xml is present 
mvn clean install

Start the API and Webui server

Accessing Application
Component	URL
Frontend	http://localhost:4200
Backend (API Ref)	http://localhost:8080/

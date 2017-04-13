### IMC Calculator
<p align="center">
    <img src="https://img.shields.io/badge/development-practice-blue.svg" alt="Practice">
    <img src="https://img.shields.io/badge/PW-Homework%2002-blue.svg" alt="PW Homework">
    <img src="https://img.shields.io/badge/Publish-surge.sh-red.svg" alt="Surge">
    <img src="https://img.shields.io/badge/Maven-3.3.9-red.svg" alt="Maven">
</p>

Simple application to calculate Body Mass Index (IMC) developed as a Web Programming class assignment.

---

![Demo](https://github.com/akwaryo/Imc/blob/master/src/main/webapp/assets/demo.png)


The following technologies was used:
- HTML
- CSS
- JavaScript
- Surge.sh

### Accessing the Web App

The application is running at [appimc.surge.sh](http://appimc.surge.sh/)

To run the application locally, clone the repository:

`git clone https://github.com/akwaryo/Imc.git`

Then you can run with Tomcat, just type in the terminal, inside the project folder:

`mvnw org.apache.tomcat.maven:tomcat7-maven-plugin:run`

Open any browser and type:

`http://localhost:8080/imc/`

And Done! Now you can access the project.

### About the IMC

Body mass index (IMC) is a measure of body fat based on height and weight that applies to adult men and women.
The index is calculated by the formula:

`imc = weight / (height * height)`

The condition used to classify the index was accordingly to NHANES II (National Health and Nutrition Examination 
Survey). The following criteria was used:

Condition | Men Index | Woman Index
----------|-----------|------------
below weight | <20.7 | <19.1
normal weigt | 20.7 - 26.4 | 19.1 - 25.8
slight overweight | 26.5 - 27.8 | 25.9 - 27.3
overweight |27.9 - 31.1 | 27.4 - 32.3
obesity | >31.2 | > 32.4


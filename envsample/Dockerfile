FROM openjdk:8
# base image is from openjdk:8
LABEL author="mkj.aws2021@gmail.com"
LABEL organisation="myorg"
# download the spring pet clinic file 
ADD 'https://referenceappkhaja.s3-us-west-2.amazonaws.com/spring-petclinic-2.2.0.BUILD-SNAPSHOT.jar' '/springpetclinic.jar'
EXPOSE 8080
CMD ["java","-jar","/springpetclinic.jar"]


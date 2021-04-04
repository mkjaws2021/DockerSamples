FROM openjdk:8
# base image is from openjdk:8
LABEL author="mkj.aws2021@gmail.com"
LABEL organisation="myorg"
ENV downloadpath='https://referenceappkhaja.s3-us-west-2.amazonaws.com/spring-petclinic-2.2.0.BUILD-SNAPSHOT.jar'
ENV appfilepath='/springpetclinic.jar'
# download the spring pet clinic file 
#ADD 'https://referenceappkhaja.s3-us-west-2.amazonaws.com/spring-petclinic-2.2.0.BUILD-SNAPSHOT.jar'  '/springpetclinic.jar'
ADD ${downloadpath} ${appfilepath}
EXPOSE 8080
CMD ["java","-jar","/springpetclinic.jar"] 
#CMD ["java","-jar",${appfilepath}]

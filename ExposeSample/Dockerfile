 FROM ubuntu:18.04 
 LABEL author="mkj"
 RUN apt update && apt install apache2 -y
 EXPOSE 80
 CMD ["apache2ctl" ,"-D" ,"FOREGROUND"]


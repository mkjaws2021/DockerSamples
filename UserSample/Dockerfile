FROM ubuntu:18.04
LABEL author="mkj.aws2021@gmail.com"
LABEL organisation="myorg"
RUN apt update && apt install apache2 -y 
EXPOSE 80
USER www-data
CMD whoami

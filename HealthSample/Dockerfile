FROM ubuntu:18.04
LABEL author="mkj"
RUN apt update && apt install curl apache2 -y 
EXPOSE 80
HEALTHCHECK CMD curl -f http://localhost/ || exit 1 
CMD ["apache2ctl","-D","FOREGROUND"]


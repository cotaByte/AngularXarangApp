    FROM node:16.19.0

WORKDIR /app
#Clonar repositorio
RUN git clone https://github.com/palmaAvenger/AngularXarangApp.git

#Instalar cron
RUN apt-get update
RUN apt-get -y install cron
RUN apt-get -y install coreutils
#SHELL ["/bin/bash","-c"]
#Dar permisos de ejecucion al shell script
RUN chmod +x AngularXarangApp/pull_job_frontend.sh

#Add al crontab el job pull
RUN crontab -l | ( cat; echo "* * * * 5 /app/AngularXarangApp/pull_job_frontend.sh >> /app/messages 2>&1;" ) | crontab -
RUN /etc/init.d/cron start

#Situarnos en el dir de la app
WORKDIR /app/AngularXarangApp
#Instalamos dependencias del proyecto de node
RUN npm install
RUN npm run build
EXPOSE 4200

#Arrancamos servicios
CMD cron
CMD ["npm","start"]

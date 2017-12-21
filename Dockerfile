
FROM node
MAINTAINER Yohannes
VOLUME [ "/frontend" ]
VOLUME [ "/backend" ]
# COPY backend /backend
# ADD frontend /frontend

# WORKDIR /frontend
# RUN npm install

# WORKDIR /backend
# RUN npm install
ENTRYPOINT [ "./backend/start.sh" ]

FROM node

MAINTAINER Yohannes HL

VOLUME [ "/frontend" ]
VOLUME [ "/backend" ]

# uncomment for prod image
# ADD backend /backend
# ADD frontend /frontend

# WORKDIR /frontend
# RUN npm install

# WORKDIR /backend
# RUN npm install

ENTRYPOINT [ "/backend/start.sh" ]

FROM docker/compose:1.18.0

MAINTAINER Yohannes HL

ADD src /dist

WORKDIR /dist

RUN docker-compose build

ENTRYPOINT [ "docker-compose", "up" ]
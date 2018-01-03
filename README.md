
A Vue/NodeJs aggregated news feed.



## Geting started

You'll need [docker](https://www.docker.com) and [docker compose](https://docs.docker.com/compose/) installed.

To get the site running on your local machine:

> Build: `
docker-compose build
`

> Run:
`
docker-compose up
`

This will startup the local server http://localhost:3000

Endpoints:
 * api/news
 * api/sources
 * api/requests


### Features:
* login to see personalised news
* list news headlines
* filter news by category
* list news sources
* add news sources


### Tech Stack:

> Backend:

* NodeJS
* loopback
* cheerio
* mongodb

> Frontend:

* VueJS
* Vuex
* Vuetify

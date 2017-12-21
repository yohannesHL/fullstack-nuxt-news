
A Vue/NodeJs client/server for personalised aggregated news feed.



## Geting started

You'll need docker and docker compose installed.

To get the site running on your local machine:

> Build: `
docker-compose build
`

> Run:
`
docker-compose up
`

This will startup the local server http://localhost:3000

Explore API endpoints are via : http://localhost:3000/explorer


### Features:
* login to see personalised news
* list news headlines
* filter news by category
* list news sources
* add news sources


### Tech Stack:

> Backend:

* NodeJS
* feathersJs
* sequalize
* sql lite
* jwt authentication

> Frontend:

* VueJS
* Vuex
* Vuetify

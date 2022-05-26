[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/TerribleDev/remix-heroku)

# Remix stack for heroku

This is a very simple remix stack built for heroku. This includes:

* Postgres Sql for a datastore
* Prism ORM for database queries

## How to use this?

run `npx create-remix@latest --template terribledev/remix-heroku`

Either provision a new heroku app with a postgres database or use the `deploy to heroku button` to setup your app.


## Developing

You can use `docker-compose up -d` to boot postgres locally, and the connection strings you need are in `.env`.

You should make an `.env.development` file to store all your local environment settings to keep out of git

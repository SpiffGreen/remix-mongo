[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/SpiffGreen/remix-mongo)

# Remix stack for heroku

This is a very simple remix stack built for heroku. This includes:
- heroku deployment with Git
- Production-ready MongoDB Database
- GitHub Actions for deploy on merge to production and staging environments
- Email/Password Authentication with cookie-based sessions
- Database ORM with Prisma
- Styling with Tailwind
- End-to-end testing with Cypress
- Code formatting with Prettier
- Linting with ESLint
- Static Types with TypeScript

## How to use this?

run `npx create-remix@latest --template spiffgreen/remix-mongo`

Either provision a new heroku app with a mongodb database or use the `deploy to heroku button` to setup your app.


## Developing

You can simply run `npm run dev` to start the development server. Of course, you'll have to install the dependencies before use `npm install`.

You should make an `.env.development` file to store all your local environment settings to keep out of git

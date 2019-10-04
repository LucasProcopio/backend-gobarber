## Go barber backend

- This is a **barber** API that handles list of scheduled appointments,
  available dates, users CRUD and authentication.

---

## Before instalation

- **NOTICE** this project is still under development
- Soon I will add further instructions.

---

### Instalation

- Download or clone this repository
- Enter the root folder of this repository using a terminal
- Run `npm install` or `yarn` to install all the project's dependencies
- Make sure to have a postgres DB running in your machine, mongodb on port `27017`
and Redis on port `6379`
- **NOTE** if you are using docker you can use `docker run --name redisbarber -p 6379:6379 -d -t redis:alpine` to install Redis and
 `docker run --name mongobarber -p 27017:27017 -d -t mongo` to install mongoDB before get started
- Create a database with the name **gobarber** colation **UTF8**
- Run `npx sequelize-cli db:migrate`
- Make sure your database gobarber has been populated correctly
- Run `npm dev` or `yarn dev` to start the project
- **Happy coding!**

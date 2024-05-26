# 348-project

CS348 Project.
Co-Developed by [@faseehirfan](https://github.com/faseehirfan), [@ishaan35](https://github.com/diska432), [@diska432](https://github.com/diska432), [@parshjp](https://github.com/parshjp)

# How to run

First clone the repo.

Make sure you have Docker Desktop installed and running.

To run the backend, `cd backend` and run `docker-compose up -d`.
Then go to `http://localhost:8081` and log in with the root user credentials specified in the `docker-compose.yml` file to view the database.

To run the frontend, `cd frontend` and run `docker-compose up -d`.
Then go to `http://localhost:3000`.

Frontend Development Notes:
- `Dockerfile.dev` and `docker-compose` are used in development testing. Live reload is enabled when running the app through the development docker-compose.
- `Dockerfile` is really only used when the app is published to docker registry. There are production environment differences between the files.

# UU - 课友通

TODO: Project Description

## Development Start Guide

This section describes how to get started with development work, including some set up steps and important project information.

### Required Tools

-   Git
-   Text Editor (VS Code, Notepad, Vim, etc.)
-   Node.js and NPM
-   Postgres
-   VSCode extensions: Prettier, ESLint
-   Postman to design/test API's (recommended)

### Environment Variables

Before running the project, you must configure environment variables for the frontend and backend. Environment variables contain information that may be different between different developers and development vs. production environments, and/or may be sensitive information we don't want to put in our public GitHub repos (e.g. Firebase keys, email account password).

You can find `.env.backend`, `.env.frontend`, and `.env.bot` in our Google Drive. Be sure to upload these into your project directory under their corresponding folders and renaming them all to `.env`.

There is also a `ca.pem` in the Google Drive - this is used for connecting to the database, upload this to `backend` as well.

IMPORTANT: make sure you do NOT remove anything from `.gitignore`. The `.gitignore` file tells git to not track files that we don't want to push to the repo. This includes `.env`, as pushing `.env` to the repo would cause security issues.

### Directory Structure

-   uu
    -   backend
        -   .env
        -   ca.pem
        -   ...other files/directories
    -   frontend
        -   .env
        -   ...other files/directories
    -   bot
        -   .env
        -   ...other files/directories
    -   ...other files/directories

## Running the Project

This section describes various CLI commands to run parts of the project, such as the backend, frontend, linting, etc. In general, you will be running the backend and frontend together from two separate terminal windows while developing/testing. All of these commands assume that you are currently in the root directory of the project.

### Clone the project

1. `git clone https://github.com/yxli001/uu.git`
2. `cd uu`

### Backend

1. `cd backend` to enter the backend directory
2. `npm install` to install any dependencies (i.e. node_modules)
3. `npm run start` to run the backend

### Frontend

1. `cd frontend` to enter the frontend directory
2. `npm install` to install any dependencies
3. `npm run start` to run the frontend

### Bot

1. `cd bot` to enter the bot directory
2. `npm install` to install any dependencies
3. `npm run dev` to start the bot

Upon running the frontend (with `npm run start`), you should see a link to open the website.

### Linting

This project has ESLint and Prettier set up to run linting and code formatting, respectively, whenever you run `git commit`. All of the following scripts are available for both the frontend and backend. Make sure to `cd` into either the frontend or backend directory, depending on which you are linting.

-   `npm run lint-check` runs lint checks on your code
-   `npm run lint-fix` fixes any automatically fixable lint errors

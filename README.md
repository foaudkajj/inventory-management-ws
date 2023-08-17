# API Services Repository

Welcome to the API Services Repository! This repository contains a comprehensive API built using the NestJS framework, focusing on creating, reading, updating, and deleting (CRUD) operations, data migrations, localization, authentication, user password hashing, and advanced features like user context and transactions. 

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Using Swagger](#using-swagger)
- [Authentication](#authentication)
- [Password Hashing](#password-hashing)
- [User Context](#user-context)
- [Transactions](#transactions)

## Introduction
This repository showcases the implementation of a robust API using NestJS, which demonstrates best practices for structuring an API, using services and controllers to interact with a database, performing CRUD operations, data migrations, and incorporating advanced features like localization, authentication, password hashing, user context, and transactions.

## Technologies Used
- **NestJS**: A powerful and extensible Node.js framework for building scalable and maintainable server-side applications.
- **TypeORM**: A TypeScript-based ORM that simplifies database interactions by providing a set of tools for managing databases and performing migrations.
- **i18next**: A popular internationalization framework for handling localization and translations in your application.
- **JWT (JSON Web Tokens)**: A secure way to authenticate users by generating and verifying tokens.
- **bcryptjs**: A library for hashing passwords securely.
- **NestJS CLS**: A library for managing contextual data, like the current user, throughout the request lifecycle.
- **Transactions**: A technique for grouping multiple database operations into a single unit of work to ensure data integrity.

## Getting Started
1. Clone this repository: `git clone https://github.com/foaudkajj/inventory-management-ws.git`
2. Navigate to the project directory: `cd inventory-management-ws`
3. Install dependencies: `npm install`
4. Set up your database connection in the `.env` file.
5. Run migrations to create necessary tables: `npm run typeorm migration:run`
6. Start the server: `npm run start:dev`


## Using Swagger
We have integrated Swagger for API documentation. To access the Swagger documentation, follow these steps:

Make sure the local server is running (http://localhost:3000/swagger#/).

Open your web browser and navigate to Swagger Documentation URL to interact with the API endpoints.

Login using the login endpoint and use the given token to Authorize.

You can explore different endpoints, make requests, and view responses using the Swagger interface.

## Authentication
Authentication is performed using JWT (JSON Web Tokens). Users can obtain a token by sending their credentials to the `/auth/login` endpoint. Subsequent requests to protected endpoints require the inclusion of the JWT token in the request headers.

## Password Hashing
User passwords are securely hashed using the `bcryptjs` library before being stored in the database. This ensures that user data remains confidential even if the database is compromised.

## User Context
The NestJS CLS library is used to manage user context throughout the request lifecycle. This allows you to easily access the current user's information across different parts of the application.

## Transactions
Transactions are employed for ensuring data integrity. For example, when performing multi-step operations that involve multiple database interactions, transactions can be used to either commit all changes or roll back in case of an error.

Feel free to explore the codebase, contribute, and learn from this repository. If you have any questions or suggestions, please open an issue or reach out to the maintainers.

Happy coding!

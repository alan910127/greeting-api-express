# Greeting API Server

A RESTful API server that can greet all users whose birthday is today

## Tech Stack

**API Server:** [Express](https://expressjs.com)

**Database:** [PostgreSQL](https://www.postgresql.org)

**ORM:** [Prisma](https://www.prisma.io)

## Environment Variables

`DATABASE_URL` **(required)**

`PORT` (optional, default=8000)

## Run Locally

Install dependencies

```bash
npm install
```

Start local database

```bash
docker compose up
```

Apply migrations

```bash
npx prisma db push
```

Start development server

```bash
npm run dev
```

## Load Sample Data

```bash
npm run genusers
```

## Documentation

Swagger UI will be running at http://localhost:8000/docs

## Run Tests

Set the connection string in `.env.test` to your testing database

```dotenv
DATABASE_URL="mongodb+srv://app:<password>@<cluster-url>/tests?retryWrites=true&w=majority"
```

Run tests (may need to wait for database to be ready)

```bash
npm run test
```

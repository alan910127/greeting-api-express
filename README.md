# Greeting API Server

A RESTful API server that can greet all users whose birthday is today

## Tech Stack

**API Server:** [Express](https://expressjs.com)

**Database:** [MongoDB](https://www.mongodb.com)

**ORM:** [Prisma](https://www.prisma.io)

## Environment Variables

`DATABASE_URL` **(required)**

`PORT` (optional, default=8000)

## Run Locally

Install dependencies

```bash
npm install
```

Push schema to database

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

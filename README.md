# Greeting API Server

A RESTful API server that can greet all users whose birthday is today

## Tech Stack

**API Server:** [Express](https://expressjs.com)

**Database:** [PostgreSQL](https://www.postgresql.org)

**ORM:** [Prisma](https://www.prisma.io)

## Environment Variables

`DATABASE_URL` **(required)**

`PORT` (optional, default=8000)

`API_URL` (optional, default=`/api`)

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
npx ts-node scripts/createUsers.ts
```

## Documentation

Swagger UI will be running at http://localhost:8000/docs

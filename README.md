# Product Page

A minimal full-stack product catalog built to learn the fundamentals of Node.js, Express, and MongoDB — no frameworks, no build step, no auth. Just the raw request/response cycle.

## What it does

- Fetches a list of products from MongoDB and renders them as cards
- Adds a new product via a form (name, price, description, image URL)
- Deletes a product with a button on each card

## Stack

- **Backend:** Node.js + Express + Mongoose
- **Database:** MongoDB Atlas (free tier)
- **Frontend:** One static `index.html` with vanilla JS (`fetch`) and plain CSS — served directly by Express, no React/bundler
- **Architecture:** MVC-style separation (routes → controllers → models), with a centralized error-handling middleware

## Project structure

```
product-page/
  server.js                    entry point: loads env, connects DB, starts server
  src/
    app.js                     express app: middleware, static files, mounted routes
    config/
      db.js                    mongoose connection logic
    models/
      product.model.js         mongoose schema + model
    controllers/
      product.controller.js    request handlers (business logic)
    routes/
      product.routes.js        maps URLs + HTTP methods to controllers
    middleware/
      errorHandler.js          central error handling
  public/
    index.html
    css/style.css
    js/app.js
  .env                         local secrets (not committed)
  .env.example                 template for required env vars
```

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create a MongoDB Atlas cluster** (free M0 tier)
   - Sign up at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas/register)
   - Create a free M0 cluster
   - Create a database user (username + password)
   - Under Network Access, allow your IP (or `0.0.0.0/0` for local development)
   - Get your connection string from Cluster → Connect → Drivers

3. **Configure environment variables**

   Copy `.env.example` to `.env` and fill in your connection string:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/product-page?retryWrites=true&w=majority
   ```

4. **Run the server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in a browser.

## API

| Method | Endpoint             | Description                |
|--------|-----------------------|----------------------------|
| GET    | `/api/products`       | List all products          |
| POST   | `/api/products`       | Create a product           |
| DELETE | `/api/products/:id`   | Delete a product by id     |

Example:
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Notebook","price":5.5,"description":"A5 dotted notebook","imageUrl":"https://placehold.co/300x200?text=Notebook"}'
```

## Notes

- No authentication, cart, checkout, or admin panel — intentionally out of scope.
- No TypeScript, Docker, or test framework — kept minimal for learning purposes.

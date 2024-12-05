
# Link Shortener API

A simple backend project for shortening URLs using **Node.js**, **Express.js**, and **MongoDB**.

## Features

- Create short URLs for any valid long URL.
- Retrieve the original long URL using the short link.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohsen104/Link-Shortener.git
   cd Link-Shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   By default, the server will run on `http://localhost:3000`.

## API Endpoints

### 1. Create Short Link

- **URL**: `/api/shortener`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "originalUrl": "http://localhost:3000/api/shortener"
  }
  ```
- **Response**:
  ```json
  {
    "message": "created",
    "shortId": "@shortId"
  }
  ```

### 2. Get Original URL

- **URL**: `api/s/:shortId`
- **Method**: `GET`
- **Response** (Redirect):
  Redirects the user to the original URL.

## Project Structure

```
├── configs/          # Config for connect to database
├── models/           # MongoDB models
├── controllers/      # Business logic for API routes
├── main.js           # Express app initialization, Server entry point
└── readme.md         # Project documentation
```

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing original and short URLs.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

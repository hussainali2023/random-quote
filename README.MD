

# Random Quote Generator

Welcome to the **Random Quote Generator** application! This simple yet fun app generates a random quote along with a random image every time you interact with it. It's perfect for finding inspiration, sharing wisdom, or just enjoying a moment of randomness.

---

## Features

- **Random Quote**: Fetches a random quote from the [FreeAPI Quotes API](https://api.freeapi.app/api/v1/public/quotes/quote/random).
- **Random Image**: Displays a random image fetched from the [Random Image API](https://random-image-pepebigotes.vercel.app/api/random-image).
- Lightweight and easy to use.

---

## How It Works

1. The application sends a request to the [FreeAPI Quotes API](https://api.freeapi.app/api/v1/public/quotes/quote/random) to retrieve a random quote.
2. Simultaneously, it fetches a random image from the [Random Image API](https://random-image-pepebigotes.vercel.app/api/random-image).
3. The app then combines the quote and image to create an engaging and visually appealing output.

---

## APIs Used

### 1. FreeAPI Quotes API
- **Endpoint**: `https://api.freeapi.app/api/v1/public/quotes/quote/random`
- **Description**: Provides a random quote from a collection of quotes.
- **Documentation**: [FreeAPI Documentation](https://api.freeapi.app/)

### 2. Random Image API
- **Endpoint**: `https://random-image-pepebigotes.vercel.app/api/random-image`
- **Description**: Serves a random image that can be used as a background or visual element.
- **Website**: [Random Image API](https://random-image-pepebigotes.vercel.app/)

---

## Installation and Usage

### Prerequisites
- Basic knowledge of JavaScript (or the language/framework you're using).
- A modern web browser or Node.js environment.

### Steps to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/hussainali2023/random-quote.git
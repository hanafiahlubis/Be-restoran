# REST API for Food Data Management

This is a Node.js-based REST API for managing food data. It connects to a PostgreSQL database and provides endpoints to retrieve and manipulate food-related information.

---

## Features
- Retrieve a list of all foods.
- Retrieve details of a specific food by its ID.
- Uses PostgreSQL for data storage.
- Supports environment-based configuration.

---

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (database server)
- `.env` file with required environment variables (explained below)

### Steps to Install

1. **Clone the Repository Backend and Frontend**
   ```bash
   # Backend
   git clone https://github.com/hanafiahlubis/Be-restoran
   cd server

   # Frontend
   git clone https://github.com/hanafiahlubis/adelrestro-fe
   cd adelrestro-fe
2.  **Install Dependencies Install all required packages by running:**
    ```bash
     npm install
3. **Setup Environment Variables Create a .env file in the root directory and configure the following variables:**
    ```bash
    PORT = 3000
    HOST = "aws-0-ap-southeast-1.pooler.supabase.com"
    USER = "postgres.zlhxwielqfstxqcndwik"
    PASSWORD =  "PhcgYPsaqLw8cjPH"
    DATABASE= "postgres"
    PORT_DB =  5432
    POOL_MODE = "transaction"
4. **Start the Server Start the server with the following command:**
    ```bash
    npm run dev
    ```
    By default, the server will run on http://localhost:3000.

5. **Deployment**

    The API has been deployed online and can be accessed via the following URL:

    Base URL:
    ```vbnet
    https://maddening-confirmed-cosmos.glitch.me    
    ```
    
 * Get All Foods:
    
    https://maddening-confirmed-cosmos.glitch.me/food

 * Get Food by ID (Example ID: 1):

    https://maddening-confirmed-cosmos.glitch.me/food/1
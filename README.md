# Basic Node.js API
This is a basic structure for a Node.js REST API where you can use it as a start point for your netxt project.

## Folder Structure
```bash
.
├── src/                        # Main application package.
│   ├── config/                 # Configuration files (e.g., database, constants)
│   ├── controllers/            # Controllers handle the logic between views and core.
│   ├── helper/                 # Contains reusable pieces of code.
│   ├── interfaces/             # Interfaces and abstract classes (useful for design patterns)
│   ├── routes/                 # API routes.
│   ├── middleware              # Custom middleware (e.g., JWT functions)
│   ├── services                # Business logic (e.g., mailer)
│   ├── server.js               # Main entry point.
├── package.json                # Project metadata and dependencies.
└── README.md                   # Project documentation.
```

## Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node package manager)
- [MySQL](https://www.mysql.com/) (Database)

## Setup
1. Clone the repository:
    ```bash
    git https://github.com/Ahmadalmuhidat/Nodejs-Project-Template.git
    cd my-node-api
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory with your environment variables:
    ```
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_NAME=mydatabase
    ```
4. Set up your MySQL database:
    - Create a new MySQL database:

        ```sql
        CREATE DATABASE mydatabase;
        ```
    - Optionally, add some initial tables or data.

## Running the API
- Start the server:
    ```bash
    npm start
    ```
- Start in development mode with **nodemon**:
    ```bash
    npm run dev
    ```
The API will be running on `http://localhost:5000`.

## Useful NPM Commands

### Node Package Manager

| Command | Description |
|---------|-------------|
| `npm init` | Initialize a new Node.js project (creates `package.json`) |
| `npm init -y` | Initialize with default settings (yes to all prompts) |
| `npm install <package>` | Install a package locally |
| `npm install -g <package>` | Install a package globally |
| `npm uninstall <package>` | Remove a package |
| `npm update <package>` | Update a package |
| `npm list` | List installed packages locally |
| `npm list -g` | List globally installed packages |
| `npm outdated` | Check outdated packages |
| `npm run <script>` | Run a script from `package.json` |
| `npm start` | Run the default start script (`"start": "node index.js"`) |
| `npm test` | Run the test script (`"test": "..."`) |
| `npm prune` | Remove extraneous packages |
| `npm cache clean --force` | Clear npm cache |
| `npm audit` | Check for security vulnerabilities |
| `npm audit fix` | Automatically fix vulnerabilities if possible |

### API & HTTP Libraries

| Library | Purpose |
|---------|---------|
| `axios` | Promise-based HTTP client |
| `node-fetch` | Fetch API in Node.js |
| `superagent` | Flexible HTTP client |
| `graphql` | Build GraphQL APIs |
| `apollo-server` | GraphQL server implementation |
| `body-parser` | Parse incoming request bodies (JSON, URL-encoded) |
| `cors` | Enable Cross-Origin Resource Sharing |

### Testing & Debugging

| Library | Purpose |
|---------|---------|
| `jest` | Testing framework with built-in assertion and mocks |
| `mocha` | Test framework |
| `chai` | Assertion library |
| `supertest` | Test HTTP endpoints |
| `sinon` | Mocking and spying |
| `node-inspect` | Debug Node.js apps |
| `debug` | Lightweight logging for debugging |

### Other Useful Libraries

| Library | Purpose |
|---------|---------|
| `bcrypt` | Hash passwords securely |
| `jsonwebtoken` | JWT authentication |
| `passport` | Authentication middleware |
| `multer` | Handle file uploads |
| `sharp` | Image processing |
| `uuid` | Generate unique IDs |
| `socket.io` | Real-time WebSocket communication |
| `agenda` | Job scheduling |
| `cron` | Schedule tasks in Node.js |
| `pino` | Fast logging alternative to `winston` |

### Security Libraries for Node.js

| Library | Purpose |
|---------|---------|
| `helmet` | Sets secure HTTP headers (prevents XSS, clickjacking, etc.) |
| `express-rate-limit` | Protect against brute-force attacks by limiting requests |
| `cors` | Configure allowed origins to prevent unwanted access |
| `csurf` | CSRF protection middleware |
| `xss-clean` | Sanitize user input to prevent XSS attacks |
| `hpp` | Protect against HTTP parameter pollution |
| `bcrypt` | Hash passwords securely before storing in DB |
| `jsonwebtoken` | Implement JWT authentication safely |
| `oauth2-server` | Implement OAuth2 authentication |
| `passport` | Flexible authentication strategies (JWT, OAuth, local, etc.) |
| `dotenv` | Securely store secrets in environment variables |
| `express-mongo-sanitize` | Prevent MongoDB operator injection |
| `rate-limiter-flexible` | Advanced rate limiting with Redis or memory |

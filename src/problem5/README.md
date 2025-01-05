# Document set up server

### 1. Dupplicate file .env.example. After that update file copy to ".env"

### 2. Use node:20
    npm install

### 3. At path "problem5", we will build script
    npm run build

### 4. Run build & start
    docker-compose up --build

### 5. Create new terminal 2. Cd path "src/databases". Run scripts migrate table and seed
    npx knex migrate:latest
    npx knex seed:run

### 6.Shut down Terminal 1. Restart container.
    docker-compose up -d

### 7. Connect to website
    http://localhost:3000/api-docs/

### 8. Shut down and remove container if you want turn off server
    docker-compose down -v

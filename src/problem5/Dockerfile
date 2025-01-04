FROM node:20-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json /usr/src/app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

FROM node:20-alpine

WORKDIR /usr/src/app

# Copy only the built application and production dependencies from the builder
COPY --from=builder /usr/src/app .

# Expose the app's port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
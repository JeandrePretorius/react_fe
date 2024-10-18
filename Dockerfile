# Use the official Node.js image as the base image
FROM node:16-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx web server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that the Nginx server will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

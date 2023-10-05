# Use a Node.js base image
FROM node:20-alpine3.17


# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory to the container
COPY . .

# Build the React app
RUN npm run 

# Expose the port on which the React app will run
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]

# Use the official Node.js 18 image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default Next.js port
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
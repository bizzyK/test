# Use the official Node.js 20 image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the default Next.js port
EXPOSE 3000

# Build the Next.js application
RUN yarn build

# Start the application using Yarn
CMD ["yarn", "start"]
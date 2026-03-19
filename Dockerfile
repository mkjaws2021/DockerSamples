FROM node:22-alpine

WORKDIR /app

# Install dependencies first (better Docker layer caching)
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]


FROM node:20-alpine
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install

EXPOSE 3000
CMD ["npx", "nx", "serve", "api", "--host=0.0.0.0"]

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npx", "nx", "serve", "frontend", "--host=0.0.0.0", "--disable-host-check"]

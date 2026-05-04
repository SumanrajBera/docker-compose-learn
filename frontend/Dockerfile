FROM node:20-alpine

WORKDIR /app

# Copying files from  package and package-lock
COPY package*.json .

RUN npm ci

COPY . .

CMD [ "npm", "run", "dev", "--", "--host" ]
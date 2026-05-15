FROM node:20-alpine AS frontend

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend .

RUN npm run build


FROM node:20-alpine AS fullstack-web

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend .

COPY --from=frontend /app/dist ./public

CMD [ "npm", "start" ]
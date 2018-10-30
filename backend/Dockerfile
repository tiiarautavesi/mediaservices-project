FROM node:8

RUN mkdir -p /app/media-app-backend
WORKDIR /app/media-app-backend

COPY package.json /app/media-app-backend
COPY package-lock.json /app/media-app-backend

RUN npm install

COPY . /app/media-app-backend

EXPOSE 9000

CMD [ "npm", "run", "dev" ]
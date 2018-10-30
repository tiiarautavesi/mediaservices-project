FROM node:8

RUN mkdir -p /app/media-app-frontend
WORKDIR /app/media-app-frontend

COPY package.json /app/media-app-frontend
COPY package-lock.json /app/media-app-frontend

RUN npm install

COPY . /app/media-app-frontend

EXPOSE 9000

CMD [ "npm", "start" ]
FROM node:14.5-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . . 

CMD ['json-server', "--watch", "data.json", "--port", "8000"]

FROM node:14.5-alpine


WORKDIR /app
COPY package.json /app
CMD ["npm", "install", "@craco/craco"]
RUN yarn install
COPY . /app

CMD ["yarn", "run", "start"]


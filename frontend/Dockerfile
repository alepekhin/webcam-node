FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

RUN mkdir -p ./public
COPY public ./public
RUN mkdir -p ./src
COPY src ./src

EXPOSE 3000
CMD [ "npm", "start" ]
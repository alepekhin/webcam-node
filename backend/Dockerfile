FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY *.js ./
RUN mkdir -p app
COPY app ./app

EXPOSE 4000
CMD [ "node", "index.js" ]
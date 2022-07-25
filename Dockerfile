FROM node:18

WORKDIR /usr/src/app

COPY ./back/package*.json ./

RUN npm install

COPY ./back .

EXPOSE 8000

CMD ["npm", "start"]
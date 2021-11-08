FROM node:14.17.0

WORKDIR /usr/src/app/front

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]
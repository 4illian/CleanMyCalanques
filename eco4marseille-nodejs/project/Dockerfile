FROM node:14.17.0

WORKDIR /usr/src/app/back

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

EXPOSE 8080

COPY . .

RUN npm install --save sequelize

RUN npm install --save mysql2

CMD [ "npm", "start" ]



FROM node:10.1.0

RUN mkdir /src
WORKDIR /src
COPY ./package.json ./package.json
COPY envs/development.env /.env
ADD src/ .

RUN npm install -g express
RUN npm install -g nodemon
RUN npm install -g pm2
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]

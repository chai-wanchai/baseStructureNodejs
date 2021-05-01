FROM node:10.1.0

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm","run","start"]

#BASE IMAGE
FROM node:18-alpine

#WORKDIR
WORKDIR /user/app

#COPY
COPY package.json ./

#INSTALL DEPENDENCIES
RUN npm install

#COPY
COPY . .

ARG MONGO_URI
ARG JWT_SECRET

ENV MONGO_URI=$MONGO_URI
ENV JWT_SECRET=$JWT_SECRET

RUN echo "MONGO_URI=${MONGO_URI}" > .env
RUN echo "JWT_SECRET=batman" > .env

RUN npm i -g pnpm

RUN pnpm run build

EXPOSE 3010

CMD [ "node", "dist/main" ]
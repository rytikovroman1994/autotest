FROM node:10

RUN npm i npm@latest -g

COPY . .

RUN npm i

ENTRYPOINT [ "npm", "test" ]

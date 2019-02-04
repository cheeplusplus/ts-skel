FROM node:carbon-alpine

WORKDIR /usr/src/app
CMD ["npm", "run", "start"]

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install --only=production

COPY . /usr/src/app/

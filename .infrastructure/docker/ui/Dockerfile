FROM node

ARG NPM_TOKEN

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm config set //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
RUN npm config set @macpaw:registry=https://npm.pkg.github.com
RUN npm install

COPY . .
RUN npm run build

ENTRYPOINT [ "npm", "install" ]

FROM node

ARG NPM_TOKEN

WORKDIR /app

COPY package.json yarn.lock ./
RUN npm config set //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
RUN yarn

COPY . .
RUN yarn build

ENTRYPOINT [ "yarn" ]

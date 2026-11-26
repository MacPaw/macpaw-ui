FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm config set @macpaw:registry=https://npm.pkg.github.com
RUN --mount=type=secret,id=npm_token \
    printf '//npm.pkg.github.com/:_authToken=%s\n' "$(cat /run/secrets/npm_token)" >> ~/.npmrc \
    && npm install \
    && npm config delete //npm.pkg.github.com/:_authToken

COPY . .
RUN npm run build

ENTRYPOINT [ "npm", "run" ]

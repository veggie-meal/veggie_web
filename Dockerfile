FROM node:10

# Create app directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN yarn install

COPY . /app

EXPOSE 3000

# start command
CMD [ "yarn", "start" ]

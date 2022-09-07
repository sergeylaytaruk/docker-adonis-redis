FROM node:16

ENV HOME=/app
RUN mkdir /app

COPY package.json $HOME

WORKDIR $HOME
RUN npm i -g @adonisjs/cli && npm install
EXPOSE 3333

CMD ["npm", "start"]
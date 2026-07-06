FROM node
WORKDIR /app

COPY server.js .
COPY index.html .
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
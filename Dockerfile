FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN ls -la
RUN npm run build
CMD ["npm", "start"]

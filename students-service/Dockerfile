# syntax=docker/dockerfile:1

FROM node:20.11.0

WORKDIR /students-service

COPY . .
COPY prisma ./prisma/

RUN rm -rf node_modules
RUN npm i

RUN npx prisma generate
RUN npx prisma migrate dev --name init  
RUN npm run clean
RUN npm run build

EXPOSE 3331

CMD ["npm", "start"]

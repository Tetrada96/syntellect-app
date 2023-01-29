FROM node:16-alpine as build
WORKDIR /app
ADD package.json package.json
RUN npm install 
ADD . .
RUN npm run build
# ENV NODE_ENV production
# CMD ["npm", "start"]

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
# Stage 1: Build the Angular application
FROM node:14 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod

# Stage 2: Serve the built application with Nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# Fase de construcción
FROM node:24-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto de los archivos y construye la aplicación
COPY . .
RUN npm run build

# Fase de producción con Nginx
FROM nginx:alpine

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos construidos desde la fase de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 (HTTP estándar para Nginx)
EXPOSE 8080

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
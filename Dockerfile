# Imagen Node dependiendo de versión instalada
FROM node:22

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Variable de entorno para el puerto (con valor por defecto 4000)
ENV PORT=4000

# Expone el puerto de la aplicación
EXPOSE $PORT

# Ejecuta la aplicación en desarrollo
CMD ["npm", "start"]
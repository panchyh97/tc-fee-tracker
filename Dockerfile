# Usa una imagen base de Node.js
FROM node:21-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo del contenedor
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]

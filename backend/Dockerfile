# Se utiliza la base de la iamgen 
FROM node:14

# Se establece el directorio de trabajo 
WORKDIR /app

# Copiar todos los archivos 
COPY . .

# Instalar dependecias 
RUN npm install

# Espone el puerto
EXPOSE 3001

# Commando para ejecutar la app
CMD ["node", "server.js"]
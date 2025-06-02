# 📦 Toolbox Challenge

Este proyecto es una aplicación de ejemplo que incluye un **frontend en React** y un **backend en Node.js + Express**, ambos dockerizados y documentados mediante **Swagger**.

## 🗂 Estructura del repositorio

```
toolbox-challenge/
├── backend/         # API con Express + Swagger
├── frontend/        # Aplicación web con React
├── docker-compose.yml
```

## 🚀 Tecnologías utilizadas

- **Frontend**: React
- **Backend**: Node.js, Express
- **Documentación API**: Swagger (accesible desde el navegador)
- **Contenedores**: Docker + Docker Compose
- **Pruebas**: Jest (frontend) y Mocha + Chai (backend)

## ▶️ Cómo ejecutar el proyecto

### Opción 1: Con Docker (recomendada)

1. Asegúrate de tener Docker y Docker Compose instalados.
2. En la raíz del proyecto, ejecuta:

```bash
docker-compose up --build -d
```

3. Accede a las siguientes URLs:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend (API): [http://localhost:4000](http://localhost:4000)
- Documentación Swagger: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

### Opción 2: Sin Docker (manual)

#### 1. Backend

```bash
cd backend
npm install
npm start
```

Accede a [http://localhost:4000](http://localhost:4000)  
Swagger: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

#### 2. Frontend

```bash
cd frontend
npm install
npm start
```

Accede a [http://localhost:3000](http://localhost:3000)

## 🧪 Correr pruebas

#### Backend

```bash
cd backend
npm test
```

#### Frontend

```bash
cd frontend
npm test
```

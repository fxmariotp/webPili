# 🚀 Protocolo de Inicio de Sesión: `empesamo`

Este archivo define las instrucciones automáticas que el asistente debe ejecutar cada vez que el usuario escriba **`empesamo`**, **`empezamos`** o indique que va a comenzar a trabajar en la web.

---

## 🎯 Objetivo
Asegurarse de que el proyecto local esté 100% sincronizado con la última versión de GitHub, comprobar que no haya errores pendientes y poner a Pilar al día de qué fue lo último que se hizo en la web, todo en un lenguaje cercano, humano y sin tecnicismos.

---

## 📋 Pasos que debe ejecutar el Asistente al leer "empesamo":

### 1. Sincronizar con GitHub (`git pull`)
* Asegurar que el PATH contenga Git (`$env:PATH = "C:\Program Files\Git\cmd;" + $env:PATH`).
* Ejecutar:
  ```powershell
  git pull origin main
  ```
* Si se han descargado cambios nuevos, anotarlos para explicárselos a Pilar de forma sencilla.
* Si ya estaba al día, confirmar que la versión local es la más reciente.

### 2. Comprobación de estado (`git status`)
* Ejecutar:
  ```powershell
  git status
  ```
* Verificar que la rama actual sea `main`.
* Confirmar si hay algún cambio que se haya quedado pendiente o si el espacio de trabajo está completamente limpio.

### 3. Historial reciente y resumen en lenguaje humano
* Ejecutar:
  ```powershell
  git log -n 3 --pretty=format:"%ad | %s" --date=short
  ```
* Traducir los últimos 2-3 cambios a español cotidiano para Pilar.
  * *Ejemplo:* «La última vez cambiamos la descripción principal del inicio para que sonara más cercana y natural, y dejamos configurada la foto oficial».

### 4. Chequeo de salud del proyecto
* Comprobar que los archivos esenciales (`src/App.tsx`, `index.html`, etc.) están intactos y sin errores de sintaxis.

### 5. Saludo y arranque
* Saludar cordialmente a Pilar.
* Darle el parte de estado en 3 o 4 líneas fáciles de leer:
  * ✅ Web al día y sincronizada con Vercel.
  * 📝 Últimos cambios realizados.
* Preguntarle de forma abierta y directa: **«¿Qué te gustaría cambiar, añadir o retocar en tu web hoy?»**

# 🏁 Protocolo de Fin de Sesión: `nosfuimo`

Este archivo define las instrucciones automáticas que el asistente debe ejecutar cada vez que el usuario escriba **`nosfuimo`**, **`nos fuimos`** o indique que va a terminar la sesión de trabajo.

---

## 🎯 Objetivo
Hacer balance de todo lo trabajado durante la sesión, guardar los cambios con seguridad, publicarlos automáticamente en internet hacia GitHub y Vercel (`git push`), y confirmar a Pilar que su web está actualizada y lista para sus pacientes.

---

## 📋 Pasos que debe ejecutar el Asistente al leer "nosfuimo":

### 1. Revisar los cambios realizados
* Asegurar que el PATH contenga Git (`$env:PATH = "C:\Program Files\Git\cmd;" + $env:PATH`).
* Ejecutar:
  ```powershell
  git status -s
  git diff --stat
  ```
* Si **no hay cambios pendientes**:
  * Avisar a Pilar: *«¡Todo en orden! No hay cambios sin guardar, tu web ya está al día en Vercel. ¡Hasta la próxima sesión!»*.
  * Finalizar la sesión.

### 2. Generar el resumen de la sesión (para humanos)
* Si hay cambios, listar en viñetas claras y comprensibles qué se ha hecho durante la sesión.
  * *Ejemplo:*
    * ✏️ Modificada la tarifa de la sesión individual a 60€.
    * ✏️ Añadida una nueva pregunta en el apartado de Preguntas Frecuentes sobre la duración de las sesiones.
    * 🎨 Ajustado el color de los botones principales.

### 3. Empaquetar y guardar (`git add` + `git commit`)
* Añadir los archivos modificados:
  ```powershell
  git add .
  ```
* Crear un commit con un mensaje claro y descriptivo en español:
  ```powershell
  git commit -m "Descripción clara de los cambios realizados en la sesión"
  ```

### 4. Publicar en internet (`git push`)
* Subir los cambios a GitHub:
  ```powershell
  git push origin main
  ```
* Verificar que el comando termine con éxito (código de salida 0).

### 5. Confirmación con Vercel y despedida
* Explicarle a Pilar el estado final:
  * ☁️ **Guardado en GitHub:** Los cambios ya están a salvo en la nube.
  * 🚀 **Despliegue en Vercel:** Vercel está actualizando la web en este momento. En **1 o 2 minutos** estará visible para todo el mundo.
  * 🔄 **Cómo comprobarlo:** Solo tiene que abrir su web y recargar la página (pulsando F5 o el icono de recargar).
* Despedirse cordialmente deseándole un gran día de trabajo o descanso.

# Test de Hidrometeorología y riesgos climáticos

Web estática para practicar el examen tipo test. Abre `index.html` en el navegador (funciona sin servidor).

## Modos
- **Preguntas de un compañero**: muestra el autor.
- **N preguntas aleatorias** y **todas las preguntas**: orden aleatorio, sin autor.

Atajos de teclado: `a`–`d` para responder, `Enter` para pasar a la siguiente.

## Añadir un compañero
1. Crea `data/<id>.js` copiando el formato de uno existente (`correcta`: 0 = a, 1 = b, 2 = c, 3 = d).
2. Pon sus imágenes en `img/<id>/`.
3. Añade `<id>` a `data/lista.js`.

## Caché
Si cambias `style.css`, `app.js` o `data/lista.js`, sube el número `?v=` en `index.html` para que los móviles no usen la versión vieja. Los ficheros de preguntas (`data/<id>.js`) se cargan siempre frescos.

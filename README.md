# Sistema-de-asignacion

Sistema de tutorías universitario con programador automático de sesiones y tutor IA.
Piloto: <50 usuarios, 2–3 cursos, web mobile-first con Astro, backend FastAPI, Docker.

## Demo para GitHub Pages · v0.2

Sitio estático con login fijo, cuestionario de cursos y horarios, calendario semanal con alerta de
cruces y panel del profesor. No requiere build ni backend.

Incluye:

- **6 cursos piloto** (Matemática Básica, Cálculo I, Álgebra Lineal, Complementos de la Matemática,
  Teoría de Números y Programación) con **5 horarios por curso**.
- Horarios que se cruzan a propósito entre cursos para visualizar conflictos reales.
- Calendario semanal siempre visible: aunque no haya cursos marcados, se dibuja la grilla vacía.
  Al elegir, cada bloque muestra el nombre del curso y su horario; los cruces se marcan en rojo.
- Navegación inferior en móvil para saltar entre cuestionario, resumen y semana.
- Panel docente con toda la información del estudiante, búsqueda, filtro por curso y calendario
  por declaración.
- **JSON exclusivo del profesor**, además de exportación CSV. El estudiante solo guarda su
  declaración; no descarga archivos.

Credenciales de demostración:

| Rol | Usuario | Contraseña |
|---|---|---|
| Estudiante | `alumno` | `alumno123` |
| Profesor | `profesor` | `profesor123` |

Los datos se guardan en `localStorage` del navegador. Para compartir declaraciones entre
dispositivos, el profesor puede exportar el JSON de su panel e importarlo en otro navegador. El
profesor también puede exportar todas las declaraciones (o solo las del filtro activo) en JSON o CSV.

La v0.2 usa claves de almacenamiento nuevas (`nexo.*.v2`), por lo que los datos de la demo anterior
no se mezclan: la primera carga arranca con el calendario vacío.

### Ejecutar localmente

Abrir `index.html` en el navegador o servir la carpeta:

```bash
python -m http.server 8080
```

### Publicar en GitHub Pages

El workflow `.github/workflows/pages.yml` despliega el sitio en cada push a `main`.
En GitHub, configurar **Settings → Pages → Build and deployment → Source: GitHub Actions**.
La página quedará en `https://<usuario>.github.io/Sistema-de-asignacion/`.

### Archivos

- `index.html`: estructura y vistas.
- `styles.css`: diseño mobile-first, calendario semanal y navegación inferior.
- `app.js`: autenticación, persistencia, validación de cruces, calendario, layout de
  superposiciones, filtros e import/export.
- `CHANGELOG.md`: historial de versiones de la demo.
- `structure_0.1.md`: arquitectura, modelo de datos y backlog del sistema completo.
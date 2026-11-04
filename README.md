# Sistema-de-asignacion

Sistema de tutorías universitario con programador automático de sesiones y tutor IA.
Piloto: <50 usuarios, 2–3 cursos, web mobile-first con Astro, backend FastAPI, Docker.

## Demo para GitHub Pages

Sitio estático con login fijo, cuestionario de cursos y horarios, calendario semanal con alerta de
cruces y panel del profesor. No requiere build ni backend.

Incluye:

- Registro guiado de cursos y horarios con borrador persistente.
- Calendario semanal que dibuja los bloques elegidos y marca los cruces en rojo.
- Navegación inferior en móvil para saltar entre cuestionario, resumen y semana.
- Panel docente con búsqueda por estudiante/curso, filtro por curso y calendario por declaración.
- Importación de JSON y exportación de todas las declaraciones en JSON o CSV.

Credenciales de demostración:

| Rol | Usuario | Contraseña |
|---|---|---|
| Estudiante | `alumno` | `alumno123` |
| Profesor | `profesor` | `profesor123` |

Los datos se guardan en `localStorage` del navegador. Para compartir una declaración entre
dispositivos, el estudiante descarga el JSON y el profesor lo importa desde su panel. El profesor
también puede exportar todas las declaraciones (o solo las del filtro activo) en JSON o CSV.

### Para ejecucion local

Abrir `index.html` en el navegador o servir la carpeta:

```bash
python -m http.server 8080
```

### GitHub Pages

`https://<usuario>.github.io/Sistema-de-asignacion/`.

### Archivos

- `index.html`: estructura y vistas.
- `styles.css`: diseño mobile-first, calendario semanal y navegación inferior.
- `app.js`: autenticación, persistencia, validación de cruces, calendario, filtros e import/export.
- `structure_0.1.md`: arquitectura, modelo de datos y backlog del sistema completo.

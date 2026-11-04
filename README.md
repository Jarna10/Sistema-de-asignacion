# Sistema-de-asignacion

Sistema de tutorÃ­as universitario con programador automÃ¡tico de sesiones y tutor IA.
Piloto: <50 usuarios, 2â€“3 cursos, web mobile-first con Astro, backend FastAPI, Docker.

## Demo para GitHub Pages Â· v0.2

Sitio estÃ¡tico con login fijo, cuestionario de cursos y horarios, calendario semanal con alerta de
cruces y panel del profesor. No requiere build ni backend.

Incluye:

- **6 cursos piloto** (MatemÃ¡tica BÃ¡sica, CÃ¡lculo I, Ãlgebra Lineal, Complementos de la MatemÃ¡tica,
  TeorÃ­a de NÃºmeros y ProgramaciÃ³n) con **5 horarios por curso**.
- Horarios que se cruzan a propÃ³sito entre cursos para visualizar conflictos reales.
- Calendario semanal siempre visible: aunque no haya cursos marcados, se dibuja la grilla vacÃ­a.
  Al elegir, cada bloque muestra el nombre del curso y su horario; los cruces se marcan en rojo.
- NavegaciÃ³n inferior en mÃ³vil para saltar entre cuestionario, resumen y semana.
- Panel docente con toda la informaciÃ³n del estudiante, bÃºsqueda, filtro por curso y calendario
  por declaraciÃ³n.
- **JSON exclusivo del profesor**, ademÃ¡s de exportaciÃ³n CSV. El estudiante solo guarda su
  declaraciÃ³n; no descarga archivos.

Credenciales de demostraciÃ³n:

| Rol | Usuario | ContraseÃ±a |
|---|---|---|
| Estudiante | `alumno` | `alumno123` |
| Profesor | `profesor` | `profesor123` |

Los datos se guardan en `localStorage` del navegador. Para compartir declaraciones entre
dispositivos, el profesor puede exportar el JSON de su panel e importarlo en otro navegador. El
profesor tambiÃ©n puede exportar todas las declaraciones (o solo las del filtro activo) en JSON o CSV.

La v0.2 usa claves de almacenamiento nuevas (`nexo.*.v2`), por lo que los datos de la demo anterior
no se mezclan: la primera carga arranca con el calendario vacÃ­o.

### Para ejecucion local

Abrir `index.html` en el navegador o servir la carpeta:

```bash
python -m http.server 8080
```

### GitHub Pages

`https://<usuario>.github.io/Sistema-de-asignacion/`.

### Archivos

- `index.html`: estructura y vistas.
- `styles.css`: diseÃ±o mobile-first, calendario semanal y navegaciÃ³n inferior.
- `app.js`: autenticaciÃ³n, persistencia, validaciÃ³n de cruces, calendario, layout de
  superposiciones, filtros e import/export.
- `CHANGELOG.md`: historial de versiones de la demo.
- `structure_0.1.md`: arquitectura, modelo de datos y backlog del sistema completo.

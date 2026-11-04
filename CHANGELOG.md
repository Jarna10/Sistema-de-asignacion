# Changelog

## [0.2.0] · 2026-11-03

### Añadido
- Catálogo ampliado a **6 cursos**: Matemática Básica, Cálculo I, Álgebra Lineal,
  Complementos de la Matemática, Teoría de Números y Programación.
- **5 horarios por curso** (30 alternativas en total).
- Horarios que se superponen a propósito entre cursos para visualizar cruces reales.
- Distribución en carriles para 2 o más bloques simultáneos dentro del calendario semanal.
- Versión visible en la portada (`Demo v0.2`) y en el pie de página.

### Cambiado
- El calendario semanal ahora se dibuja siempre, incluso sin cursos seleccionados (grilla vacía).
- Los bloques seleccionados muestran nombre del curso y horario; los cruces se resaltan en rojo.
- Renombrado `Física I` a `Álgebra Lineal`.
- Las claves de `localStorage` pasan a `nexo.*.v2` para arrancar con datos limpios.
- El panel docente muestra toda la información del estudiante y conserva búsqueda, filtro,
  importación y exportación.

### Eliminado
- La descarga de JSON para el estudiante. El JSON queda disponible solo en el panel del profesor.

## [0.1.0] · 2026-11-03

### Añadido
- Demo estática con login fijo para estudiante y profesor.
- Cuestionario de cursos y horarios con borrador persistente en `localStorage`.
- Detección de cruces de horario y resumen de elecciones.
- Calendario semanal de la selección y calendario compacto por declaración.
- Panel docente con registros, búsqueda, filtro por curso y exportación JSON/CSV.
- Navegación inferior móvil y despliegue automático en GitHub Pages.

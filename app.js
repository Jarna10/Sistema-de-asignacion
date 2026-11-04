const STORAGE = {
  session: "nexo.session.v2",
  submissions: "nexo.submissions.v2",
  draft: "nexo.draft.v2",
  last: "nexo.lastSubmission.v2"
};

const APP_VERSION = "0.2.0";

const USERS = {
  alumno: { password: "alumno123", role: "student", displayName: "Camila Rojas" },
  profesor: { password: "profesor123", role: "teacher", displayName: "Andrés Salinas" }
};

const COURSES = [
  {
    id: "matematica",
    code: "MAT-100",
    name: "Matemática Básica",
    credits: 6,
    options: [
      { id: "matematica-a", label: "Lun y Mié · 08:00–09:30", days: [1, 3], start: "08:00", end: "09:30" },
      { id: "matematica-b", label: "Mar y Jue · 08:00–09:30", days: [2, 4], start: "08:00", end: "09:30" },
      { id: "matematica-c", label: "Lun y Mié · 10:00–11:30", days: [1, 3], start: "10:00", end: "11:30" },
      { id: "matematica-d", label: "Mar y Jue · 12:00–13:30", days: [2, 4], start: "12:00", end: "13:30" },
      { id: "matematica-e", label: "Vie · 10:00–11:30", days: [5], start: "10:00", end: "11:30" }
    ]
  },
  {
    id: "calculo",
    code: "MAT-101",
    name: "Cálculo I",
    credits: 6,
    options: [
      { id: "calculo-a", label: "Lun y Mié · 08:00–09:30", days: [1, 3], start: "08:00", end: "09:30" },
      { id: "calculo-b", label: "Mar y Jue · 10:00–11:30", days: [2, 4], start: "10:00", end: "11:30" },
      { id: "calculo-c", label: "Lun y Mié · 11:00–12:30", days: [1, 3], start: "11:00", end: "12:30" },
      { id: "calculo-d", label: "Mar y Jue · 14:00–15:30", days: [2, 4], start: "14:00", end: "15:30" },
      { id: "calculo-e", label: "Vie · 12:00–13:30", days: [5], start: "12:00", end: "13:30" }
    ]
  },
  {
    id: "algebra",
    code: "MAT-201",
    name: "Álgebra Lineal",
    credits: 6,
    options: [
      { id: "algebra-a", label: "Lun y Mié · 09:00–10:30", days: [1, 3], start: "09:00", end: "10:30" },
      { id: "algebra-b", label: "Mar y Jue · 08:00–09:30", days: [2, 4], start: "08:00", end: "09:30" },
      { id: "algebra-c", label: "Lun y Mié · 12:00–13:30", days: [1, 3], start: "12:00", end: "13:30" },
      { id: "algebra-d", label: "Mar y Jue · 14:00–15:30", days: [2, 4], start: "14:00", end: "15:30" },
      { id: "algebra-e", label: "Vie · 11:00–12:30", days: [5], start: "11:00", end: "12:30" }
    ]
  },
  {
    id: "complementos",
    code: "MAT-210",
    name: "Complementos de la Matemática",
    credits: 6,
    options: [
      { id: "complementos-a", label: "Lun y Mié · 10:00–11:30", days: [1, 3], start: "10:00", end: "11:30" },
      { id: "complementos-b", label: "Mar y Jue · 11:00–12:30", days: [2, 4], start: "11:00", end: "12:30" },
      { id: "complementos-c", label: "Lun y Mié · 14:00–15:30", days: [1, 3], start: "14:00", end: "15:30" },
      { id: "complementos-d", label: "Mar y Jue · 12:00–13:30", days: [2, 4], start: "12:00", end: "13:30" },
      { id: "complementos-e", label: "Vie · 08:00–09:30", days: [5], start: "08:00", end: "09:30" }
    ]
  },
  {
    id: "numeros",
    code: "MAT-220",
    name: "Teoría de Números",
    credits: 6,
    options: [
      { id: "numeros-a", label: "Lun y Mié · 11:00–12:30", days: [1, 3], start: "11:00", end: "12:30" },
      { id: "numeros-b", label: "Mar y Jue · 09:00–10:30", days: [2, 4], start: "09:00", end: "10:30" },
      { id: "numeros-c", label: "Lun y Mié · 14:00–15:30", days: [1, 3], start: "14:00", end: "15:30" },
      { id: "numeros-d", label: "Mar y Jue · 10:00–11:30", days: [2, 4], start: "10:00", end: "11:30" },
      { id: "numeros-e", label: "Vie · 09:00–10:30", days: [5], start: "09:00", end: "10:30" }
    ]
  },
  {
    id: "programacion",
    code: "INF-201",
    name: "Programación",
    credits: 6,
    options: [
      { id: "programacion-a", label: "Lun y Mié · 08:00–09:30", days: [1, 3], start: "08:00", end: "09:30" },
      { id: "programacion-b", label: "Mar y Jue · 14:00–15:30", days: [2, 4], start: "14:00", end: "15:30" },
      { id: "programacion-c", label: "Lun y Mié · 12:00–13:30", days: [1, 3], start: "12:00", end: "13:30" },
      { id: "programacion-d", label: "Mar y Jue · 12:00–13:30", days: [2, 4], start: "12:00", end: "13:30" },
      { id: "programacion-e", label: "Vie · 14:00–15:30", days: [5], start: "14:00", end: "15:30" }
    ]
  }
];

const COURSE_THEME = {
  matematica: { ink: "#1f5c4a", soft: "#e3efe9" },
  calculo: { ink: "#8a641c", soft: "#f7efdd" },
  algebra: { ink: "#35507a", soft: "#e6ecf5" },
  complementos: { ink: "#5b4a7a", soft: "#ece8f5" },
  numeros: { ink: "#2f6a6a", soft: "#e2f0ef" },
  programacion: { ink: "#8a4b2c", soft: "#f6e9e1" }
};

const DEFAULT_THEME = { ink: "#39433e", soft: "#efede6" };
const DAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie"];
const WEEK_START_MIN = 8 * 60;
const WEEK_END_MIN = 16 * 60;
const HOUR_HEIGHT = 46;

const teacherFilter = { query: "", course: "" };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const views = {
  login: $("#loginView"),
  student: $("#studentView"),
  teacher: $("#teacherView")
};

function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    return;
  }
}

function makeId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toMinutes(time) {
  const [hours, minutes] = String(time).split(":").map(Number);
  return hours * 60 + minutes;
}

function optionsOverlap(a, b) {
  const sharesDay = a.days.some((day) => b.days.includes(day));
  return sharesDay && toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}

function formatDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "Fecha desconocida";
  }
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function formatShortDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return "Sin datos";
  }
  return new Intl.DateTimeFormat("es", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
}

function getMonday(date) {
  const monday = new Date(date);
  monday.setHours(0, 0, 0, 0);
  const weekday = monday.getDay();
  monday.setDate(monday.getDate() + (weekday === 0 ? -6 : 1 - weekday));
  return monday;
}

function timeLabel(minutes) {
  const hours = Math.floor(minutes / 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function themeFor(courseId) {
  return COURSE_THEME[courseId] || DEFAULT_THEME;
}

function optionBlocks(course, option) {
  return option.days.map((day) => ({
    courseId: course.id,
    name: course.name,
    code: course.code,
    day,
    start: option.start,
    end: option.end,
    optionId: option.id
  }));
}

function blockKey(block) {
  return `${block.courseId}:${block.day}:${block.start}:${block.end}`;
}

function blocksOverlap(a, b) {
  return a.day === b.day && toMinutes(a.start) < toMinutes(b.end) && toMinutes(b.start) < toMinutes(a.end);
}

function conflictKeys(blocks) {
  const keys = new Set();
  for (let i = 0; i < blocks.length; i += 1) {
    for (let j = i + 1; j < blocks.length; j += 1) {
      if (blocksOverlap(blocks[i], blocks[j])) {
        keys.add(blockKey(blocks[i]));
        keys.add(blockKey(blocks[j]));
      }
    }
  }
  return keys;
}

function getStudentBlocks() {
  const blocks = [];
  COURSES.forEach((course) => {
    const checkbox = $(`input[data-course="${course.id}"]`);
    if (!checkbox || !checkbox.checked) {
      return;
    }
    const selected = $(`input[name="schedule-${course.id}"]:checked`);
    if (!selected) {
      return;
    }
    const option = course.options.find((candidate) => candidate.id === selected.value);
    if (option) {
      blocks.push(...optionBlocks(course, option));
    }
  });
  return blocks;
}

function blocksForSubmission(submission) {
  return submission.courses.flatMap((item) => {
    const course =
      COURSES.find((candidate) => candidate.id === item.courseId) ||
      COURSES.find((candidate) => normalize(candidate.name) === normalize(item.courseName));
    if (!course) {
      return [];
    }
    const option = course.options.find(
      (candidate) => candidate.id === item.optionId || candidate.label === item.schedule
    );
    return option ? optionBlocks(course, option) : [];
  });
}

function layoutDayBlocks(dayBlocks) {
  const items = [];
  let cluster = [];
  let clusterEnd = -1;

  const flush = () => {
    if (!cluster.length) {
      return;
    }
    const laneEnds = [];
    cluster.forEach((item) => {
      const start = toMinutes(item.block.start);
      let lane = laneEnds.findIndex((end) => end <= start);
      if (lane === -1) {
        lane = laneEnds.length;
        laneEnds.push(0);
      }
      laneEnds[lane] = toMinutes(item.block.end);
      item.lane = lane;
    });
    cluster.forEach((item) => {
      item.lanes = laneEnds.length;
      items.push(item);
    });
    cluster = [];
  };

  dayBlocks.forEach((block) => {
    const start = toMinutes(block.start);
    if (cluster.length && start >= clusterEnd) {
      flush();
    }
    cluster.push({ block, lane: 0, lanes: 1 });
    clusterEnd = Math.max(clusterEnd, toMinutes(block.end));
    if (cluster.length === 1) {
      clusterEnd = toMinutes(block.end);
    }
  });
  flush();

  return items;
}

function renderWeek(container, blocks, { compact = false } = {}) {
  if (!container) {
    return;
  }

  const hourHeight = compact ? 30 : HOUR_HEIGHT;
  const totalHeight = ((WEEK_END_MIN - WEEK_START_MIN) / 60) * hourHeight;
  const conflicts = conflictKeys(blocks);
  const monday = getMonday(new Date());

  const heads = DAY_LABELS.map((label, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return `<div class="week-day-head"><span>${label}</span><strong>${String(date.getDate()).padStart(2, "0")}</strong></div>`;
  }).join("");

  const ticks = [];
  const step = compact ? 120 : 60;
  for (let minutes = WEEK_START_MIN; minutes <= WEEK_END_MIN; minutes += step) {
    const top = ((minutes - WEEK_START_MIN) / 60) * hourHeight;
    ticks.push(`<span class="week-hour" style="top:${top}px">${timeLabel(minutes)}</span>`);
  }

  const columns = DAY_LABELS.map((_, index) => {
    const day = index + 1;
    const dayBlocks = blocks
      .filter((block) => block.day === day)
      .sort((a, b) => toMinutes(a.start) - toMinutes(b.start) || toMinutes(b.end) - toMinutes(a.end));

    const rendered = layoutDayBlocks(dayBlocks)
      .map(({ block, lane, lanes }) => {
        const hasConflict = conflicts.has(blockKey(block));
        const top = ((toMinutes(block.start) - WEEK_START_MIN) / 60) * hourHeight;
        const height = Math.max(
          ((toMinutes(block.end) - toMinutes(block.start)) / 60) * hourHeight - 4,
          compact ? 20 : 26
        );
        const theme = themeFor(block.courseId);
        const width = lanes > 1 ? `calc(${100 / lanes}% - 3px)` : "calc(100% - 4px)";
        const left = lanes > 1 ? `calc(${(lane * 100) / lanes}% + 1px)` : "2px";

        return `<div class="week-block${hasConflict ? " is-conflict" : ""}${compact ? " is-compact" : ""}" style="top:${top}px;height:${height}px;width:${width};left:${left};--block-ink:${theme.ink};--block-soft:${theme.soft}" title="${escapeHtml(`${block.name} · ${block.start}–${block.end}`)}">
          <strong>${escapeHtml(compact ? block.code || block.name : block.name)}</strong>
          <span>${escapeHtml(block.start)}${compact ? "" : `–${escapeHtml(block.end)}`}</span>
          ${hasConflict && !compact ? "<em>Cruce</em>" : ""}
        </div>`;
      })
      .join("");

    return `<div class="week-col${compact ? " is-compact" : ""}" data-day="${day}" style="height:${totalHeight}px">
      ${rendered}
    </div>`;
  }).join("");

  container.style.setProperty("--week-height", `${totalHeight}px`);
  container.style.setProperty("--hour-step", `${hourHeight}px`);
  container.classList.toggle("is-compact", compact);
  container.innerHTML = `
    <div class="week-corner" aria-hidden="true"></div>
    ${heads}
    <div class="week-axis" style="height:${totalHeight}px">${ticks.join("")}</div>
    ${columns}`;
}

function renderStudentWeek() {
  const container = $("#studentWeek");
  if (!container) {
    return;
  }

  const blocks = getStudentBlocks();
  renderWeek(container, blocks);

  const seen = new Set();
  const chips = [];
  blocks.forEach((block) => {
    if (seen.has(block.courseId)) {
      return;
    }
    seen.add(block.courseId);
    chips.push(
      `<span class="week-chip"><i style="background:${themeFor(block.courseId).ink}"></i>${escapeHtml(block.name)}</span>`
    );
  });
  $("#studentWeekLegend").innerHTML = chips.join("");

  const conflicts = conflictKeys(blocks).size > 0;
  const note = $("#studentWeekNote");
  note.classList.toggle("is-conflict", conflicts);
  note.textContent = !blocks.length
    ? "Selecciona tus cursos y horarios para ver cómo queda tu semana."
    : conflicts
      ? "Hay cruces de horario: los bloques en rojo se superponen. Ajusta uno de los ramos para resolverlos."
      : "Sin cruces: tu semana está ordenada. Puedes guardar tu declaración para que el profesor la revise.";
}

function getSubmissions() {
  const stored = safeGet(STORAGE.submissions, []);
  if (!Array.isArray(stored)) {
    return [];
  }
  return stored
    .filter((item) => item && typeof item === "object" && Array.isArray(item.courses))
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

function saveSubmissions(submissions) {
  return safeSet(STORAGE.submissions, submissions);
}

function getSession() {
  const session = safeGet(STORAGE.session, null);
  if (!session || !session.role || !USERS[session.username]) {
    return null;
  }
  return session;
}

function setSession(session) {
  safeSet(STORAGE.session, session);
}

function showToast(message, isError = false) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.toggle("is-error", isError);
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}

function showView(role) {
  Object.values(views).forEach((view) => {
    view.hidden = true;
  });
  const session = getSession();
  const header = $("#siteHeader");
  const tabbar = $("#tabbar");

  if (!session) {
    header.hidden = true;
    tabbar.hidden = true;
    document.body.classList.remove("has-tabbar");
    views.login.hidden = false;
    return;
  }

  header.hidden = false;
  tabbar.hidden = false;
  document.body.classList.add("has-tabbar");
  $$(".tabbar-group", tabbar).forEach((group) => {
    const isCurrent = group.dataset.tabbar === role;
    group.hidden = !isCurrent;
    if (isCurrent) {
      $$(".tabbar-btn", group).forEach((button, index) => {
        button.classList.toggle("is-active", index === 0);
        if (index === 0) {
          button.setAttribute("aria-current", "true");
        } else {
          button.removeAttribute("aria-current");
        }
      });
    }
  });
  $("#sessionRole").textContent = session.role === "teacher" ? "Profesor" : "Estudiante";
  $("#sessionName").textContent = session.displayName || session.username;
  views[role].hidden = false;

  if (role === "teacher") {
    renderTeacher();
  } else {
    resetStudentAlert();
    loadDraft();
    renderStudentSummary();
    updateLiveConflicts();
  }
}

function resetStudentAlert() {
  const alert = $("#studentAlert");
  if (!alert) {
    return;
  }
  alert.hidden = true;
  alert.innerHTML = "";
  alert.className = "alert";
}

function renderCourseFields() {
  const container = $("#courseFields");
  container.innerHTML = COURSES.map((course) => {
    const options = course.options
      .map(
        (option) => `
          <label class="radio-option">
            <input type="radio" name="schedule-${course.id}" value="${option.id}" data-schedule-for="${course.id}">
            <span>${escapeHtml(option.label)}</span>
          </label>`
      )
      .join("");

    return `
      <article class="course-card" data-course-card="${course.id}">
        <label class="course-select">
          <input type="checkbox" name="course" value="${course.id}" data-course="${course.id}">
          <span class="course-info">
            <strong>${escapeHtml(course.name)}</strong>
            <small>${escapeHtml(course.code)} · ${course.credits} créditos</small>
          </span>
        </label>
        <fieldset class="course-schedules" data-schedules="${course.id}" disabled>
          <legend>Horario del curso</legend>
          ${options}
        </fieldset>
      </article>`;
  }).join("");
}

function collectStudentData() {
  const studentName = $("#studentName").value.trim();
  const notes = $("#studentNotes").value.trim();
  const items = [];

  COURSES.forEach((course) => {
    const checkbox = $(`input[data-course="${course.id}"]`);
    if (!checkbox || !checkbox.checked) {
      return;
    }
    const selected = $(`input[name="schedule-${course.id}"]:checked`);
    const option = selected ? course.options.find((candidate) => candidate.id === selected.value) : null;
    items.push({ course, option });
  });

  const errors = [];
  if (studentName.length < 3) {
    errors.push("Ingresa tu nombre completo.");
  }
  if (!items.length) {
    errors.push("Selecciona al menos un curso.");
  }

  const missing = items.filter((item) => !item.option);
  if (missing.length) {
    errors.push(`Elige un horario para: ${missing.map((item) => item.course.name).join(", ")}.`);
  }

  const conflicts = [];
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      const a = items[i];
      const b = items[j];
      if (a.option && b.option && optionsOverlap(a.option, b.option)) {
        conflicts.push({
          a: a.course.name,
          b: b.course.name,
          detail: `${a.option.label} se cruza con ${b.option.label}`
        });
      }
    }
  }

  return { studentName, notes, items, errors, conflicts };
}

function alertMarkup(errors, conflicts) {
  const parts = [];
  if (errors.length) {
    parts.push(`<div><strong>Revisa el formulario.</strong><ul>${errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}</ul></div>`);
  }
  if (conflicts.length) {
    parts.push(
      `<div><strong>Cruce de horarios detectado.</strong><ul>${conflicts
        .map((conflict) => `<li>${escapeHtml(conflict.a)} y ${escapeHtml(conflict.b)}: ${escapeHtml(conflict.detail)}.</li>`)
        .join("")}</ul></div>`
    );
  }
  return parts.join("");
}

function renderValidation(result) {
  const alert = $("#studentAlert");
  const hasErrors = result.errors.length > 0;
  const hasConflicts = result.conflicts.length > 0;

  if (!hasErrors && !hasConflicts) {
    alert.hidden = true;
    alert.innerHTML = "";
    return false;
  }

  alert.hidden = false;
  alert.className = `alert${hasConflicts && !hasErrors ? " is-warning" : ""}`;
  alert.innerHTML = alertMarkup(result.errors, result.conflicts);
  return true;
}

function updateLiveConflicts() {
  renderStudentWeek();
  const result = collectStudentData();
  if (!result.conflicts.length) {
    const alert = $("#studentAlert");
    if (alert.classList.contains("is-warning") || alert.classList.contains("is-success")) {
      alert.hidden = true;
      alert.innerHTML = "";
      alert.className = "alert";
    }
    return;
  }

  const alert = $("#studentAlert");
  alert.hidden = false;
  alert.className = "alert is-warning";
  alert.innerHTML = alertMarkup([], result.conflicts);
}

function buildSubmission(result) {
  const existing = getSubmissions().find((item) => normalize(item.studentName) === normalize(result.studentName));
  return {
    id: existing ? existing.id : makeId(),
    version: 1,
    studentName: result.studentName,
    courses: result.items.map((item) => ({
      courseId: item.course.id,
      courseName: item.course.name,
      code: item.course.code,
      optionId: item.option.id,
      schedule: item.option.label
    })),
    notes: result.notes,
    submittedAt: new Date().toISOString()
  };
}

function persistSubmission(submission) {
  const submissions = getSubmissions();
  const index = submissions.findIndex((item) => item.id === submission.id);
  if (index >= 0) {
    submissions[index] = submission;
  } else {
    submissions.push(submission);
  }
  const saved = saveSubmissions(submissions);
  if (!saved) {
    showToast("No se pudo guardar. Revisa el almacenamiento del navegador.", true);
    return false;
  }
  safeSet(STORAGE.last, submission.id);
  saveDraft();
  return true;
}

function renderStudentSummary() {
  const container = $("#studentSummary");
  const status = $("#summaryStatus");
  const typedName = $("#studentName").value.trim();
  const submissions = typedName ? getSubmissions() : [];
  const submission = typedName
    ? submissions.find((item) => normalize(item.studentName) === normalize(typedName))
    : null;

  if (!submission) {
    status.hidden = true;
    container.innerHTML = `
      <div class="summary-empty">
        Completa el cuestionario y guarda tus elecciones. Aquí verás el resumen de cursos, horarios y observaciones.
      </div>`;
    return;
  }

  status.hidden = false;
  const courses = submission.courses
    .map(
      (course) => `
        <div class="summary-course">
          <strong>${escapeHtml(course.courseName)}</strong>
          <span>${escapeHtml(course.schedule)}</span>
        </div>`
    )
    .join("");

  container.innerHTML = `
    <div class="summary-student">
      <span>Estudiante</span>
      <strong>${escapeHtml(submission.studentName)}</strong>
    </div>
    <div class="summary-courses">${courses}</div>
    ${submission.notes ? `<div class="summary-notes">${escapeHtml(submission.notes)}</div>` : ""}
    <div class="summary-meta">
      <span>${submission.courses.length} ${submission.courses.length === 1 ? "curso" : "cursos"}</span>
      <span>${escapeHtml(formatDate(submission.submittedAt))}</span>
    </div>`;
}

function saveDraft() {
  const selections = {};
  COURSES.forEach((course) => {
    const checkbox = $(`input[data-course="${course.id}"]`);
    const selected = $(`input[name="schedule-${course.id}"]:checked`);
    selections[course.id] = {
      checked: Boolean(checkbox && checkbox.checked),
      optionId: selected ? selected.value : null
    };
  });

  safeSet(STORAGE.draft, {
    studentName: $("#studentName").value,
    notes: $("#studentNotes").value,
    selections,
    updatedAt: new Date().toISOString()
  });
}

function loadDraft() {
  const draft = safeGet(STORAGE.draft, null);
  if (!draft) {
    $("#studentName").value = getSession()?.displayName || "";
    return;
  }

  $("#studentName").value = draft.studentName || getSession()?.displayName || "";
  if (draft.notes) {
    $("#studentNotes").value = draft.notes;
  }

  COURSES.forEach((course) => {
    const state = draft.selections?.[course.id];
    if (!state) {
      return;
    }
    const checkbox = $(`input[data-course="${course.id}"]`);
    const fieldset = $(`fieldset[data-schedules="${course.id}"]`);
    if (checkbox) {
      checkbox.checked = Boolean(state.checked);
    }
    if (fieldset) {
      fieldset.disabled = !state.checked;
    }
    if (state.checked && state.optionId) {
      const radio = $(`input[name="schedule-${course.id}"][value="${state.optionId}"]`);
      if (radio) {
        radio.checked = true;
      }
    }
  });
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadJson(filename, payload) {
  downloadFile(filename, JSON.stringify(payload, null, 2), "application/json");
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function buildCsv(submissions) {
  const rows = [["Estudiante", "Curso", "Código", "Horario", "Observaciones", "Guardado"]];
  submissions.forEach((submission) => {
    submission.courses.forEach((course) => {
      rows.push([
        submission.studentName,
        course.courseName,
        course.code,
        course.schedule,
        submission.notes,
        formatDate(submission.submittedAt)
      ]);
    });
  });
  return `\ufeff${rows.map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
}

function exportCsv() {
  const submissions = getSubmissions().filter(matchesFilter);
  if (!submissions.length) {
    showToast("No hay declaraciones para exportar con el filtro actual.", true);
    return;
  }
  downloadFile("nexo-declaraciones.csv", buildCsv(submissions), "text/csv;charset=utf-8");
  showToast(
    `CSV generado con ${submissions.length} ${submissions.length === 1 ? "declaración" : "declaraciones"}.`
  );
}

function matchesFilter(submission) {
  if (
    teacherFilter.course &&
    !submission.courses.some((course) => course.courseId === teacherFilter.course)
  ) {
    return false;
  }

  const query = normalize(teacherFilter.query);
  if (!query) {
    return true;
  }

  const haystack = normalize(
    [
      submission.studentName,
      submission.notes,
      ...submission.courses.flatMap((course) => [course.courseName, course.code, course.schedule])
    ].join(" ")
  );
  return haystack.includes(query);
}

function renderTeacher() {
  const all = getSubmissions();
  const submissions = all.filter(matchesFilter);
  const hasRecords = all.length > 0;
  const hasFilter = teacherFilter.query.trim() !== "" || teacherFilter.course !== "";
  const visible = submissions.length > 0;

  $("#statSubmissions").textContent = String(all.length);
  const uniqueCourses = new Set(
    all.flatMap((submission) => submission.courses.map((course) => course.courseId || course.courseName))
  );
  $("#statCourses").textContent = String(uniqueCourses.size);
  $("#statUpdated").textContent = hasRecords ? formatShortDate(all[0].submittedAt) : "Sin datos";
  $("#teacherCount").textContent = !hasRecords
    ? "Aún no hay declaraciones."
    : hasFilter
      ? `${submissions.length} de ${all.length} ${all.length === 1 ? "declaración" : "declaraciones"} coinciden con el filtro.`
      : `${all.length} ${all.length === 1 ? "declaración registrada" : "declaraciones registradas"}.`;

  $("#teacherEmpty").hidden = hasRecords;
  $("#teacherNoMatch").hidden = !hasRecords || visible;
  $("#teacherList").hidden = !visible;

  $("#teacherList").innerHTML = submissions
    .map((submission) => {
      const courses = submission.courses
        .map(
          (course) => `
            <div class="record-course">
              <strong>${escapeHtml(course.courseName)}<small>${escapeHtml(course.code || "")}</small></strong>
              <span>${escapeHtml(course.schedule)}</span>
            </div>`
        )
        .join("");

      return `
        <details class="record">
          <summary>
            <div class="record-main">
              <h3>${escapeHtml(submission.studentName)}</h3>
              <p>${submission.courses.map((course) => escapeHtml(course.courseName)).join(" · ")}</p>
            </div>
            <span class="record-count">${submission.courses.length} ${submission.courses.length === 1 ? "curso" : "cursos"}</span>
            <span class="record-chevron" aria-hidden="true"></span>
          </summary>
          <div class="record-body">
            <div class="record-courses">${courses}</div>
            <div class="record-week">
              <p class="record-week-title">Semana declarada</p>
              <div class="week-scroll">
                <div class="week-grid week-grid--compact" data-week-id="${escapeHtml(submission.id)}"></div>
              </div>
            </div>
            ${submission.notes ? `<div class="record-notes">${escapeHtml(submission.notes)}</div>` : ""}
            <div class="record-footer">
              <span>Guardado el ${escapeHtml(formatDate(submission.submittedAt))}</span>
              <button class="btn btn-ghost btn-small" type="button" data-download-id="${escapeHtml(submission.id)}">Descargar JSON</button>
            </div>
          </div>
        </details>`;
    })
    .join("");

  $$("[data-week-id]", $("#teacherList")).forEach((node) => {
    const submission = submissions.find((item) => item.id === node.dataset.weekId);
    if (submission) {
      renderWeek(node, blocksForSubmission(submission), { compact: true });
    }
  });
}

function normalizeImported(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const studentName = String(entry.studentName || "").trim();
  if (!studentName || !Array.isArray(entry.courses) || !entry.courses.length) {
    return null;
  }

  const courses = entry.courses
    .map((course) => {
      if (!course || typeof course !== "object") {
        return null;
      }
      const knownCourse = COURSES.find((candidate) => candidate.id === course.courseId);
      const knownOption = knownCourse
        ? knownCourse.options.find((option) => option.id === course.optionId || option.label === course.schedule)
        : null;
      const courseName = String(course.courseName || knownCourse?.name || "").trim();
      const schedule = String(course.schedule || knownOption?.label || "").trim();
      if (!courseName || !schedule) {
        return null;
      }
      return {
        courseId: String(course.courseId || knownCourse?.id || ""),
        courseName,
        code: String(course.code || knownCourse?.code || ""),
        optionId: String(course.optionId || knownOption?.id || ""),
        schedule
      };
    })
    .filter(Boolean);

  if (!courses.length) {
    return null;
  }

  const submittedAt = new Date(entry.submittedAt);
  return {
    id: String(entry.id || makeId()),
    version: 1,
    studentName,
    courses,
    notes: String(entry.notes || ""),
    submittedAt: Number.isNaN(submittedAt.getTime()) ? new Date().toISOString() : submittedAt.toISOString()
  };
}

function importSubmissions(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let parsed;
    try {
      parsed = JSON.parse(String(reader.result));
    } catch {
      showToast("El archivo no contiene JSON válido.", true);
      return;
    }

    const entries = Array.isArray(parsed) ? parsed : [parsed];
    const imported = entries.map(normalizeImported).filter(Boolean);
    if (!imported.length) {
      showToast("No se encontraron declaraciones válidas en el archivo.", true);
      return;
    }

    const merged = new Map(getSubmissions().map((submission) => [submission.id, submission]));
    imported.forEach((submission) => merged.set(submission.id, submission));
    if (!saveSubmissions(Array.from(merged.values()))) {
      showToast("No se pudo guardar la importación.", true);
      return;
    }

    renderTeacher();
    showToast(
      `${imported.length} ${imported.length === 1 ? "declaración importada" : "declaraciones importadas"} correctamente.`
    );
  };
  reader.onerror = () => showToast("No se pudo leer el archivo.", true);
  reader.readAsText(file);
}

function initTeacherFilters() {
  const select = $("#teacherCourseFilter");
  COURSES.forEach((course) => {
    const option = document.createElement("option");
    option.value = course.id;
    option.textContent = `${course.name} · ${course.code}`;
    select.appendChild(option);
  });
}

function setTabbarActive(button) {
  const group = button.closest(".tabbar-group");
  if (!group) {
    return;
  }
  $$(".tabbar-btn", group).forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    if (active) {
      item.setAttribute("aria-current", "true");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

function setupTabbar() {
  const tabbar = $("#tabbar");

  tabbar.addEventListener("click", (event) => {
    const button = event.target.closest(".tabbar-btn");
    if (!button) {
      return;
    }
    if (button.dataset.export === "csv") {
      exportCsv();
      return;
    }
    const target = document.querySelector(button.dataset.scroll);
    if (!target) {
      return;
    }
    setTabbarActive(button);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const button = $(`.tabbar-btn[data-scroll="#${entry.target.id}"]`);
        if (button && button.offsetParent !== null) {
          setTabbarActive(button);
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  ["#enrollmentForm", "#studentWeekSection", "#studentSummaryCard", "#teacherTop", "#teacherRecords"].forEach(
    (selector) => {
      const node = document.querySelector(selector);
      if (node) {
        observer.observe(node);
      }
    }
  );
}

function bindLogin() {
  $("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = $("#loginUser").value.trim().toLowerCase();
    const password = $("#loginPass").value;
    const account = USERS[username];
    const error = $("#loginError");

    if (!account || account.password !== password) {
      error.textContent = "Usuario o contraseña incorrectos. Revisa las credenciales de demostración.";
      $("#loginPass").value = "";
      $("#loginPass").focus();
      return;
    }

    error.textContent = "";
    const session = {
      username,
      role: account.role,
      displayName: account.displayName,
      startedAt: new Date().toISOString()
    };
    setSession(session);
    $("#loginForm").reset();
    showView(account.role);
  });
}

function bindStudent() {
  const form = $("#enrollmentForm");

  $("#courseFields").addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("input[data-course]")) {
      const fieldset = $(`fieldset[data-schedules="${target.dataset.course}"]`);
      if (fieldset) {
        fieldset.disabled = !target.checked;
        if (!target.checked) {
          $$(`input[name="schedule-${target.dataset.course}"]`).forEach((radio) => {
            radio.checked = false;
          });
        }
      }
    }
    updateLiveConflicts();
    saveDraft();
  });

  form.addEventListener("input", () => {
    saveDraft();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = collectStudentData();
    if (renderValidation(result)) {
      if (result.conflicts.length) {
        $("#studentAlert").scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const submission = buildSubmission(result);
    if (!persistSubmission(submission)) {
      return;
    }

    const alert = $("#studentAlert");
    alert.hidden = false;
    alert.className = "alert is-success";
    alert.innerHTML = `<div><strong>Elecciones guardadas.</strong> ${escapeHtml(
      submission.studentName
    )}, tu registro quedó disponible para el profesor. Puedes modificar tu selección cuando quieras.</div>`;
    renderStudentSummary();
    showToast("Elecciones guardadas correctamente.");
  });

  $("#studentName").addEventListener("change", renderStudentSummary);
}

function bindTeacher() {
  $("#importTrigger").addEventListener("click", () => {
    $("#importFile").click();
  });

  $("#teacherSearch").addEventListener("input", (event) => {
    teacherFilter.query = event.target.value;
    renderTeacher();
  });

  $("#teacherCourseFilter").addEventListener("change", (event) => {
    teacherFilter.course = event.target.value;
    renderTeacher();
  });

  $("#exportCsv").addEventListener("click", exportCsv);

  $("#importFile").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) {
      importSubmissions(file);
    }
    event.target.value = "";
  });

  $("#exportAll").addEventListener("click", () => {
    const submissions = getSubmissions();
    if (!submissions.length) {
      showToast("No hay declaraciones para exportar.", true);
      return;
    }
    downloadJson("nexo-declaraciones.json", submissions);
    showToast("Se exportaron todas las declaraciones.");
  });

  $("#teacherList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-download-id]");
    if (!button) {
      return;
    }
    const submission = getSubmissions().find((item) => item.id === button.dataset.downloadId);
    if (!submission) {
      showToast("No se encontró la declaración.", true);
      return;
    }
    const filename = `elecciones-${normalize(submission.studentName).replace(/\s+/g, "-") || "estudiante"}.json`;
    downloadJson(filename, submission);
    showToast("Archivo JSON generado.");
  });
}

function bindLogout() {
  $("#logoutBtn").addEventListener("click", () => {
    safeRemove(STORAGE.session);
    $("#loginError").textContent = "";
    $("#loginPass").value = "";
    Object.values(views).forEach((view) => {
      view.hidden = true;
    });
    $("#siteHeader").hidden = true;
    $("#tabbar").hidden = true;
    document.body.classList.remove("has-tabbar");
    views.login.hidden = false;
    $("#loginUser").focus();
  });
}

function init() {
  const versionNode = $("#appVersion");
  if (versionNode) {
    versionNode.innerHTML = `Demo v${APP_VERSION} · <a href="v1/" style="color: inherit; text-decoration: underline;" title="Ir a la versión anterior v0.1">Ver versión anterior (v0.1)</a>`;
  }

  renderCourseFields();
  initTeacherFilters();
  setupTabbar();
  bindLogin();
  bindStudent();
  bindTeacher();
  bindLogout();

  const session = getSession();
  if (!session) {
    showView(null);
    return;
  }

  showView(session.role);
}

init();

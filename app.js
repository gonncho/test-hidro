// ---------- Carga de datos ----------
const COMPANEROS = [];
function registrarCompanero(c) { COMPANEROS.push(c); }

function cargarScript(src) {
  return new Promise((ok, mal) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = ok;
    s.onerror = () => mal(new Error("No se pudo cargar " + src));
    document.head.appendChild(s);
  });
}

// ---------- Utilidades ----------
const $ = (id) => document.getElementById(id);
const LETRAS = "abcdefgh";

function barajar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function todasLasPreguntas() {
  const res = [];
  for (const c of COMPANEROS) {
    c.preguntas.forEach((p, i) => res.push({ ...p, autor: nombreCorto(c), num: i + 1 }));
  }
  return res;
}

// Solo el nombre de pila (sin apellidos)
function nombreCorto(c) { return c.nombre.split(" ")[0]; }

function marcador() {
  const ok = test.respuestas.filter((r) => r.acierto).length;
  return `${ok} bien · ${test.respuestas.length - ok} mal`;
}

function mostrar(id) {
  for (const s of document.querySelectorAll(".pantalla")) s.classList.add("oculto");
  $(id).classList.remove("oculto");
  window.scrollTo(0, 0);
}

// ---------- Estado del test ----------
let test = null; // { preguntas, mostrarAutor, indice, respuestas }

function empezar(preguntas, mostrarAutor) {
  if (!preguntas.length) return;
  test = { preguntas, mostrarAutor, indice: 0, respuestas: [] };
  mostrar("quiz");
  pintarPregunta();
}

function pintarPregunta() {
  const p = test.preguntas[test.indice];
  const n = test.preguntas.length;
  $("progreso").textContent = `${String(test.indice + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  $("marcador").textContent = marcador();
  $("barra").style.width = `${(test.indice / n) * 100}%`;

  $("autor").textContent = test.mostrarAutor ? `${p.autor} · pregunta ${p.num}` : "";
  $("autor").classList.toggle("oculto", !test.mostrarAutor);
  $("enunciado").innerHTML = p.enunciado;

  const imgs = $("imagenes");
  imgs.innerHTML = "";
  for (const im of p.imagenes || []) {
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.src = im.src;
    img.alt = im.pie || "Figura de la pregunta";
    img.addEventListener("click", () => abrirVisor(im.src));
    fig.appendChild(img);
    if (im.pie) {
      const cap = document.createElement("figcaption");
      cap.textContent = im.pie;
      fig.appendChild(cap);
    }
    imgs.appendChild(fig);
  }

  const ol = $("opciones");
  ol.innerHTML = "";
  ol.classList.remove("respondida");
  p.opciones.forEach((texto, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="letra">${LETRAS[i]}</span><span>${texto}</span>`;
    li.tabIndex = 0;
    li.addEventListener("click", () => responder(i));
    ol.appendChild(li);
  });

  $("btn-siguiente").classList.add("oculto");
}

function responder(i) {
  const ol = $("opciones");
  if (ol.classList.contains("respondida")) return;
  ol.classList.add("respondida");
  const p = test.preguntas[test.indice];
  const items = ol.children;
  items[p.correcta].classList.add("correcta");
  if (i !== p.correcta) items[i].classList.add("incorrecta");
  test.respuestas.push({ pregunta: p, elegida: i, acierto: i === p.correcta });

  $("marcador").textContent = marcador();
  const btn = $("btn-siguiente");
  btn.textContent = test.indice === test.preguntas.length - 1 ? "Ver resultado" : "Siguiente";
  btn.classList.remove("oculto");
  btn.focus();
}

function siguiente() {
  test.indice++;
  if (test.indice >= test.preguntas.length) pintarResultado();
  else { pintarPregunta(); window.scrollTo(0, 0); }
}

function pintarResultado() {
  const total = test.respuestas.length;
  const aciertos = test.respuestas.filter((r) => r.acierto).length;
  const nota = total ? (aciertos / total) * 10 : 0;
  $("nota").innerHTML = `${nota.toFixed(1).replace(".", ",")}<small> / 10</small>`;
  $("nota-detalle").textContent = `${aciertos} ${aciertos === 1 ? "acierto" : "aciertos"} de ${total} ${total === 1 ? "pregunta" : "preguntas"}`;

  const fallos = test.respuestas.filter((r) => !r.acierto);
  $("btn-repetir-fallos").classList.toggle("oculto", fallos.length === 0);

  const rev = $("revision");
  rev.innerHTML = fallos.length ? "<h3>Preguntas falladas</h3>" : "<h3>Todas correctas.</h3>";
  for (const r of fallos) {
    const p = r.pregunta;
    const div = document.createElement("div");
    div.className = "rev";
    div.innerHTML =
      (test.mostrarAutor ? `<p class="autor">${p.autor} · pregunta ${p.num}</p>` : "") +
      `<p class="enun">${p.enunciado}</p>` +
      `<p class="tu">Tu respuesta: ${LETRAS[r.elegida]}) ${p.opciones[r.elegida]}</p>` +
      `<p class="sol">Correcta: ${LETRAS[p.correcta]}) ${p.opciones[p.correcta]}</p>`;
    rev.appendChild(div);
  }
  mostrar("resultado");
}

// ---------- Visor de imágenes ----------
function abrirVisor(src) {
  $("visor").querySelector("img").src = src;
  $("visor").classList.remove("oculto");
}

// ---------- Menú ----------
function iniciarMenu() {
  const total = todasLasPreguntas().length;
  $("resumen").textContent = `${total} preguntas · ${COMPANEROS.length} compañeros`;
  $("txt-todas").textContent = `${total} preguntas en orden aleatorio`;

  const lista = $("lista-companeros");
  lista.innerHTML = "";
  for (const c of COMPANEROS) {
    const b = document.createElement("button");
    b.className = "companero";
    b.innerHTML = `<span>${nombreCorto(c)}</span><span class="cuenta">${c.preguntas.length}</span>`;
    b.onclick = () =>
      empezar(c.preguntas.map((p, i) => ({ ...p, autor: nombreCorto(c), num: i + 1 })), true);
    lista.appendChild(b);
  }

  const num = $("num-aleatorias");
  num.max = total;
  if (+num.value > total) num.value = total;
  const ajustar = (v) => { num.value = Math.max(1, Math.min(total, Math.floor(v) || 1)); };
  $("menos").onclick = () => ajustar(+num.value - 1);
  $("mas").onclick = () => ajustar(+num.value + 1);
  num.onchange = () => ajustar(+num.value);

  $("btn-aleatorias").onclick = () => {
    ajustar(+num.value);
    empezar(barajar(todasLasPreguntas()).slice(0, +num.value), false);
  };
  $("btn-todas").onclick = () => empezar(barajar(todasLasPreguntas()), false);
}

$("btn-siguiente").onclick = siguiente;
$("btn-salir").onclick = () => mostrar("menu");
$("btn-menu").onclick = () => mostrar("menu");
$("btn-repetir").onclick = () => {
  const ps = test.preguntas;
  empezar(test.mostrarAutor ? ps : barajar(ps), test.mostrarAutor);
};
$("btn-repetir-fallos").onclick = () => {
  const ps = test.respuestas.filter((r) => !r.acierto).map((r) => r.pregunta);
  empezar(test.mostrarAutor ? ps : barajar(ps), test.mostrarAutor);
};
$("visor").onclick = () => $("visor").classList.add("oculto");
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $("visor").classList.add("oculto");
  if ($("quiz").classList.contains("oculto")) return;
  const k = e.key.toLowerCase();
  const idx = LETRAS.indexOf(k);
  if (document.activeElement && document.activeElement.tagName === "INPUT") return;
  if (idx >= 0 && idx < $("opciones").children.length && k.length === 1) responder(idx);
  const ae = document.activeElement;
  if (e.key === "Enter" && ae && ae.parentElement === $("opciones") && !$("opciones").classList.contains("respondida")) {
    e.preventDefault();
    responder([...$("opciones").children].indexOf(ae));
    return;
  }
  if (e.key === "Enter" && !$("btn-siguiente").classList.contains("oculto")) {
    e.preventDefault();
    siguiente();
  }
});

// ---------- Arranque ----------
Promise.all(LISTA_COMPANEROS.map((id) => cargarScript(`data/${id}.js?t=${Date.now()}`)))
  .then(() => {
    // Mantener el orden de LISTA_COMPANEROS
    COMPANEROS.sort((a, b) => LISTA_COMPANEROS.indexOf(a.id) - LISTA_COMPANEROS.indexOf(b.id));
    iniciarMenu();
  })
  .catch((err) => {
    $("resumen").textContent = "Error cargando las preguntas: " + err.message;
  });

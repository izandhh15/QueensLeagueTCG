function abrirSobre() {
  const nuevos = [];
  for (let i = 0; i < TAM_SOBRE; i++) {
    const idx = Math.floor(Math.random() * CARDS.length);
    const card = CARDS[idx];

    const eraNuevo = !coleccion[idx];
    coleccion[idx] = true;
    nuevos.push(card.nombre + (eraNuevo ? " ⭐" : ""));
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(coleccion));
  renderAlbum();
  lastPack.textContent = "Has conseguido: " + nuevos.join(", ");
}
const btnOpen = document.getElementById("btn-open");
btnOpen.addEventListener("click", abrirSobre);

function renderAlbum() {
  const album = document.getElementById("album");
  album.innerHTML = "";
  coleccion.forEach((obtenida, idx) => {
    const card = CARDS[idx];
    const div = document.createElement("div");
    div.className = "card" + (obtenida ? " obtained" : "");
    div.innerHTML = `
      <div class="thumb">
        ${obtenida ? `<img src="${card.imagen}" alt="${card.nombre}">` : "?"}
      </div>
      <div class="label">${obtenida ? card.nombre : "Sin conseguir"}</div>
    `;
    album.appendChild(div);
  });

  const stats = document.getElementById("stats");
  const conseguidos = coleccion.filter(Boolean).length;
  stats.textContent = `${conseguidos} / ${CARDS.length}`;

  const lastPack = document.getElementById("last-pack");
  if (conseguidos === CARDS.length) lastPack.textContent = "¡Álbum completado!";
}

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

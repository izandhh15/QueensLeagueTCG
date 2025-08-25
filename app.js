// URL del reverso oficial
const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

const CARDS = [
  // Escudos
  { id: 1, nombre: "Escudo 1K", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudo1k.png" },
  { id: 2, nombre: "Escudo Aniquiladoras FC", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudoani.png" },
  { id: 3, nombre: "Escudo El Barrio", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudobarrio.png" },
  { id: 4, nombre: "Escudo Jijantas FC", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudojijantas.png" },
  { id: 5, nombre: "Escudo Kunitas", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudokunitas.png" },
  { id: 6, nombre: "Escudo Las Troncas FC", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudotroncas.png" },
  { id: 7, nombre: "Escudo PIO FC", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudiopio.png" },
  { id: 8, nombre: "Escudo Porcinas FC", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudoporcinas.png" },
  { id: 9, nombre: "Escudo Rayo de Barcelona", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudorayo.png" },
  { id: 10, nombre: "Escudo Saiyans FC", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudosaiyans.png" },
  { id: 11, nombre: "Escudo Ultimate Móstoles", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudomostoles.png" },
  { id: 12, nombre: "Escudo Xbuyer Team", tipo: "escudo", imagen: "https://i.ibb.co/XXXXXX/escudoxbuyer.png" },

  // Presidentas/Presidentes
  { id: 13, nombre: "Mayichi (1K)", tipo: "presidenta", imagen: "https://i.ibb.co/XXXXXX/mayichi.png" },
  { id: 14, nombre: "Ama Blitz (Aniquiladoras FC)", tipo: "presidenta", imagen: "https://i.ibb.co/XXXXXX/amablitz.png" },
  { id: 15, nombre: "Adri Contreras + Mercedes Roa (El Barrio)", tipo: "presidente", imagen: "https://i.ibb.co/XXXXXX/adri-mercedes.png" },
  { id: 16, nombre: "Gerard Romero + Lis Cid (Jijantas FC)", tipo: "presidente", imagen: "https://i.ibb.co/XXXXXX/gerard-lis.png" },
  { id: 17, nombre: "Jo Valicenti (Kunitas)", tipo: "presidenta", imagen: "https://i.ibb.co/XXXXXX/jo.png" },
  { id: 18, nombre: "Violeta + Perxitaa (Las Troncas FC)", tipo: "presidente", imagen: "https://i.ibb.co/XXXXXX/violeta-perxitaa.png" },
  { id: 19, nombre: "Rivers (PIO FC)", tipo: "presidenta", imagen: "https://i.ibb.co/XXXXXX/rivers.png" },
  { id: 20, nombre: "Gemita (Porcinas FC)", tipo: "presidenta", imagen: "https://i.ibb.co/XXXXXX/gemita.png" },
  { id: 21, nombre: "Spursito (Rayo de Barcelona)", tipo: "presidente", imagen: "https://i.ibb.co/XXXXXX/spursito.png" },
  { id: 22, nombre: "Totakeki (Saiyans FC)", tipo: "presidente", imagen: "https://i.ibb.co/XXXXXX/totakeki.png" },
  { id: 23, nombre: "Noe9977 (Ultimate Móstoles)", tipo: "presidenta", imagen: "https://i.ibb.co/XXXXXX/noe9977.png" },
  { id: 24, nombre: "Javi Buyer + Eric Minibuyer (Xbuyer Team)", tipo: "presidente", imagen: "https://i.ibb.co/XXXXXX/javi-eric.png" }
];


// ====== VARIABLES Y LOCALSTORAGE ======
const STORAGE_KEY = "album_cromos_queens";
const STORAGE_COINS = "monedas_queens";
const STORAGE_DAILY = "daily_bonus_queens";
const STORAGE_TWITTER = "bonus_twitter_queens";
const STORAGE_TWITCH = "bonus_twitch_queens";

const TAM_SOBRE = 5;
const COSTE_SOBRE = 1000;

let monedas = parseInt(localStorage.getItem(STORAGE_COINS)) || 5000;
let coleccion = JSON.parse(localStorage.getItem(STORAGE_KEY)) || Array(CARDS.length).fill(false);

// ====== RENDER ALBUM ======
function renderAlbum() {
  const grid = document.getElementById("album-grid");
  grid.innerHTML = "";
  CARDS.forEach((card, idx) => {
    const obtenida = coleccion[idx];
    const div = document.createElement("div");
    div.className = "card-slot";
    div.innerHTML = `
      <div class="thumb">
        <img src="${obtenida ? card.imagen : REVERSO}" alt="">
      </div>
    `;
    grid.appendChild(div);
  });

  document.getElementById("monedas-panel").textContent = "Monedas: " + monedas;
}

// ====== ABRIR SOBRE ======
function abrirSobre() {
  if (monedas < COSTE_SOBRE) {
    alert("No tienes suficientes monedas para abrir un sobre.");
    return;
  }

  monedas -= COSTE_SOBRE;
  localStorage.setItem(STORAGE_COINS, monedas);

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
  document.getElementById("last-pack").textContent = "Has conseguido: " + nuevos.join(", ");
}

// ====== RECOMPENSAS ======
function reclamarDiarias() {
  const ultimo = parseInt(localStorage.getItem(STORAGE_DAILY)) || 0;
  const ahora = Date.now();
  if (ahora - ultimo < 86400000) {
    alert("Ya reclamaste hoy, vuelve más tarde.");
    return;
  }
  monedas += 2000;
  localStorage.setItem(STORAGE_COINS, monedas);
  localStorage.setItem(STORAGE_DAILY, ahora);
  renderAlbum();
  alert("¡Has reclamado 2000 monedas diarias!");
}

function bonusTwitter() {
  if (localStorage.getItem(STORAGE_TWITTER)) {
    alert("Ya has reclamado este bonus.");
    return;
  }
  monedas += 10000;
  localStorage.setItem(STORAGE_COINS, monedas);
  localStorage.setItem(STORAGE_TWITTER, "true");
  renderAlbum();
  alert("¡Has reclamado 10000 monedas por Twitter!");
}

function bonusTwitch() {
  if (localStorage.getItem(STORAGE_TWITCH)) {
    alert("Ya has reclamado este bonus.");
    return;
  }
  monedas += 10000;
  localStorage.setItem(STORAGE_COINS, monedas);
  localStorage.setItem(STORAGE_TWITCH, "true");
  renderAlbum();
  alert("¡Has reclamado 10000 monedas por Twitch!");
}

// ====== EVENTOS ======
document.getElementById("btn-open").addEventListener("click", abrirSobre);
document.getElementById("btn-daily").addEventListener("click", reclamarDiarias);
document.getElementById("btn-twitter").addEventListener("click", bonusTwitter);
document.getElementById("btn-twitch").addEventListener("click", bonusTwitch);

// ====== INICIO ======
renderAlbum();


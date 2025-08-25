// === CONFIGURACIÓN DEL ÁLBUM ===

// Reverso de carta
const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

// Array de cartas (24 en total)
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

  // Presidentes/as
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

// === VARIABLES DE JUEGO ===
let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
let album = JSON.parse(localStorage.getItem("album_queens")) || [];

// === ACTUALIZAR PANEL DE MONEDAS ===
function updateMonedas() {
  document.getElementById("monedas-panel").textContent = "Monedas: " + monedas;
  localStorage.setItem("monedas_queens", monedas);
}
updateMonedas();

// === MOSTRAR ÁLBUM ===
function mostrarAlbum() {
  const grid = document.getElementById("album-grid");
  grid.innerHTML = "";

  CARDS.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cromo");

    const img = document.createElement("img");
    if (album.includes(card.id)) {
      img.src = card.imagen;
    } else {
      img.src = REVERSO;
    }
    img.alt = card.nombre;

    const p = document.createElement("p");
    p.textContent = card.nombre;

    cardDiv.appendChild(img);
    cardDiv.appendChild(p);
    grid.appendChild(cardDiv);
  });
}
mostrarAlbum();

// === ABRIR SOBRE (5 CROMOS, COSTE 1000 MONEDAS) ===
function abrirSobre() {
  if (monedas < 1000) {
    alert("No tienes suficientes monedas.");
    return;
  }

  monedas -= 1000;
  updateMonedas();

  let pack = [];
  for (let i = 0; i < 5; i++) {
    const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
    pack.push(randomCard);
    if (!album.includes(randomCard.id)) {
      album.push(randomCard.id);
    }
  }

  localStorage.setItem("album_queens", JSON.stringify(album));
  mostrarAlbum();

  // Mostrar últimas cartas obtenidas
  const packView = document.getElementById("pack-view");
  packView.style.display = "block";
  document.getElementById("album-view").style.display = "none";

  let html = "<h3>¡Has abierto un sobre! 🎁</h3><div class='grid'>";
  pack.forEach(c => {
    html += `<div class="cromo"><img src="${c.imagen}" alt="${c.nombre}"><p>${c.nombre}</p></div>`;
  });
  html += "</div>";
  document.getElementById("last-pack").innerHTML = html;
}

// === EVENTOS DEL MENÚ ===
document.getElementById("btn-open").addEventListener("click", abrirSobre);

document.getElementById("btn-album").addEventListener("click", () => {
  document.getElementById("album-view").style.display = "block";
  document.getElementById("pack-view").style.display = "none";
});

// Reclamar diario (2000 monedas cada 24h)
document.getElementById("btn-daily").addEventListener("click", () => {
  const lastClaim = localStorage.getItem("last_daily");
  const now = Date.now();
  if (!lastClaim || now - lastClaim > 24*60*60*1000) {
    monedas += 2000;
    updateMonedas();
    localStorage.setItem("last_daily", now);
    alert("Has reclamado 2000 monedas diarias 🎉");
  } else {
    alert("Ya has reclamado tus monedas diarias. Vuelve mañana ⏰");
  }
});

// Reclamar Twitch (+10000 monedas una vez)
document.getElementById("btn-twitch").addEventListener("click", () => {
  if (!localStorage.getItem("bonus_twitch")) {
    monedas += 10000;
    updateMonedas();
    localStorage.setItem("bonus_twitch", "true");
    alert("Has reclamado 10000 monedas por seguir en Twitch 🎮");
    window.open("https://twitch.tv/izandhh", "_blank");
  } else {
    alert("Ya reclamaste este bonus.");
  }
});

// Reclamar Twitter (+10000 monedas una vez)
document.getElementById("btn-twitter").addEventListener("click", () => {
  if (!localStorage.getItem("bonus_twitter")) {
    monedas += 10000;
    updateMonedas();
    localStorage.setItem("bonus_twitter", "true");
    alert("Has reclamado 10000 monedas por seguir en X 🐦");
    window.open("https://x.com/izandhh", "_blank");
  } else {
    alert("Ya reclamaste este bonus.");
  }
});


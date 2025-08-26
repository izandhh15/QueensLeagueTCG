document.addEventListener("DOMContentLoaded", () => {
 
 // ===============================
// VARIABLES GLOBALES
// ===============================
let monedas = parseInt(localStorage.getItem("monedas")) || 0;
let album = JSON.parse(localStorage.getItem("album")) || {};
let lastPack = [];

// ===============================
// LISTA DE CARTAS
// ===============================
 const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

  const CARDS = [
    { id:1,nombre:"Escudo 1K",tipo:"escudo",imagen:"https://i.ibb.co/CpJ3c7B8/01-Escudo1-K.png"},
    { id:2,nombre:"Escudo Aniquiladoras FC",tipo:"escudo",imagen:"https://i.ibb.co/N2hVWpqv/02-Escudo-Aniquiladoras.png"},
    { id:3,nombre:"Escudo El Barrio",tipo:"escudo",imagen:"https://i.ibb.co/7JcZNXSQ/03-Escudo-Barrio.png"},
    { id:4,nombre:"Escudo Jijantas FC",tipo:"escudo",imagen:"https://i.ibb.co/d4w5ppfS/04-Escudo-Jijantas.png"},
    { id:5,nombre:"Escudo Kunitas",tipo:"escudo",imagen:"https://i.ibb.co/RMxrmnY/05-Escudo-Kunitas.png"},
    { id:6,nombre:"Escudo Las Troncas FC",tipo:"escudo",imagen:"https://i.ibb.co/TDwwW6Qj/06-Escudo-Las-Troncas.png"},
    { id:7,nombre:"Escudo PIO FC",tipo:"escudo",imagen:"https://i.ibb.co/Fk5XtqqS/07-Escudo-PIO.png"},
    { id:8,nombre:"Escudo Porcinas FC",tipo:"escudo",imagen:"https://i.ibb.co/W4D56C3R/08-Escudo-Porcinas.png"},
    { id:9,nombre:"Escudo Rayo de Barcelona",tipo:"escudo",imagen:"https://i.ibb.co/wr7Q4sVP/09-Escudo-Rayo-De-Barcelona.png"},
    { id:10,nombre:"Escudo Saiyans FC",tipo:"escudo",imagen:"https://i.ibb.co/9kxn2vn9/10-Escudo-Saiyans-FC.png"},
    { id:11,nombre:"Escudo Ultimate Móstoles",tipo:"escudo",imagen:"https://i.ibb.co/zVGgWPTf/11-Escudo-Ultimate-M-stoles.png"},
    { id:12,nombre:"Escudo Xbuyer Team",tipo:"escudo",imagen:"https://i.ibb.co/nM27z99j/12-Escudo-XBuyer-Team.png"},
    { id:37,nombre:"Escudo Atlético Parceras",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:38,nombre:"Escudo Club de Cuervos",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:39,nombre:"Escudo Galácticas del Caribe",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:40,nombre:"Escudo Las Aliens FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:41,nombre:"Escudo Las Chamas FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:42,nombre:"Escudo Las Santas FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:43,nombre:"Escudo Muchachas FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:44,nombre:"Escudo Olimpo United",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:45,nombre:"Escudo Peluche Caligari",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:46,nombre:"Escudo Persas FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:47,nombre:"Escudo Raniza FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:48,nombre:"Escudo Real Titán FC",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:49,nombre:"Escudo Atlético Parceras",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:13,nombre:"Mayichi (1K)",tipo:"presidenta",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:14,nombre:"Ama Blitz (Aniquiladoras FC)",tipo:"presidenta",imagen:"https://i.ibb.co/0p9Js9tm/13-Mayichi.png"},
    { id:15,nombre:"Adri Contreras + Mercedes Roa (El Barrio)",tipo:"presidenta",imagen:"https://i.ibb.co/V01ZjqVb/15-Mercedes-Roa-Adri-Contreras.png"},
    { id:16,nombre:"Gerard Romero + Lis Cid (Jijantas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/tTncqzTb/16-Gerard-Romero-Lis-Cid.png"},
    { id:17,nombre:"Jo Valicenti (Kunitas)",tipo:"presidenta",imagen:"https://i.ibb.co/whpJcVz0/17-Jo-Valicenti.png"},
    { id:18,nombre:"Violeta (Las Troncas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/Kpp37QqZ/18-Violeta.png"},
    { id:19,nombre:"Rivers (PIO FC)",tipo:"presidenta",imagen:"https://i.ibb.co/hRbZNNry/19-Rivers.png"},
    { id:20,nombre:"Gemita (Porcinas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/kgQqHB40/20-Gemita.png"},
    { id:21,nombre:"Spursito (Rayo de Barcelona)",tipo:"presidenta",imagen:"https://i.ibb.co/CpYRPJ7v/21-Spursito.png"},
    { id:22,nombre:"Totakeki (Saiyans FC)",tipo:"presidenta",imagen:"https://i.ibb.co/fYQ41S7r/22-Totakeki.png"},
    { id:23,nombre:"Noe9977 (Ultimate Móstoles)",tipo:"presidenta",imagen:"https://i.ibb.co/G4qQYCTY/23-Noe9977.png"},
    { id:24,nombre:"Javi Buyer + Eric Minibuyer (Xbuyer Team)",tipo:"presidenta",imagen:"https://i.ibb.co/KjRXYVtY/24-Hnos-Buyer.png"},
     { id:50,nombre:"Escudo Atlético Parceras",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:51,nombre:"Escudo Club de Cuervos",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:52,nombre:"Escudo Galácticas del Caribe",tipo:"escudoqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:53,nombre:"Escudo Las Aliens FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:54,nombre:"Escudo Las Chamas FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:55,nombre:"Escudo Las Santas FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:56,nombre:"Escudo Muchachas FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:57,nombre:"Escudo Olimpo United",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:58,nombre:"Escudo Peluche Caligari",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:59,nombre:"Escudo Persas FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:60,nombre:"Escudo Raniza FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:61,nombre:"Escudo Real Titán FC",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:62,nombre:"Escudo Atlético Parceras",tipo:"presisqlame",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:25,nombre:"Ainara Navas",tipo:"supercampeonas",imagen:"https://i.ibb.co/ZRzW9Lx8/25-SUPERCAMPEONAS-Ainara-Navas.png"},
    { id:26,nombre:"Bea Pérez",tipo:"supercampeonas",imagen:"https://i.ibb.co/PswsRSBC/26-SUPERCAMPEONAS-Beatriz-Perez.png"},
    { id:27,nombre:"Alba Ortiz",tipo:"supercampeonas",imagen:"https://i.ibb.co/qMhQgx0f/27-SUPERCAMPEONAS-Alba-Ortiz.png"},
    { id:28,nombre:"Aroney González",tipo:"supercampeonas",imagen:"https://i.ibb.co/0yYfkK9x/28-SUPERCAMPEONAS-Aroney-Gonzalez.png"},
    { id:29,nombre:"Paula Nieto",tipo:"supercampeonas",imagen:"https://i.ibb.co/F4WmsH3C/29-SUPERCAMPEONAS-Paula-Nieto.png"},
    { id:30,nombre:"Blanca Cros",tipo:"supercampeonas",imagen:"https://i.ibb.co/H9Bnsd5/30-SUPERCAMPEONAS-Blanca-Cros.png"},
    { id:31,nombre:"Mar Dalmau",tipo:"supercampeonas",imagen:"https://i.ibb.co/svv4Wrs0/31-SUPERCAMPEONAS-Mar-Dalmau.png"},
    { id:32,nombre:"Zoraida Pichardo",tipo:"supercampeonas",imagen:"https://i.ibb.co/Cs806S8S/32-SUPERCAMPEONAS-Zoraida-Pichardo.png"},
    { id:33,nombre:"Maria Pi",tipo:"supercampeonas",imagen:"https://i.ibb.co/7xWRkBtW/33-SUPERCAMPEONAS-Maria-Pi.png"},
    { id:34,nombre:"Patricia Mascaró",tipo:"supercampeonas",imagen:"https://i.ibb.co/C5g5jLZv/34-SUPERCAMPEONAS-Patricia-Mascar.png"},
    { id:35,nombre:"Berta Velasco",tipo:"supercampeonas",imagen:"https://i.ibb.co/vC7tvZD3/35-SUPERCAMPEONAS-Berta-Velasco.png"},
    { id:36,nombre:"Paula Blas",tipo:"supercampeonas",imagen:"https://i.ibb.co/cKjf90R8/36-SUPERCAMPEONAS-Paula-Blas.png"}
];

// ===============================
// GUARDADO
// ===============================
function guardarDatos() {
  localStorage.setItem("monedas", monedas);
  localStorage.setItem("album", JSON.stringify(album));
}

function actualizarMonedas() {
  document.getElementById("monedas-panel").textContent = `Monedas: ${monedas}`;
}

// ===============================
// ABRIR SOBRES
// ===============================
function abrirSobre() {
  if (monedas < 1000) {
    alert("No tienes suficientes monedas.");
    return;
  }
  monedas -= 1000;
  actualizarMonedas();

  lastPack = [];
  for (let i = 0; i < 5; i++) {
    const c = CARDS[Math.floor(Math.random() * CARDS.length)];
    lastPack.push(c);
    album[c.id] = (album[c.id] || 0) + 1;
  }
  guardarDatos();
  mostrarPack();
}

function mostrarPack() {
  document.getElementById("pack-view").style.display = "block";
  document.getElementById("album-view").style.display = "none";
  document.getElementById("welcome-screen").style.display = "none";

  const packDiv = document.getElementById("last-pack");
  packDiv.innerHTML = "";

  lastPack.forEach(c => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cromo");
    cardDiv.innerHTML = `<img src="${c.imagen}" alt="${c.nombre}">`;
    cardDiv.addEventListener("click", () => showModal(c.imagen));
    packDiv.appendChild(cardDiv);
  });
}

// ===============================
// MOSTRAR ÁLBUM
// ===============================
function mostrarAlbum(filtro="todos") {
  document.getElementById("album-view").style.display = "block";
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("pack-view").style.display = "none";

  const escudos = document.getElementById("escudos-grid");
  const escudosQlame = document.getElementById("escudosqlame");
  const presidentes = document.getElementById("presidentes-grid");
  const presidentesQlame = document.getElementById("presisqlame");
  const superGrid = document.getElementById("super-grid");

  [escudos, escudosQlame, presidentes, presidentesQlame, superGrid].forEach(g => g.innerHTML = "");

  CARDS.forEach(c => {
    if (filtro !== "todos" && c.tipo !== filtro) return;

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cromo");
    cardDiv.innerHTML = `<img src="${c.imagen}" alt="${c.nombre}">`;
    cardDiv.addEventListener("click", () => showModal(c.imagen));

    if (album[c.id] && album[c.id] > 1) {
      const span = document.createElement("span");
      span.textContent = "x" + album[c.id];
      cardDiv.appendChild(span);
    }

    if (c.tipo === "escudo") escudos.appendChild(cardDiv);
    else if (c.tipo === "escudoqlame") escudosQlame.appendChild(cardDiv);
    else if (c.tipo === "presidenta") presidentes.appendChild(cardDiv);
    else if (c.tipo === "presisqlame") presidentesQlame.appendChild(cardDiv);
    else if (c.tipo === "supercampeonas") superGrid.appendChild(cardDiv);
  });
}

// ===============================
// MODAL
// ===============================
function showModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = src;
}
document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// ===============================
// BONUS DIARIO, TWITCH, X
// ===============================
document.getElementById("btn-daily").addEventListener("click", () => {
  let lastClaim = localStorage.getItem("lastDaily");
  let today = new Date().toDateString();

  if (lastClaim === today) {
    alert("Ya reclamaste el bonus diario.");
    return;
  }
  monedas += 2000;
  actualizarMonedas();
  localStorage.setItem("lastDaily", today);
  guardarDatos();
  alert("Reclamaste 2000 monedas de bonus diario!");
});

document.getElementById("btn-twitch").addEventListener("click", () => {
  if (localStorage.getItem("twitchBonus") === "true") {
    alert("Ya reclamaste este bonus.");
    return;
  }
  monedas += 1500;
  actualizarMonedas();
  localStorage.setItem("twitchBonus", "true");
  guardarDatos();
  alert("Reclamaste 1500 monedas de Twitch!");
});

document.getElementById("btn-twitter").addEventListener("click", () => {
  if (localStorage.getItem("twitterBonus") === "true") {
    alert("Ya reclamaste este bonus.");
    return;
  }
  monedas += 1500;
  actualizarMonedas();
  localStorage.setItem("twitterBonus", "true");
  guardarDatos();
  alert("Reclamaste 1500 monedas de X!");
});

// ===============================
// CÓDIGOS
// ===============================
document.getElementById("btn-canjear").addEventListener("click", () => {
  const code = document.getElementById("codigo-input").value.trim();
  if (!code) return;

  if (code === "REGALO5000" && !localStorage.getItem("code5000")) {
    monedas += 5000;
    actualizarMonedas();
    localStorage.setItem("code5000", "true");
    guardarDatos();
    alert("Canjeaste 5000 monedas!");
  } else {
    alert("Código inválido o ya usado.");
  }
});

// ===============================
// BOTONES DE SOBRES Y ÁLBUM
// ===============================
document.getElementById("btn-open").addEventListener("click", abrirSobre);
document.getElementById("btn-album").addEventListener("click", () => mostrarAlbum("todos"));

// ===============================
// FILTROS
// ===============================
document.querySelectorAll(".filtro-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const categoria = btn.getAttribute("data-categoria");
    mostrarAlbum(categoria);
  });
});

// ===============================
// INICIO
// ===============================
actualizarMonedas();

// ==============================
// Álbum Virtual Queens League Oysho
// App principal
// ==============================

// --------- CONFIGURACIÓN Y DATOS ---------
const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";
const CARD_CATEGORIES = [
  { name: "Escudos", filter: c => c.tipo === "escudo" },
  { name: "Escudos QL America", filter: c => c.tipo === "escudoqlame" },
  { name: "Presidentas/es", filter: c => c.tipo === "presidenta" },
  { name: "Presidentas/es QL America", filter: c => c.tipo === "presisqlame" },
  { name: "Supercampeonas", filter: c => c.tipo === "supercampeonas" }
];

// Ejemplo de cartas (añade el resto según tus necesidades)
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

// Códigos creadores
const CODIGOS_CREADORES = `
AroneyGonzalez;10000
MarSerracanta;10000
BertaVelasco;10000
AinaraNavas;10000
BeaPerez;10000
`.trim().split('\n').map(line => {
  const [codigo, monedas] = line.split(';');
  return { codigo: codigo.trim().toLowerCase(), monedas: parseInt(monedas.trim()) };
});

// --------- ELEMENTOS HTML ---------
const monedasPanel = document.getElementById("monedas-panel");
const mainContent = document.getElementById("main-content");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");
const modalInfo = document.getElementById("modal-info");
const userPanel = document.getElementById("user-panel");
const notificacion = document.getElementById("notificacion");

// --------- ESTADO (localStorage) ---------
let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
let album = JSON.parse(localStorage.getItem("album_queens")) || {};
let codigosUsados = JSON.parse(localStorage.getItem("codigos_usados_queens")) || [];

// --------- USUARIO / LOGIN ---------
function getUser() {
  return JSON.parse(localStorage.getItem("album_user")) || null;
}
function setUser(user) {
  localStorage.setItem("album_user", JSON.stringify(user));
  renderUserPanel();
}
function logoutUser() {
  localStorage.removeItem("album_user");
  renderUserPanel();
  renderMenu();
}
// Simulación login Discord/Google
function loginDiscord() {
  const user = {
    name: "DiscordUser",
    avatar: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
    provider: "Discord"
  };
  setUser(user);
  renderMenu();
}
function loginGoogle() {
  const user = {
    name: "GoogleUser",
    avatar: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    provider: "Google"
  };
  setUser(user);
  renderMenu();
}
function renderUserPanel() {
  const user = getUser();
  userPanel.innerHTML = "";
  if (user) {
    userPanel.innerHTML = `
      <img class="avatar" src="${user.avatar}" alt="${user.name}">
      <span>${user.name} (${user.provider})</span>
      <button class="logout-btn" onclick="logoutUser()">Salir</button>
    `;
  } else {
    userPanel.innerHTML = `
      <button class="login-btn" onclick="loginDiscord()">Discord</button>
      <button class="login-btn" onclick="loginGoogle()">Google</button>
    `;
  }
}

// --------- UTILIDADES ---------
function showNotificacion(msg, timeout = 2200) {
  if (!notificacion) return;
  notificacion.textContent = msg;
  notificacion.style.display = "block";
  setTimeout(() => { notificacion.style.display = "none"; }, timeout);
}

// --------- MODAL ---------
modalClose.onclick = () => { modal.style.display = "none"; };
modal.addEventListener("click", e => { if (e.target === modal) modal.style.display="none"; });

// --------- MONEDAS ---------
function updateMonedas() {
  monedasPanel.textContent = "Monedas: " + monedas;
  localStorage.setItem("monedas_queens", monedas);
}

// --------- ÁLBUM ---------
function mostrarAlbum(filtro = null) {
  if (!getUser()) {
    showNotificacion("¡Inicia sesión para ver tu álbum!");
    renderUserPanel();
    return;
  }
  mainContent.innerHTML = "";
  let cardsFiltradas = CARDS.slice().sort((a,b) => a.id - b.id);
  if (filtro) cardsFiltradas = cardsFiltradas.filter(CARD_CATEGORIES.find(cat => cat.name === filtro).filter);

  // Filtros
  const select = document.createElement("select");
  select.className = "filtro-categoria";
  CARD_CATEGORIES.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat.name; opt.textContent = cat.name;
    if (filtro === cat.name) opt.selected = true;
    select.appendChild(opt);
  });
  select.onchange = () => mostrarAlbum(select.value);
  mainContent.appendChild(select);

  // Progreso
  const obtenidas = cardsFiltradas.filter(card => album[card.id]).length;
  const total = cardsFiltradas.length;
  const progreso = document.createElement("p");
  progreso.textContent = `Cartas obtenidas: ${obtenidas} / ${total}`;
  progreso.className = "progreso-album";
  mainContent.appendChild(progreso);

  // Grid de cartas
  const grid = document.createElement("div");
  grid.className = "album-grid";
  cardsFiltradas.forEach(card => {
    const div = document.createElement("div");
    div.className = "cromo";
    // Imagen
    const img = document.createElement("img");
    img.src = album[card.id] ? card.imagen : REVERSO;
    img.alt = card.nombre;
    img.onclick = () => ampliarCromo(card);
    div.appendChild(img);

    // Duplicadas
    if (album[card.id] && album[card.id] > 1) {
      const dup = document.createElement("span");
      dup.className = "duplicadas";
      dup.textContent = album[card.id];
      div.appendChild(dup);

      // Botón vender duplicadas
      const btnVen = document.createElement("button");
      btnVen.className = "btn-vender";
      btnVen.textContent = "Vender";
      btnVen.onclick = (e) => {
        e.stopPropagation();
        venderDuplicadas(card.id);
      };
      div.appendChild(btnVen);
    }
    grid.appendChild(div);
  });
  mainContent.appendChild(grid);
  updateMonedas();
}

// --------- AMPLIAR CROMO ---------
function ampliarCromo(card) {
  modal.style.display = "flex";
  modalImg.src = card.imagen;
  modalImg.alt = card.nombre;
  modalImg.style.border = "6px solid #fff";
  modalImg.style.boxShadow = "0 0 32px #06ccbd88";
  if (album[card.id] && album[card.id] > 1) {
    modalInfo.textContent = `Tienes ${album[card.id]} copias.`;
  } else {
    modalInfo.textContent = "";
  }
}

// --------- VENDER DUPLICADAS ---------
function venderDuplicadas(cardId) {
  if (album[cardId] && album[cardId] > 1) {
    let vendidas = album[cardId] - 1;
    monedas += vendidas * 100;
    album[cardId] = 1;
    localStorage.setItem("album_queens", JSON.stringify(album));
    updateMonedas();
    showNotificacion(`Vendiste ${vendidas} duplicadas y ganaste ${vendidas * 100} monedas`);
    mostrarAlbum(document.querySelector(".filtro-categoria")?.value);
  }
}

// --------- ABRIR SOBRE ---------
function abrirSobre() {
  if (!getUser()) {
    showNotificacion("¡Inicia sesión para abrir sobres!");
    renderUserPanel();
    return;
  }
  if (monedas < 1000) {
    showNotificacion("No tienes suficientes monedas.");
    return;
  }
  monedas -= 1000; updateMonedas();
  mainContent.innerHTML = "<h2>¡Sobre abierto!</h2><div class='sobre-grid'></div>";
  const grid = mainContent.querySelector('.sobre-grid');
  let nuevas = [];
  for (let i = 0; i < 5; i++) {
    const card = CARDS[Math.floor(Math.random() * CARDS.length)];
    nuevas.push(card);
    album[card.id] = (album[card.id]||0)+1;
  }
  localStorage.setItem("album_queens", JSON.stringify(album));
  nuevas.forEach(card => {
    const div = document.createElement("div");
    div.className = "cromo";
    const img = document.createElement("img");
    img.src = card.imagen; img.alt = card.nombre;
    img.onclick = () => ampliarCromo(card);
    div.appendChild(img);
    grid.appendChild(div);
  });
  updateMonedas();
  showNotificacion("¡Has recibido 5 cartas nuevas!");
}

// --------- BONUS DIARIO ---------
function bonusDiario() {
  if (!getUser()) {
    showNotificacion("Inicia sesión para tu bonus diario.");
    renderUserPanel();
    return;
  }
  const last = localStorage.getItem("last_daily"); const now=Date.now();
  if(!last || now-last>24*60*60*1000){
    monedas+=2000; updateMonedas();
    localStorage.setItem("last_daily", now);
    showNotificacion("Has reclamado 2000 monedas diarias 🎉");
  } else {
    showNotificacion("Ya reclamaste hoy ⏰");
  }
}

// --------- CANJEAR CÓDIGO DE CREADOR ---------
function canjearCodigo() {
  if (!getUser()) {
    showNotificacion("Inicia sesión para canjear códigos.");
    renderUserPanel();
    return;
  }
  const input = document.getElementById("input-codigo");
  const val = input.value.trim().toLowerCase();
  if (val) {
    const codigoObj = CODIGOS_CREADORES.find(obj => obj.codigo === val);
    if (codigoObj) {
      if (!codigosUsados.includes(val)) {
        monedas += codigoObj.monedas;
        codigosUsados.push(val);
        updateMonedas();
        localStorage.setItem("codigos_usados_queens", JSON.stringify(codigosUsados));
        showNotificacion(`¡Has recibido ${codigoObj.monedas} monedas por el código!`);
      } else {
        showNotificacion("Código ya usado.");
      }
    } else {
      showNotificacion("Código no válido.");
    }
    input.value = "";
  }
}

// --------- MENÚ PRINCIPAL ---------
function renderMenu() {
  if (!getUser()) {
    mainContent.innerHTML = `
      <div class="menu-principal">
        <h2>¡Bienvenido al Álbum Virtual!</h2>
        <p>Para jugar, primero inicia sesión con Discord o Google.</p>
        <button class="login-btn" onclick="loginDiscord()">Iniciar con Discord</button>
        <button class="login-btn" onclick="loginGoogle()">Iniciar con Google</button>
      </div>
    `;
    return;
  }
  mainContent.innerHTML = `
    <div class="menu-principal">
      <button onclick="mostrarAlbum()">Ver Álbum</button>
      <button onclick="abrirSobre()">Abrir Sobre (1000 monedas)</button>
      <button onclick="bonusDiario()">Bonus Diario</button>
      <input id="input-codigo" type="text" placeholder="Código de creador" style="margin-top:1em;">
      <button onclick="canjearCodigo()">Canjear Código</button>
    </div>
  `;
  updateMonedas();
}

// --------- INICIALIZACIÓN ---------
window.mostrarAlbum = mostrarAlbum;
window.abrirSobre = abrirSobre;
window.bonusDiario = bonusDiario;
window.canjearCodigo = canjearCodigo;
window.renderMenu = renderMenu;
window.loginDiscord = loginDiscord;
window.loginGoogle = loginGoogle;
window.logoutUser = logoutUser;
window.renderUserPanel = renderUserPanel;

// Inicializa la app
document.addEventListener("DOMContentLoaded", () => {
  renderUserPanel();
  renderMenu();
  monedasPanel.onclick = renderMenu;
});

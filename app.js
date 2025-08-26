document.addEventListener("DOMContentLoaded", () => {
  const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

  const CARDS = [
    // ESCUDOS QUEENS LEAGUE SPAIN
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

    // ESCUDOS QUEENS LEAGUE AMERICAS
    { id:37, nombre:"Atlético Parceros", tipo:"escudo", imagen:"URL_ESCUDO_ATLETICO_PARCEROS" },
    { id:38, nombre:"Club de Cuervos", tipo:"escudo", imagen:"URL_ESCUDO_CLUB_DE_CUERVOS" },
    { id:39, nombre:"Galácticas del Caribe", tipo:"escudo", imagen:"URL_ESCUDO_GALACTICAS_DEL_CARIBE" },
    { id:40, nombre:"Las Aliens FC", tipo:"escudo", imagen:"URL_ESCUDO_LAS_ALIENS" },
    { id:41, nombre:"Las Chamas FC", tipo:"escudo", imagen:"URL_ESCUDO_LAS_CHAMAS" },
    { id:42, nombre:"Las Santas FC", tipo:"escudo", imagen:"URL_ESCUDO_LAS_SANTAS" },
    { id:43, nombre:"Muchachas FC", tipo:"escudo", imagen:"URL_ESCUDO_MUCHACHAS" },
    { id:44, nombre:"Olimpo United", tipo:"escudo", imagen:"URL_ESCUDO_OLIMPO_UNITED" },
    { id:45, nombre:"Peluche Caligari", tipo:"escudo", imagen:"URL_ESCUDO_PELUCHE_CALIGARI" },
    { id:46, nombre:"Persas FC", tipo:"escudo", imagen:"URL_ESCUDO_PERSAS" },
    { id:47, nombre:"Raniza FC", tipo:"escudo", imagen:"URL_ESCUDO_RANIZA" },
    { id:48, nombre:"Real Titan FC", tipo:"escudo", imagen:"URL_ESCUDO_REAL_TITAN" },

    // PRESIDENTAS/ES QUEENS LEAGUE SPAIN
    { id:13,nombre:"Mayichi (1K)",tipo:"presidenta",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:14,nombre:"Ama Blitz (Aniquiladoras FC)",tipo:"presidenta",imagen:"https://i.ibb.co/0p9Js9tm/13-Mayichi.png"},
    { id:15,nombre:"Adri Contreras + Mercedes Roa (El Barrio)",tipo:"presidenta",imagen:"https://i.ibb.co/V01ZjqVb/15-Mercedes-Roa-Adri-Contreras.png"},
    { id:16,nombre:"Gerard Romero + Lis Cid (Jijantas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/tTncqzTb/16-Gerard-Romero-Lis-Cid.png"},
    { id:17,nombre:"Jo Valicenti (Kunitas)",tipo:"presidenta",imagen:"https://i.ibb.co/whpJcVz0/17-Jo-Valicenti.png"},
    { id:18,nombre:"Violeta (Las Troncas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/Kpp37QqZ/18-Violeta.png"},
    { id:19,nombre:"Rivers (PIO FC)",tipo:"presidenta",imagen:"https://
    { id:20,nombre:"Gemita (Porcinas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/kgQqHB40/20-Gemita.png"},
    { id:21,nombre:"Spursito (Rayo de Barcelona)",tipo:"presidenta",imagen:"https://i.ibb.co/CpYRPJ7v/21-Spursito.png"},
    { id:22,nombre:"Totakeki (Saiyans FC)",tipo:"presidenta",imagen:"https://i.ibb.co/fYQ41S7r/22-Totakeki.png"},
    { id:23,nombre:"Noe9977 (Ultimate Móstoles)",tipo:"presidenta",imagen:"https://i.ibb.co/G4qQYCTY/23-Noe9977.png"},
    { id:24,nombre:"Javi Buyer + Eric Minibuyer (Xbuyer Team)",tipo:"presidenta",imagen:"https://i.ibb.co/KjRXYVtY/24-Hnos-Buyer.png"},

    // PRESIDENTAS/ES QUEENS LEAGUE AMERICAS
    { id:49, nombre:"La Parce (Atlético Parceros)", tipo:"presidenta", imagen:"URL_PRESI_LA_PARCE" },
    { id:50, nombre:"Natalia MX + PipePunk (Club de Cuervos)", tipo:"presidenta", imagen:"URL_PRESI_NATALIA_PIPEPUNK" },
    { id:51, nombre:"Isa Rockets + Los Futbolitos (Galácticas del Caribe)", tipo:"presidenta", imagen:"URL_PRESI_ISA_FUTBOLITOS" },
    { id:52, nombre:"Pitaa1021 + Castro1021 (Las Aliens FC)", tipo:"presidenta", imagen:"URL_PRESI_PITAA_CASTRO" },
    { id:53, nombre:"Deyna Castellanos + Sonia López (Las Chamas FC)", tipo:"presidenta", imagen:"URL_PRESI_DEYNA_SONIA" },
    { id:54, nombre:"Lluna Clark (Las Santas FC)", tipo:"presidenta", imagen:"URL_PRESI_LLUNA" },
    { id:55, nombre:"Jose de Cabo + Jero Freixas (Muchachas FC)", tipo:"presidenta", imagen:"URL_PRESI_JOSE_JERO" },
    { id:56, nombre:"Espe (Olimpo United)", tipo:"presidenta", imagen:"URL_PRESI_ESPE" },
    { id:57, nombre:"Ara + Fer (Peluche Caligari)", tipo:"presidenta", imagen:"URL_PRESI_ARA_FER" },
    { id:58, nombre:"Pame Verdirame + Crystal Molly (Persas FC)", tipo:"presidenta", imagen:"URL_PRESI_PAME_CRYSTAL" },
    { id:59, nombre:"Alana + BarcaGamer (Raniza FC)", tipo:"presidenta", imagen:"URL_PRESI_ALANA_BARGA" },
    { id:60, nombre:"Vicky Palami (Real Titan FC)", tipo:"presidenta", imagen:"URL_PRESI_VICKY" },

    // SUPERCAMPEONAS
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

  /* ==============================
   VARIABLES PRINCIPALES
============================== */

// Monedas y colección
let monedas = 0;
let coleccion = {};   // { categoria: { idCarta: cantidad } }
let totalCartas = 0;  // cuántas cartas existen en total
let obtenidas = 0;    // cuántas únicas tienes

// Configuración de sobres
const PRECIO_SOBRE = 1000;
const CARTAS_POR_SOBRE = 5;
const VALOR_DUPLICADA = 100;

// Datos del álbum
const albumData = [
    // ESCUDOS QUEENS LEAGUE SPAIN
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

    // ESCUDOS QUEENS LEAGUE AMERICAS
    { id:37, nombre:"Atlético Parceros", tipo:"escudo", imagen:"URL_ESCUDO_ATLETICO_PARCEROS" },
    { id:38, nombre:"Club de Cuervos", tipo:"escudo", imagen:"URL_ESCUDO_CLUB_DE_CUERVOS" },
    { id:39, nombre:"Galácticas del Caribe", tipo:"escudo", imagen:"URL_ESCUDO_GALACTICAS_DEL_CARIBE" },
    { id:40, nombre:"Las Aliens FC", tipo:"escudo", imagen:"URL_ESCUDO_LAS_ALIENS" },
    { id:41, nombre:"Las Chamas FC", tipo:"escudo", imagen:"URL_ESCUDO_LAS_CHAMAS" },
    { id:42, nombre:"Las Santas FC", tipo:"escudo", imagen:"URL_ESCUDO_LAS_SANTAS" },
    { id:43, nombre:"Muchachas FC", tipo:"escudo", imagen:"URL_ESCUDO_MUCHACHAS" },
    { id:44, nombre:"Olimpo United", tipo:"escudo", imagen:"URL_ESCUDO_OLIMPO_UNITED" },
    { id:45, nombre:"Peluche Caligari", tipo:"escudo", imagen:"URL_ESCUDO_PELUCHE_CALIGARI" },
    { id:46, nombre:"Persas FC", tipo:"escudo", imagen:"URL_ESCUDO_PERSAS" },
    { id:47, nombre:"Raniza FC", tipo:"escudo", imagen:"URL_ESCUDO_RANIZA" },
    { id:48, nombre:"Real Titan FC", tipo:"escudo", imagen:"URL_ESCUDO_REAL_TITAN" },

    // PRESIDENTAS/ES QUEENS LEAGUE SPAIN
    { id:13,nombre:"Mayichi (1K)",tipo:"presidenta",imagen:"https://i.ibb.co/MDN445S2/14-Amablitz.png"},
    { id:14,nombre:"Ama Blitz (Aniquiladoras FC)",tipo:"presidenta",imagen:"https://i.ibb.co/0p9Js9tm/13-Mayichi.png"},
    { id:15,nombre:"Adri Contreras + Mercedes Roa (El Barrio)",tipo:"presidenta",imagen:"https://i.ibb.co/V01ZjqVb/15-Mercedes-Roa-Adri-Contreras.png"},
    { id:16,nombre:"Gerard Romero + Lis Cid (Jijantas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/tTncqzTb/16-Gerard-Romero-Lis-Cid.png"},
    { id:17,nombre:"Jo Valicenti (Kunitas)",tipo:"presidenta",imagen:"https://i.ibb.co/whpJcVz0/17-Jo-Valicenti.png"},
    { id:18,nombre:"Violeta (Las Troncas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/Kpp37QqZ/18-Violeta.png"},
    { id:19,nombre:"Rivers (PIO FC)",tipo:"presidenta",imagen:"https://
    { id:20,nombre:"Gemita (Porcinas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/kgQqHB40/20-Gemita.png"},
    { id:21,nombre:"Spursito (Rayo de Barcelona)",tipo:"presidenta",imagen:"https://i.ibb.co/CpYRPJ7v/21-Spursito.png"},
    { id:22,nombre:"Totakeki (Saiyans FC)",tipo:"presidenta",imagen:"https://i.ibb.co/fYQ41S7r/22-Totakeki.png"},
    { id:23,nombre:"Noe9977 (Ultimate Móstoles)",tipo:"presidenta",imagen:"https://i.ibb.co/G4qQYCTY/23-Noe9977.png"},
    { id:24,nombre:"Javi Buyer + Eric Minibuyer (Xbuyer Team)",tipo:"presidenta",imagen:"https://i.ibb.co/KjRXYVtY/24-Hnos-Buyer.png"},

    // PRESIDENTAS/ES QUEENS LEAGUE AMERICAS
    { id:49, nombre:"La Parce (Atlético Parceros)", tipo:"presidenta", imagen:"URL_PRESI_LA_PARCE" },
    { id:50, nombre:"Natalia MX + PipePunk (Club de Cuervos)", tipo:"presidenta", imagen:"URL_PRESI_NATALIA_PIPEPUNK" },
    { id:51, nombre:"Isa Rockets + Los Futbolitos (Galácticas del Caribe)", tipo:"presidenta", imagen:"URL_PRESI_ISA_FUTBOLITOS" },
    { id:52, nombre:"Pitaa1021 + Castro1021 (Las Aliens FC)", tipo:"presidenta", imagen:"URL_PRESI_PITAA_CASTRO" },
    { id:53, nombre:"Deyna Castellanos + Sonia López (Las Chamas FC)", tipo:"presidenta", imagen:"URL_PRESI_DEYNA_SONIA" },
    { id:54, nombre:"Lluna Clark (Las Santas FC)", tipo:"presidenta", imagen:"URL_PRESI_LLUNA" },
    { id:55, nombre:"Jose de Cabo + Jero Freixas (Muchachas FC)", tipo:"presidenta", imagen:"URL_PRESI_JOSE_JERO" },
    { id:56, nombre:"Espe (Olimpo United)", tipo:"presidenta", imagen:"URL_PRESI_ESPE" },
    { id:57, nombre:"Ara + Fer (Peluche Caligari)", tipo:"presidenta", imagen:"URL_PRESI_ARA_FER" },
    { id:58, nombre:"Pame Verdirame + Crystal Molly (Persas FC)", tipo:"presidenta", imagen:"URL_PRESI_PAME_CRYSTAL" },
    { id:59, nombre:"Alana + BarcaGamer (Raniza FC)", tipo:"presidenta", imagen:"URL_PRESI_ALANA_BARGA" },
    { id:60, nombre:"Vicky Palami (Real Titan FC)", tipo:"presidenta", imagen:"URL_PRESI_VICKY" },

    // SUPERCAMPEONAS
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

// Calcular total de cartas disponibles
for (let categoria in albumData) {
  totalCartas += albumData[categoria].length;
}

/* ==============================
   ELEMENTOS DEL DOM
============================== */
const monedasPanel = document.getElementById("monedas-panel");
const btnOpen = document.getElementById("btn-open");
const btnAlbum = document.getElementById("btn-album");
const btnDaily = document.getElementById("btn-daily");
const btnTwitch = document.getElementById("btn-twitch");
const btnTwitter = document.getElementById("btn-twitter");
const btnCanjear = document.getElementById("btn-canjear");

const packView = document.getElementById("pack-view");
const lastPack = document.getElementById("last-pack");
const albumView = document.getElementById("album-view");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");

/* ==============================
   FUNCIONES BÁSICAS
============================== */

// Actualiza el contador de monedas y progreso
function actualizarUI() {
  monedasPanel.textContent = `Monedas: ${monedas}`;
  const contador = document.getElementById("contador-coleccion");
  if (contador) {
    contador.textContent = `${obtenidas}/${totalCartas}`;
  }
}

// Guardar progreso en localStorage
function guardarProgreso() {
  localStorage.setItem("monedas", monedas);
  localStorage.setItem("coleccion", JSON.stringify(coleccion));
  localStorage.setItem("obtenidas", obtenidas);
}

// Cargar progreso al inicio
function cargarProgreso() {
  monedas = parseInt(localStorage.getItem("monedas")) || 0;
  coleccion = JSON.parse(localStorage.getItem("coleccion")) || {};
  obtenidas = parseInt(localStorage.getItem("obtenidas")) || 0;
  actualizarUI();
}

/* ==============================
   SOBRES Y CARTAS
============================== */

// Elegir cartas aleatorias
function abrirSobre() {
  if (monedas < PRECIO_SOBRE) {
    alert("No tienes suficientes monedas.");
    return;
  }
  monedas -= PRECIO_SOBRE;

  lastPack.innerHTML = "";
  packView.style.display = "block";
  albumView.style.display = "none";

  for (let i = 0; i < CARTAS_POR_SOBRE; i++) {
    const carta = obtenerCartaAleatoria();
    mostrarCartaEnPack(carta);
    agregarCartaAColeccion(carta);
  }

  actualizarUI();
  guardarProgreso();
}

// Obtener carta aleatoria de cualquier categoría
function obtenerCartaAleatoria() {
  const categorias = Object.keys(albumData);
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];
  const cartas = albumData[categoria];
  const carta = cartas[Math.floor(Math.random() * cartas.length)];
  return { ...carta, categoria };
}

// Mostrar carta en el pack
function mostrarCartaEnPack(carta) {
  const img = document.createElement("img");
  img.src = carta.img;
  img.alt = carta.nombre;
  img.addEventListener("click", () => abrirModal(carta.img));
  lastPack.appendChild(img);
}

// Agregar carta a la colección (y duplicadas si ya la tienes)
function agregarCartaAColeccion(carta) {
  if (!coleccion[carta.categoria]) {
    coleccion[carta.categoria] = {};
  }
  if (!coleccion[carta.categoria][carta.id]) {
    coleccion[carta.categoria][carta.id] = 0;
    obtenidas++;
  }
  coleccion[carta.categoria][carta.id]++;
}

/* ==============================
   ÁLBUM
============================== */

function verAlbum() {
  packView.style.display = "none";
  albumView.style.display = "block";
  albumView.innerHTML = "";

  // Contador y botón duplicadas
  const barra = document.createElement("div");
  barra.style.textAlign = "center";
  barra.innerHTML = `
    <h3 id="contador-coleccion">${obtenidas}/${totalCartas}</h3>
    <button id="btn-vender">💰 Vender duplicadas</button>
  `;
  albumView.appendChild(barra);

  for (let categoria in albumData) {
    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    albumView.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "grid";

    albumData[categoria].forEach(carta => {
      const cont = document.createElement("div");
      cont.style.position = "relative";

      const img = document.createElement("img");
      img.src = carta.img;
      img.alt = carta.nombre;
      img.addEventListener("click", () => abrirModal(carta.img));

      cont.appendChild(img);

      // Mostrar número de copias
      const cantidad = coleccion[categoria] && coleccion[categoria][carta.id] 
        ? coleccion[categoria][carta.id] 
        : 0;

      if (cantidad > 0) {
        const label = document.createElement("span");
        label.textContent = `x${cantidad}`;
        label.style.position = "absolute";
        label.style.bottom = "5px";
        label.style.right = "8px";
        label.style.background = "rgba(0,0,0,0.6)";
        label.style.color = "white";
        label.style.fontSize = "12px";
        label.style.padding = "2px 5px";
        label.style.borderRadius = "6px";
        cont.appendChild(label);
      }

      grid.appendChild(cont);
    });

    albumView.appendChild(grid);
  }

  // Evento vender duplicadas
  document.getElementById("btn-vender").addEventListener("click", venderDuplicadas);

  actualizarUI();
}
/* ==============================
   VENDER DUPLICADAS
============================== */
function venderDuplicadas() {
  let totalVendidas = 0;

  for (let categoria in coleccion) {
    for (let id in coleccion[categoria]) {
      if (coleccion[categoria][id] > 1) {
        const extra = coleccion[categoria][id] - 1;
        totalVendidas += extra;
        coleccion[categoria][id] = 1; // solo dejamos 1
      }
    }
  }

  if (totalVendidas > 0) {
    const ganancia = totalVendidas * VALOR_DUPLICADA;
    monedas += ganancia;
    alert(`Vendiste ${totalVendidas} duplicadas y ganaste ${ganancia} monedas.`);
    guardarProgreso();
    verAlbum(); // refrescar álbum
  } else {
    alert("No tienes duplicadas para vender.");
  }
}

/* ==============================
   MODAL
============================== */
function abrirModal(imgSrc) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
  modalImg.style.border = "5px solid white";
}
modalClose.onclick = () => (modal.style.display = "none");
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

/* ==============================
   RECOMPENSAS
============================== */
btnDaily.addEventListener("click", () => {
  monedas += 2000;
  alert("¡Has reclamado tu recompensa diaria (+2000)!");
  actualizarUI();
  guardarProgreso();
});

btnTwitch.addEventListener("click", () => {
  monedas += 10000;
  alert("¡Has reclamado recompensa Twitch (+10000)!");
  actualizarUI();
  guardarProgreso();
});

btnTwitter.addEventListener("click", () => {
  monedas += 10000;
  alert("¡Has reclamado recompensa X/Twitter (+10000)!");
  actualizarUI();
  guardarProgreso();
});

/* ==============================
   CÓDIGOS
============================== */
const codigosValidos = {
  "IZANDHH": 5000,
  "QUEENS2025": 10000,
  "SUPERCAMPEONAS": 15000
};

btnCanjear.addEventListener("click", () => {
  const input = document.getElementById("codigo-input");
  const codigo = input.value.trim().toUpperCase();

  if (codigosValidos[codigo]) {
    monedas += codigosValidos[codigo];
    alert(`¡Código válido! Has recibido ${codigosValidos[codigo]} monedas.`);
    delete codigosValidos[codigo]; // se usa una sola vez
    input.value = "";
    actualizarUI();
    guardarProgreso();
  } else {
    alert("Código inválido o ya canjeado.");
  }
});

/* ==============================
   EVENTOS PRINCIPALES
============================== */
btnOpen.addEventListener("click", abrirSobre);
btnAlbum.addEventListener("click", verAlbum);

/* ==============================
   INICIO
============================== */
cargarProgreso();
actualizarUI();


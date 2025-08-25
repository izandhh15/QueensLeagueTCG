// Configuración
const STORAGE_KEY = "album_cromos_queens";
const STORAGE_COINS = "monedas_queens";

const TAM_SOBRE = 5;
const COSTE_SOBRE = 1000;

// Inicialización monedas
let monedas = parseInt(localStorage.getItem(STORAGE_COINS)) || 5000;

// Lista de cartas (ejemplo primeras 24, puedes añadir más)
const CARDS = [
  { id:1, nombre:"Escudo 1K", tipo:"escudo", imagen:"https://i.ibb.co/placeholder1/1k_escudo.png" },
  { id:2, nombre:"Escudo Aniquiladoras FC", tipo:"escudo", imagen:"https://i.ibb.co/placeholder2/aniquiladoras.png" },
  { id:3, nombre:"Escudo El Barrio", tipo:"escudo", imagen:"https://i.ibb.co/placeholder3/el_barrio.png" },
  { id:4, nombre:"Escudo Jijantas FC", tipo:"escudo", imagen:"https://i.ibb.co/placeholder4/jijantas.png" },
  { id:5, nombre:"Escudo Kunitas", tipo:"escudo", imagen:"https://i.ibb.co/placeholder5/kunitas.png" },
  { id:6, nombre:"Escudo Las Troncas FC", tipo:"escudo", imagen:"https://i.ibb.co/placeholder6/troncas.png" },
  { id:7, nombre:"Escudo PIO FC", tipo:"escudo", imagen:"https://i.ibb.co/placeholder7/pio.png" },
  { id:8, nombre:"Escudo Porcinas FC", tipo:"escudo", imagen:"https://i.ibb.co/placeholder8/porcinas.png" },
  { id:9, nombre:"Escudo Rayo de Barcelona", tipo:"escudo", imagen:"https://i.ibb.co/placeholder9/rayo.png" },
  { id:10, nombre:"Escudo Saiyans FC", tipo:"escudo", imagen:"https://i.ibb.co/placeholder10/saiyans.png" },
  { id:11, nombre:"Escudo Ultimate Móstoles", tipo:"escudo", imagen:"https://i.ibb.co/placeholder11/mostoles.png" },
  { id:12, nombre:"Escudo Xbuyer Team", tipo:"escudo", imagen:"https://i.ibb.co/placeholder12/xbuyer.png" },

  { id:13, nombre:"Mayichi (Presidenta 1K)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder13/mayichi.png" },
  { id:14, nombre:"Ama Blitz (Aniquiladoras)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder14/ama-blitz.png" },
  { id:15, nombre:"Adri Contreras + Mercedes Roa (El Barrio)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder15/adri-mercedes.png" },
  { id:16, nombre:"Gerard Romero + Lis Cid (Jijantas)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder16/gerard-lis.png" },
  { id:17, nombre:"Jo Valicenti (Kunitas)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder17/jo-valicenti.png" },
  { id:18, nombre:"Violeta + Perxitaa (Las Troncas)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder18/violeta-perxitaa.png" },
  { id:19, nombre:"Rivers (PIO FC)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder19/rivers.png" },
  { id:20, nombre:"Gemita (Porcinas FC)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder20/gemita.png" },
  { id:21, nombre:"Spursito (Rayo de Barcelona)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder21/spursito.png" },
  { id:22, nombre:"Totakeki (Saiyans FC)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder22/totakeki.png" },
  { id:23, nombre:"Noe9977 (Ultimate Móstoles)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder23/noe9977.png" },
  { id:24, nombre:"Javi Buyer + Eric Minibuyer (Xbuyer)", tipo:"presidenta", imagen:"https://i.ibb.co/placeholder24/xbuyer-duo.png" }
];

// Estado del álbum
let coleccion = JSON.parse(localStorage.getItem(STORAGE_KEY)) || Array(CARDS.length).fill(false);

// Renderizar álbum
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

  const coinsPanel = document.getElementById("monedas-panel");
  coinsPanel.textContent = "Monedas: " + monedas;

  const lastPack = document.getElementById("last-pack");
  if (conseguidos === CARDS.length) lastPack.textContent = "¡Álbum completado!";
}

// Abrir sobre
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

// Conectar botón
document.getElementById("btn-open").addEventListener("click", abrirSobre);

// Render inicial
renderAlbum();

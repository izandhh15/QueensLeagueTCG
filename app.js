document.addEventListener("DOMContentLoaded", () => {
 
 // ===============================
// VARIABLES GLOBALES
// ===============================
let monedas = parseInt(localStorage.getItem("monedas")) || 0;
let album = JSON.parse(localStorage.getItem("album")) || {};
let lastPack = [];

// CARTAS

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

  // Monedas y álbum
  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || {};

  // Elementos del DOM
  const monedasPanel = document.getElementById("monedas-panel");
  const welcome = document.getElementById("welcome-screen");
  const packView = document.getElementById("pack-view");
  const albumView = document.getElementById("album-view");
  const escudosGrid = document.getElementById("escudos-grid");
  const escudosQlame = document.getElementById("escudosqlame");
  const presidentesGrid = document.getElementById("presidentes-grid");
  const presidentesQlame = document.getElementById("presisqlame");
  const superGrid = document.getElementById("super-grid");
  const lastPack = document.getElementById("last-pack");

  // Modal
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");
  modalClose.onclick = () => { modal.style.display = "none"; };
  modal.addEventListener("click", e => { if(e.target===modal) modal.style.display="none"; });

  // Actualizar monedas
  function updateMonedas() {
      monedasPanel.textContent = "Monedas: " + monedas;
      localStorage.setItem("monedas_queens", monedas);
  }
  updateMonedas();

  // Ocultar pantalla de bienvenida
  function hideWelcome() { welcome.style.display = "none"; }

  // Función para mostrar modal de carta
  function showModal(src){
      modal.style.display="flex";
      modalImg.src=src;
  }

  // Mostrar Álbum (inicio)
  function mostrarAlbum(filtro="todos"){
      hideWelcome();
      packView.style.display="none";
      albumView.style.display="block";

      // Limpiar grids
      [escudosGrid, escudosQlame, presidentesGrid, presidentesQlame, superGrid].forEach(g=>g.innerHTML="");

      // Menú de filtros dentro del álbum
      const filtroCont = document.getElementById("filtro-cont");
      filtroCont.innerHTML = `
          <button class="filtro-btn" data-categoria="todos">Todos</button>
          <button class="filtro-btn" data-categoria="escudo">Escudos</button>
          <button class="filtro-btn" data-categoria="escudoqlame">EscudosQlame</button>
          <button class="filtro-btn" data-categoria="presidenta">Presidentas/es</button>
          <button class="filtro-btn" data-categoria="presisqlame">PresisQlame</button>
          <button class="filtro-btn" data-categoria="supercampeonas">Supercampeonas</button>
      `;
      document.querySelectorAll("#filtro-cont .filtro-btn").forEach(btn=>{
          btn.addEventListener("click",()=>{
              mostrarAlbum(btn.getAttribute("data-categoria"));
          });
      });

      // Contador de álbum
      const albumCont = document.getElementById("album-contador");
      const obtenidas = Object.keys(album).length;
      albumCont.textContent = `Cartas obtenidas: ${obtenidas}/${CARDS.length}`;
  }
  // Vender duplicadas
  function venderDuplicadas() {
      let ganancia = 0;
      for(const key in album){
          if(album[key] > 1){
              ganancia += (album[key]-1) * 100;
              album[key] = 1;
          }
      }
      if(ganancia > 0){
          monedas += ganancia;
          updateMonedas();
          localStorage.setItem("album_queens", JSON.stringify(album));
          mostrarAlbum();
          alert(`Has vendido duplicadas y recibido ${ganancia} monedas.`);
      } else alert("No tienes duplicadas para vender.");
  }

  // Abrir sobre
  function abrirSobre() {
      if(monedas < 1000){ alert("No tienes suficientes monedas."); return; }
      hideWelcome();
      monedas -= 1000;
      updateMonedas();

      packView.style.display = "block";
      albumView.style.display = "none";
      lastPack.innerHTML = "<h3>¡Has abierto un sobre! 🎁</h3><div class='grid'></div>";
      const grid = lastPack.querySelector(".grid");

      for(let i=0; i<5; i++){
          const c = CARDS[Math.floor(Math.random()*CARDS.length)];
          const div = document.createElement("div");
          div.classList.add("cromo");
          const img = document.createElement("img");
          img.src = c.imagen;
          img.alt = c.nombre;
          img.addEventListener("click",()=>showModal(c.imagen));
          div.appendChild(img);
          grid.appendChild(div);

          album[c.id] = (album[c.id] || 0) + 1;
      }
      localStorage.setItem("album_queens", JSON.stringify(album));
  }

  // Botones principales
  document.getElementById("btn-open").addEventListener("click", abrirSobre);
  document.getElementById("btn-album").addEventListener("click", ()=>mostrarAlbum());
  
  // Botón diario
  document.getElementById("btn-daily").addEventListener("click", ()=>{
      const last = localStorage.getItem("last_daily");
      const now = Date.now();
      if(!last || now - last > 24*60*60*1000){
          monedas += 2000;
          updateMonedas();
          localStorage.setItem("last_daily", now);
          alert("Has reclamado 2000 monedas diarias 🎉");
      } else alert("Ya reclamaste hoy ⏰");
  });

  // Bonus Twitch
  document.getElementById("btn-twitch").addEventListener("click", ()=>{
      if(!localStorage.getItem("bonus_twitch")){
          monedas += 10000;
          updateMonedas();
          localStorage.setItem("bonus_twitch","true");
          alert("Has reclamado 10000 monedas por Twitch 🎮");
          window.open("https://twitch.tv/izandhh","_blank");
      } else alert("Ya reclamaste este bonus.");
  });

  // Bonus X / Twitter
  document.getElementById("btn-twitter").addEventListener("click", ()=>{
      if(!localStorage.getItem("bonus_twitter")){
          monedas += 10000;
          updateMonedas();
          localStorage.setItem("bonus_twitter","true");
          alert("Has reclamado 10000 monedas por X 🐦");
          window.open("https://x.com/izandhh","_blank");
      } else alert("Ya reclamaste este bonus.");
  });

  // Canjeo de códigos
  const CODIGOS = {
      "AroneyGonzalez":10000,
      "MarSerracanta":10000,
      "ElenaBenitez":10000,
      "MenendezFaya":10000,
      "AndreaChini":10000,
      "ElTronoKL":10000,
      "UniversoKings":10000,
      "SRonzero":10000,
      "ZonaRayo":10000,
      "Porcinismoo":10000,
      "NarcisBoza":10000,
      "NikolRamos":10000,
      "ZonaMostoles":10000,
      "CZXR":10000
  };

  document.getElementById("btn-canjear").addEventListener("click", ()=>{
      const input = document.getElementById("codigo-input");
      const codigo = input.value.trim();
      if(!codigo) return alert("Introduce un código válido.");

      const usado = JSON.parse(localStorage.getItem("codigos_usados") || "[]");
      if(usado.includes(codigo)){
          alert("Este código ya fue canjeado ❌");
          return;
      }

      if(CODIGOS[codigo]){
          monedas += CODIGOS[codigo];
          updateMonedas();
          usado.push(codigo);
          localStorage.setItem("codigos_usados", JSON.stringify(usado));
          alert(`¡Código válido! Has recibido ${CODIGOS[codigo]} monedas 🎉`);
          input.value = "";
      } else alert("Código incorrecto ❌");
  });

});

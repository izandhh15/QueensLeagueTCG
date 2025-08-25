document.addEventListener("DOMContentLoaded", () => {

  // === CONFIGURACIÓN ===
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
    { id:24,nombre:"Javi Buyer + Eric Minibuyer (Xbuyer Team)",tipo:"presidenta",imagen:"https://i.ibb.co/KjRXYVtY/24-Hnos-Buyer.png"}
  ];

  // === VARIABLES ===
  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || [];

  const welcomeScreen = document.getElementById("welcome-screen");
  const mainApp = document.getElementById("main-app");

  // === ACTUALIZAR MONEDAS ===
  function updateMonedas() {
    document.getElementById("monedas-panel").textContent = "Monedas: " + monedas;
    localStorage.setItem("monedas_queens", monedas);
  }
  updateMonedas();

  // === MOSTRAR ALBUM ===
  function mostrarAlbum() {
    welcomeScreen.style.display = "none";
    mainApp.style.display = "block";

    const escudosGrid = document.getElementById("escudos-grid");
    const presidentesGrid = document.getElementById("presidentes-grid");

    escudosGrid.innerHTML = "";
    presidentesGrid.innerHTML = "";

    CARDS.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("cromo");
      const img = document.createElement("img");
      img.src = album.includes(card.id) ? card.imagen : REVERSO;
      img.alt = card.nombre;
      div.appendChild(img);

      div.addEventListener("click", () => {
        showModal(card.imagen);
      });

      if(card.tipo === "escudo") escudosGrid.appendChild(div);
      else presidentesGrid.appendChild(div);
    });
  }

  // === ABRIR SOBRE ===
  function abrirSobre() {
    if(monedas < 1000){ alert("No tienes suficientes monedas."); return; }
    monedas -= 1000; updateMonedas();
    welcomeScreen.style.display = "none";
    mainApp.style.display = "block";

    let pack = [];
    for(let i=0;i<5;i++){
      const c = CARDS[Math.floor(Math.random()*CARDS.length)];
      pack.push(c);
      if(!album.includes(c.id)) album.push(c.id);
    }
    localStorage.setItem("album_queens", JSON.stringify(album));

    const lastPackDiv = document.getElementById("last-pack");
    lastPackDiv.innerHTML = "";
    pack.forEach(c => {
      const div = document.createElement("div");
      div.classList.add("cromo");
      const img = document.createElement("img");
      img.src = c.imagen;
      img.alt = c.nombre;
      div.appendChild(img);
      div.addEventListener("click", () => { showModal(c.imagen); });
      lastPackDiv.appendChild(div);
    });

    document.getElementById("album-view").style.display = "none";
    document.getElementById("pack-view").style.display = "flex";
  }

  // === RECLAMAR DIARIO ===
  document.getElementById("btn-daily").addEventListener("click", ()=>{
    const last = localStorage.getItem("last_daily");
    const now = Date.now();
    if(!last || now - last > 24*60*60*1000){
      monedas += 2000;
      updateMonedas();
      localStorage.setItem("last_daily", now);
      alert("Has reclamado 2000 monedas diarias 🎉");
    }else alert("Ya reclamaste hoy ⏰");
  });

  // === RECLAMAR TWITCH/X ===
  document.getElementById("btn-twitch").addEventListener("click", ()=>{
    if(!localStorage.getItem("bonus_twitch")){
      monedas += 10000; updateMonedas();
      localStorage.setItem("bonus_twitch","true");
      alert("Has reclamado 10000 monedas por Twitch 🎮");
      window.open("https://twitch.tv/izandhh","_blank");
    }else alert("Ya reclamaste este bonus.");
  });

  document.getElementById("btn-twitter").addEventListener("click", ()=>{
    if(!localStorage.getItem("bonus_twitter")){
      monedas += 10000; updateMonedas();
      localStorage.setItem("bonus_twitter","true");
      alert("Has reclamado 10000 monedas por X 🐦");
      window.open("https://x.com/izandhh","_blank");
    }else alert("Ya reclamaste este bonus.");
  });

  // === BOTONES MENU ===
  document.getElementById("btn-open").addEventListener("click", abrirSobre);
  document.getElementById("btn-album").addEventListener("click", mostrarAlbum);

  // === PANEL DE CÓDIGOS ===
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
      alert("Este código ya fue canjeado ❌"); return;
    }

    if(CODIGOS[codigo]){
      monedas += CODIGOS[codigo]; updateMonedas();
      usado.push(codigo);
      localStorage.setItem("codigos_usados", JSON.stringify(usado));
      alert(`¡Código válido! Has recibido ${CODIGOS[codigo]} monedas 🎉`);
      input.value = "";
    }else alert("Código incorrecto ❌");
  });

  // === MODAL CARTA ===
  const modal = document.getElementById("modal-cromo");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");

  function showModal(src){
    modal.style.display = "block";
    modalImg.src = src;
  }

  modalClose.onclick = function(){ modal.style.display = "none"; }
  modal.onclick = function(e){ if(e.target === modal) modal.style.display = "none"; }

});


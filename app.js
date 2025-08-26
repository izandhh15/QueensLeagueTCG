document.addEventListener("DOMContentLoaded", () => {
  const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

  // Estructura base para cartas: permite agregar fácilmente categorías y cartas nuevas
  const CATEGORIES = {
    "escudosSpain": [
      { id: 1, nombre: "Escudo 1K", imagen: "https://i.ibb.co/CpJ3c7B8/01-Escudo1-K.png" },
      { id: 2, nombre: "Escudo Aniquiladoras FC", imagen: "https://i.ibb.co/N2hVWpqv/02-Escudo-Aniquiladoras.png" },
      { id: 3, nombre: "Escudo El Barrio", imagen: "https://i.ibb.co/7JcZNXSQ/03-Escudo-Barrio.png" },
      { id: 4, nombre: "Escudo Jijantas FC", imagen: "https://i.ibb.co/d4w5ppfS/04-Escudo-Jijantas.png" },
      { id: 5, nombre: "Escudo Kunitas", imagen: "https://i.ibb.co/RMxrmnY/05-Escudo-Kunitas.png" },
      { id: 6, nombre: "Escudo Las Troncas FC", imagen: "https://i.ibb.co/TDwwW6Qj/06-Escudo-Las-Troncas.png" },
      { id: 7, nombre: "Escudo PIO FC", imagen: "https://i.ibb.co/Fk5XtqqS/07-Escudo-PIO.png" },
      { id: 8, nombre: "Escudo Porcinas FC", imagen: "https://i.ibb.co/W4D56C3R/08-Escudo-Porcinas.png" },
      { id: 9, nombre: "Escudo Rayo de Barcelona", imagen: "https://i.ibb.co/wr7Q4sVP/09-Escudo-Rayo-De-Barcelona.png" },
      { id: 10, nombre: "Escudo Saiyans FC", imagen: "https://i.ibb.co/9kxn2vn9/10-Escudo-Saiyans-FC.png" }
    ],
    "escudosAmericas": [
      { id: 37, nombre: "Atlético Parceros", imagen: "URL_ESCUDO_ATLETICO_PARCEROS" },
      { id: 38, nombre: "Club de Cuervos", imagen: "URL_ESCUDO_CLUB_DE_CUERVOS" },
      { id: 39, nombre: "Galácticas del Caribe", imagen: "URL_ESCUDO_GALACTICAS_DEL_CARIBE" },
      { id: 40, nombre: "Las Aliens FC", imagen: "URL_ESCUDO_LAS_ALIENS" },
      { id: 41, nombre: "Las Chamas FC", imagen: "URL_ESCUDO_LAS_CHAMAS" },
      { id: 42, nombre: "Las Santas FC", imagen: "URL_ESCUDO_LAS_SANTAS" },
      { id: 43, nombre: "Muchachas FC", imagen: "URL_ESCUDO_MUCHACHAS" },
      { id: 44, nombre: "Olimpo United", imagen: "URL_ESCUDO_OLIMPO_UNITED" },
      { id: 45, nombre: "Peluche Caligari", imagen: "URL_ESCUDO_PELUCHE_CALIGARI" },
      { id: 46, nombre: "Persas FC", imagen: "URL_ESCUDO_PERSAS" },
      { id: 47, nombre: "Raniza FC", imagen: "URL_ESCUDO_RANIZA" },
      { id: 48, nombre: "Real Titan FC", imagen: "URL_ESCUDO_REAL_TITAN" }
    ]
  };

  const CATEGORIES_PRESIDENTS = {
    "presisSpain": [
      { id: 13, nombre: "Mayichi (1K)", imagen: "https://i.ibb.co/MDN445S2/14-Amablitz.png" },
      { id: 14, nombre: "Ama Blitz (Aniquiladoras FC)", imagen: "https://i.ibb.co/0p9Js9tm/13-Mayichi.png" }
      // ...continua agregando presidentas de Spain
    ],
    "presisAmericas": [
      { id: 49, nombre: "La Parce (Atlético Parceros)", imagen: "URL_PRESI_LA_PARCE" },
      { id: 50, nombre: "Natalia MX + PipePunk (Club de Cuervos)", imagen: "URL_PRESI_NATALIA_PIPEPUNK" }
      // ...continua agregando presidentas de Americas
    ]
  };

  const SUPERCHAMPIONS = [
    { id: 25, nombre: "Ainara Navas", imagen: "https://i.ibb.co/ZRzW9Lx8/25-SUPERCAMPEONAS-Ainara-Navas.png" },
    { id: 26, nombre: "Bea Pérez", imagen: "https://i.ibb.co/PswsRSBC/26-SUPERCAMPEONAS-Beatriz-Perez.png" }
    // ...continua todas las supercampeonas
  ];

  // Crear array plano para todas las cartas
  const CARDS = [
    ...CATEGORIES.escudosSpain.map(c => ({ ...c, tipo: "escudo" })),
    ...CATEGORIES.escudosAmericas.map(c => ({ ...c, tipo: "escudo" })),
    ...CATEGORIES_PRESIDENTS.presisSpain.map(c => ({ ...c, tipo: "presidenta" })),
    ...CATEGORIES_PRESIDENTS.presisAmericas.map(c => ({ ...c, tipo: "presidenta" })),
    ...SUPERCHAMPIONS.map(c => ({ ...c, tipo: "supercampeonas" }))
  ];

  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || {};
  const monedasPanel = document.getElementById("monedas-panel");
  const welcome = document.getElementById("welcome-screen");
  const packView = document.getElementById("pack-view");
  const albumView = document.getElementById("album-view");
  const escudosGrid = document.getElementById("escudos-grid");
  const presidentesGrid = document.getElementById("presidentes-grid");
  const superGrid = document.createElement("div");
  superGrid.id = "super-grid"; 
  superGrid.classList.add("grid");
  const lastPack = document.getElementById("last-pack");

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");
  modalClose.onclick = () => { modal.style.display = "none"; }

  function updateMonedas() {
    monedasPanel.textContent = "Monedas: " + monedas;
    localStorage.setItem("monedas_queens", monedas);
  }
  updateMonedas();

  function hideWelcome() { welcome.style.display = "none"; }

  function mostrarAlbum() {
    hideWelcome();
    albumView.style.display = "block";
    packView.style.display = "none";

    escudosGrid.innerHTML = "";
    presidentesGrid.innerHTML = "";
    if(!document.getElementById("super-grid")) albumView.appendChild(superGrid);
    superGrid.innerHTML = "";

    // Contador de álbum
    let totalCartas = CARDS.length;
    let obtenidas = CARDS.filter(card => album[card.id] >= 1).length;
    let albumCont = document.createElement("p");
    albumCont.style.textAlign = "center";
    albumCont.textContent = `Cartas obtenidas: ${obtenidas}/${totalCartas}`;
    albumView.insertBefore(albumCont, escudosGrid);

    // Vender duplicadas
    let duplicadasBtn = document.getElementById("btn-vender");
    if(!duplicadasBtn){
      duplicadasBtn = document.createElement("button");
      duplicadasBtn.id = "btn-vender";
      duplicadasBtn.textContent = "Vender duplicadas (+100 monedas c/u)";
      duplicadasBtn.style.display = "block";
      duplicadasBtn.style.margin = "10px auto";
      duplicadasBtn.style.backgroundColor = "#00c9bb";
      duplicadasBtn.style.color = "#2a0948";
      duplicadasBtn.style.padding = "8px 12px";
      duplicadasBtn.style.border = "none";
      duplicadasBtn.style.borderRadius = "8px";
      duplicadasBtn.style.cursor = "pointer";
      duplicadasBtn.onclick = () => {
        let ganancia = 0;
        for(const key in album){
          if(album[key]>1) { ganancia += (album[key]-1)*100; album[key]=1; }
        }
        if(ganancia>0){
          monedas += ganancia; updateMonedas();
          localStorage.setItem("album_queens", JSON.stringify(album));
          mostrarAlbum();
          alert(`Has vendido duplicadas y recibido ${ganancia} monedas.`);
        } else alert("No tienes duplicadas para vender.");
      }
      albumView.appendChild(duplicadasBtn);
    }

    // Renderizar cartas en grids
    CARDS.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("cromo");
      const img = document.createElement("img");
      img.src = album[card.id]? card.imagen : REVERSO;
      img.alt = card.nombre;
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.imagen;
        modalImg.style.border = "5px solid #fff";
      });

      // Contador de duplicadas
      if(album[card.id] && album[card.id]>1){
        let count = document.createElement("span");
        count.textContent = album[card.id];
        count.style.position="absolute";
        count.style.bottom="5px";
        count.style.right="5px";
        count.style.background="#00c9bb";
        count.style.color="#2a0948";
        count.style.padding="2px 5px";
        count.style.borderRadius="8px";
        count.style.fontSize="12px";
        div.appendChild(count);
      }

      div.appendChild(img);

      if(CATEGORIES.escudosSpain.some(c => c.id === card.id) || CATEGORIES.escudosAmericas.some(c => c.id === card.id)){
        escudosGrid.appendChild(div);
      } else if(CATEGORIES_PRESIDENTS.presisSpain.some(c => c.id === card.id) || CATEGORIES_PRESIDENTS.presisAmericas.some(c => c.id === card.id)){
        presidentesGrid.appendChild(div);
      } else {
        superGrid.appendChild(div);
      }
    });
  }
  function abrirSobre() {
    if(monedas < 1000) { alert("No tienes suficientes monedas."); return; }
    hideWelcome();
    monedas -= 1000; 
    updateMonedas();
    packView.style.display = "block";
    albumView.style.display = "none";
    lastPack.innerHTML = "<h3>¡Has abierto un sobre! 🎁</h3><div class='grid'></div>";
    const grid = lastPack.querySelector(".grid");

    for(let i=0;i<5;i++){
      const c = CARDS[Math.floor(Math.random()*CARDS.length)];
      const div = document.createElement("div");
      div.classList.add("cromo");
      const img = document.createElement("img");
      img.src = c.imagen;
      img.alt = c.nombre;
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = c.imagen;
        modalImg.style.border = "5px solid #fff";
      });
      div.appendChild(img);
      grid.appendChild(div);
      album[c.id] = (album[c.id] || 0) + 1;
    }

    localStorage.setItem("album_queens", JSON.stringify(album));
  }

  document.getElementById("btn-open").addEventListener("click", abrirSobre);
  document.getElementById("btn-album").addEventListener("click", mostrarAlbum);

  // Bonus diario
  document.getElementById("btn-daily").addEventListener("click", () => {
    const last = localStorage.getItem("last_daily"); 
    const now = Date.now();
    if(!last || now - last > 24*60*60*1000){
      monedas += 2000; 
      updateMonedas();
      localStorage.setItem("last_daily", now);
      alert("Has reclamado 2000 monedas diarias 🎉");
    } else alert("Ya reclamaste hoy ⏰");
  });

  // Bonus Twitch/X
  document.getElementById("btn-twitch").addEventListener("click", () => {
    if(!localStorage.getItem("bonus_twitch")){
      monedas += 10000; 
      updateMonedas();
      localStorage.setItem("bonus_twitch", "true");
      alert("Has reclamado 10000 monedas por Twitch 🎮");
      window.open("https://twitch.tv/izandhh","_blank");
    } else alert("Ya reclamaste este bonus.");
  });

  document.getElementById("btn-twitter").addEventListener("click", () => {
    if(!localStorage.getItem("bonus_twitter")){
      monedas += 10000; 
      updateMonedas();
      localStorage.setItem("bonus_twitter", "true");
      alert("Has reclamado 10000 monedas por X 🐦");
      window.open("https://x.com/izandhh","_blank");
    } else alert("Ya reclamaste este bonus.");
  });

  // Códigos de bonificación
  const CODIGOS = {
    "AroneyGonzalez":10000,
    "paulaanavas_gg":100000,
    "pinkgoldqueen":10000,
    "annatan99_":10000,
    "AndreaChini":10000,
    "NarcisBoza":10000,
    "izandhh":10000,
    "sronzero":10000,
    "ZonaRayo":10000,
    "Porcinismoo":10000,
    "NikolRamos":10000,
    "ZonaMostoles":10000,
    "CZXR":10000
  };

  document.getElementById("btn-canjear").addEventListener("click", () => {
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
    function mostrarAlbum() {
    hideWelcome();
    albumView.style.display = "block";
    packView.style.display = "none";

    escudosGrid.innerHTML = "";
    presidentesGrid.innerHTML = "";
    if(!document.getElementById("super-grid")) albumView.appendChild(superGrid);
    superGrid.innerHTML = "";

    // Contador de álbum
    let totalCartas = CARDS.length;
    let obtenidas = CARDS.filter(card => album[card.id] >= 1).length;
    let albumCont = document.createElement("p");
    albumCont.style.textAlign = "center";
    albumCont.textContent = `Cartas obtenidas: ${obtenidas}/${totalCartas}`;
    albumView.insertBefore(albumCont, escudosGrid);

    // Vender duplicadas
    let duplicadasBtn = document.getElementById("btn-vender");
    if(!duplicadasBtn){
      duplicadasBtn = document.createElement("button");
      duplicadasBtn.id = "btn-vender";
      duplicadasBtn.textContent = "Vender duplicadas (+100 monedas c/u)";
      duplicadasBtn.style.display = "block";
      duplicadasBtn.style.margin = "10px auto";
      duplicadasBtn.style.backgroundColor = "#00c9bb";
      duplicadasBtn.style.color = "#2a0948";
      duplicadasBtn.style.padding = "8px 12px";
      duplicadasBtn.style.border = "none";
      duplicadasBtn.style.borderRadius = "8px";
      duplicadasBtn.style.cursor = "pointer";
      duplicadasBtn.onclick = () => {
        let ganancia = 0;
        for(const key in album){
          if(album[key]>1) { 
            ganancia += (album[key]-1)*100; 
            album[key]=1; 
          }
        }
        if(ganancia>0){
          monedas += ganancia; 
          updateMonedas();
          localStorage.setItem("album_queens", JSON.stringify(album));
          mostrarAlbum();
          alert(`Has vendido duplicadas y recibido ${ganancia} monedas.`);
        } else alert("No tienes duplicadas para vender.");
      }
      albumView.appendChild(duplicadasBtn);
    }

    // Mostrar cartas por categorías
    CARDS.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("cromo");
      const img = document.createElement("img");
      img.src = album[card.id]? card.imagen : REVERSO;
      img.alt = card.nombre;
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.imagen;
        modalImg.style.border = "5px solid #fff";
      });

      // Contador de duplicadas
      if(album[card.id] && album[card.id]>1){
        let count = document.createElement("span");
        count.textContent = album[card.id];
        count.style.position="absolute";
        count.style.bottom="5px";
        count.style.right="5px";
        count.style.background="#00c9bb";
        count.style.color="#2a0948";
        count.style.padding="2px 5px";
        count.style.borderRadius="8px";
        count.style.fontSize="12px";
        div.appendChild(count);
      }

      div.appendChild(img);

      if(card.tipo === "escudo") escudosGrid.appendChild(div);
      else if(card.tipo === "presidenta") presidentesGrid.appendChild(div);
      else superGrid.appendChild(div);
    });
  }

  // Modal cerrar
  modalClose.onclick = () => { modal.style.display = "none"; }

  // Inicializar
  updateMonedas();
  hideWelcome();
});


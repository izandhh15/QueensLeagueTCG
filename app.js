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
    { id:19,nombre:"Rivers (PIO FC)",tipo:"presidenta",imagen:"https://i.ibb.co/hRbZNNry/19-Rivers.png"},
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


  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || {};
  const monedasPanel = document.getElementById("monedas-panel");
  const welcome = document.getElementById("welcome-screen");
  const packView = document.getElementById("pack-view");
  const albumView = document.getElementById("album-view");
  const escudosGrid = document.getElementById("escudos-grid");
  const presidentesGrid = document.getElementById("presidentes-grid");
  const superGrid = document.createElement("div");
  superGrid.id = "super-grid"; superGrid.classList.add("grid");
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
      duplicadasBtn.style.backgroundColor = "#06ccbd";
      duplicadasBtn.style.color = "#2a0a49";
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
        count.style.background="#06ccbd";
        count.style.color="#2a0a49";
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

  function abrirSobre() {
    if(monedas < 1000) { alert("No tienes suficientes monedas."); return; }
    hideWelcome();
    monedas -= 1000; updateMonedas();
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

  // Diario
  document.getElementById("btn-daily").addEventListener("click", () => {
    const last = localStorage.getItem("last_daily"); 
    const now = Date.now();
    if(!last || now - last > 24*60*60*1000){
      monedas += 2000; updateMonedas();
      localStorage.setItem("last_daily", now);
      alert("Has reclamado 2000 monedas diarias 🎉");
    } else alert("Ya reclamaste hoy ⏰");
  });

  // Twitch/X
  document.getElementById("btn-twitch").addEventListener("click", () => {
    if(!localStorage.getItem("bonus_twitch")){
      monedas += 10000; updateMonedas();
      localStorage.setItem("bonus_twitch", "true");
      alert("Has reclamado 10000 monedas por Twitch 🎮");
      window.open("https://twitch.tv/izandhh","_blank");
    } else alert("Ya reclamaste este bonus.");
  });

  document.getElementById("btn-twitter").addEventListener("click", () => {
    if(!localStorage.getItem("bonus_twitter")){
      monedas += 10000; updateMonedas();
      localStorage.setItem("bonus_twitter", "true");
      alert("Has reclamado 10000 monedas por X 🐦");
      window.open("https://x.com/izandhh","_blank");
    } else alert("Ya reclamaste este bonus.");
  });

  // Códigos
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
    "NarcisBoza":10000,
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
      alert("Este código ya fue canjeado ❌"); return;
    }

    if(CODIGOS[codigo]){
      monedas += CODIGOS[codigo]; updateMonedas();
      usado.push(codigo);
      localStorage.setItem("codigos_usados", JSON.stringify(usado));
      alert(`¡Código válido! Has recibido ${CODIGOS[codigo]} monedas 🎉`);
      input.value = "";
    } else alert("Código incorrecto ❌");
  });

});

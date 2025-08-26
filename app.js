document.addEventListener("DOMContentLoaded", () => {
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
    { id:24,nombre:"Javi Buyer + Eric Minibuyer (Xbuyer Team)",tipo:"presidenta",imagen:"https://i.ibb.co/KjRXYVtY/24-Hnos-Buyer.png"},
    { id:25,nombre:"Ainara Navas (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/ZRzW9Lx8/25-SUPERCAMPEONAS-Ainara-Navas.png"},
    { id:26,nombre:"Bea Pérez (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/PswsRSBC/26-SUPERCAMPEONAS-Beatriz-Perez.png"},
    { id:27,nombre:"Alba Ortiz (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/qMhQgx0f/27-SUPERCAMPEONAS-Alba-Ortiz.png"},
    { id:28,nombre:"Aroney González (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/0yYfkK9x/28-SUPERCAMPEONAS-Aroney-Gonzalez.png"},
    { id:29,nombre:"Paula Nieto (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/F4WmsH3C/29-SUPERCAMPEONAS-Paula-Nieto.png"},
    { id:30,nombre:"Blanca Cros (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/H9Bnsd5/30-SUPERCAMPEONAS-Blanca-Cros.png"},
    { id:31,nombre:"Mar Dalmau (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/svv4Wrs0/31-SUPERCAMPEONAS-Mar-Dalmau.png"},
    { id:32,nombre:"Zoraida Pichardo (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/Cs806S8S/32-SUPERCAMPEONAS-Zoraida-Pichardo.png"},
    { id:33,nombre:"Maria Pi (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/7xWRkBtW/33-SUPERCAMPEONAS-Maria-Pi.png"},
    { id:34,nombre:"Patricia Mascaró (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/C5g5jLZv/34-SUPERCAMPEONAS-Patricia-Mascar.png"},
    { id:35,nombre:"Berta Velasco (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/vC7tvZD3/35-SUPERCAMPEONAS-Berta-Velasco.png"},
    { id:36,nombre:"Paula Blas (SUPERCAMPEONAS)",tipo:"supercampeonas",imagen:"https://i.ibb.co/cKjf90R8/36-SUPERCAMPEONAS-Paula-Blas.png"}
  ];

  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || {};
  // album será objeto { idCarta: cantidad }

  const monedasPanel = document.getElementById("monedas-panel");
  const welcome = document.getElementById("welcome-screen");
  const packView = document.getElementById("pack-view");
  const albumView = document.getElementById("album-view");
  const escudosGrid = document.getElementById("escudos-grid");
  const presidentesGrid = document.getElementById("presidentes-grid");
  const supercampeonasGrid = document.getElementById("supercampeonas-grid");
  const lastPack = document.getElementById("last-pack");
  const contadorAlbum = document.getElementById("contador-album");
  const btnVender = document.getElementById("btn-vender");

  // MODAL
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");

  modalClose.onclick = () => { modal.style.display = "none"; }

  function updateMonedas() {
    monedasPanel.textContent = "Monedas: " + monedas;
    localStorage.setItem("monedas_queens", monedas);
  }
  updateMonedas();

  function hideWelcome() {
    welcome.style.display = "none";
  }

  function contarAlbum() {
    let obtenidas = Object.keys(album).length;
    contadorAlbum.textContent = `${obtenidas}/${CARDS.length} cartas`;
  }

  // Mostrar álbum
  function mostrarAlbum() {
    hideWelcome();
    albumView.style.display = "block";
    packView.style.display = "none";
    escudosGrid.innerHTML = "";
    presidentesGrid.innerHTML = "";
    supercampeonasGrid.innerHTML = "";

    CARDS.forEach(card => {
      const div = document.createElement("div");
      div.classList.add("cromo");
      const img = document.createElement("img");
      img.src = album[card.id] ? card.imagen : REVERSO;
      img.alt = card.nombre;
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.imagen;
      });
      div.appendChild(img);

      // Contador si hay más de una
      if(album[card.id] > 1){
        const span = document.createElement("span");
        span.classList.add("contador");
        span.textContent = "x" + album[card.id];
        div.appendChild(span);
      }

      if(card.tipo === "escudo") escudosGrid.appendChild(div);
      else if(card.tipo === "presidenta") presidentesGrid.appendChild(div);
      else if(card.tipo === "supercampeonas") supercampeonasGrid.appendChild(div);
    });

    contarAlbum();
  }

  // Abrir sobre
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
      });
      div.appendChild(img);
      grid.appendChild(div);

      // Guardar en álbum (puede ser duplicada)
      album[c.id] = (album[c.id] || 0) + 1;
    }

    localStorage.setItem("album_queens", JSON.stringify(album));
  }

  document.getElementById("btn-open").addEventListener("click", abrirSobre);
  document.getElementById("btn-album").addEventListener("click", mostrarAlbum);

  // Vender duplicadas
  btnVender.addEventListener("click", () => {
    let totalVendidas = 0;
    for(const id in album){
      if(album[id] > 1){
        totalVendidas += (album[id] - 1);
        album[id] = 1; // deja solo una copia
      }
    }
    if(totalVendidas > 0){
      monedas += totalVendidas * 100;
      updateMonedas();
      localStorage.setItem("album_queens", JSON.stringify(album));
      alert(`Has vendido ${totalVendidas} duplicadas y recibido ${totalVendidas*100} monedas 💰`);
      mostrarAlbum();
    } else {
      alert("No tienes duplicadas para vender ❌");
    }
  });

});

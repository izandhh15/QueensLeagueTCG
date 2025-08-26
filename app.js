document.addEventListener("DOMContentLoaded", () => {
  // --- CONFIGURACIÓN ---
  const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";
  const CARD_CATEGORIES = [
    { name: "Escudos", filter: c => c.tipo === "escudo" },
    { name: "Escudos QL America", filter: c => c.tipo === "escudoqlame" },
    { name: "Presidentas/es", filter: c => c.tipo === "presidenta" },
    { name: "Presidentas/es QL America", filter: c => c.tipo === "presisqlame" },
    { name: "Supercampeonas", filter: c => c.tipo === "supercampeonas" }
  ];

  // --- CARTAS ---
  // (Pon aquí tu array CARDS completo con id, nombre, tipo, imagen, etc.)
  const CARDS = [/* ...tu array de cartas, igual que antes... */];

  // --- CÓDIGOS DE CREADORES ---
  // Lista fácil de editar: cada línea es "Codigo;monedas"
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

  // --- ESTADO usuario ---
  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || {};
  let codigosUsados = JSON.parse(localStorage.getItem("codigos_usados_queens")) || [];

  // --- ELEMENTOS HTML ---
  const monedasPanel = document.getElementById("monedas-panel");
  const mainContent = document.getElementById("main-content");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");

  // --- MODAL ---
  modalClose.onclick = () => { modal.style.display = "none"; };
  modal.addEventListener("click", e => { if (e.target === modal) modal.style.display="none"; });

  // --- MONEDAS ---
  function updateMonedas() {
    monedasPanel.textContent = "Monedas: " + monedas;
    localStorage.setItem("monedas_queens", monedas);
  }

  // --- ÁLBUM ---
  function mostrarAlbum(filtro = null) {
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

    // Contador progreso
    const obtenidas = cardsFiltradas.filter(card => album[card.id]).length;
    const total = cardsFiltradas.length;
    const progreso = document.createElement("p");
    progreso.textContent = `Cartas obtenidas: ${obtenidas} / ${total}`;
    progreso.className = "progreso-album";
    mainContent.appendChild(progreso);

    // Grid de cromos
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

  // --- AMPLIAR CROMO ---
  function ampliarCromo(card) {
    modal.style.display = "flex";
    modalImg.src = card.imagen;
    modalImg.alt = card.nombre;
    modalImg.style.border = "6px solid #fff";
    modalImg.style.boxShadow = "0 0 32px #7c3aed88";

    // Info adicional en modal si duplicadas
    if (album[card.id] && album[card.id] > 1) {
      modalImg.title = `Tienes ${album[card.id]} copias.`;
    } else {
      modalImg.title = "";
    }
  }

  // --- VENDER DUPLICADAS ---
  function venderDuplicadas(cardId) {
    if (album[cardId] && album[cardId] > 1) {
      let vendidas = album[cardId] - 1;
      monedas += vendidas * 100;
      album[cardId] = 1;
      localStorage.setItem("album_queens", JSON.stringify(album));
      updateMonedas();
      mostrarAlbum(document.querySelector(".filtro-categoria").value);
      alert(`Vendiste ${vendidas} duplicadas y ganaste ${vendidas * 100} monedas`);
    }
  }

  // --- ABRIR SOBRE ---
  function abrirSobre() {
    if (monedas < 1000) {
      alert("No tienes suficientes monedas.");
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
  }

  // --- BONUS DIARIO ---
  function bonusDiario() {
    const last = localStorage.getItem("last_daily"); const now=Date.now();
    if(!last || now-last>24*60*60*1000){
      monedas+=2000; updateMonedas();
      localStorage.setItem("last_daily", now);
      alert("Has reclamado 2000 monedas diarias 🎉");
    } else {
      alert("Ya reclamaste hoy ⏰");
    }
  }

  // --- CANJEAR CÓDIGO DE CREADOR ---
  function canjearCodigo() {
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
          alert(`¡Has recibido ${codigoObj.monedas} monedas por el código ${val}!`);
        } else {
          alert("Código ya usado.");
        }
      } else {
        alert("Código no válido.");
      }
      input.value = "";
    }
  }

  // --- MENÚ PRINCIPAL ---
  function renderMenu() {
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

  // --- INICIALIZACIÓN ---
  window.mostrarAlbum = mostrarAlbum;
  window.abrirSobre = abrirSobre;
  window.bonusDiario = bonusDiario;
  window.canjearCodigo = canjearCodigo;

  renderMenu();

  // Mostrar menú al hacer clic en logo o panel de monedas
  monedasPanel.onclick = renderMenu;
});

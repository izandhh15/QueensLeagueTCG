// ==============================
// Álbum Virtual Queens League Oysho
// files/app.js (cargado desde index.html)
// Versión robusta: espera DOMContentLoaded, no usa inline onclick
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  // ----- CONFIG -----
  const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

  const CARD_CATEGORIES = [
    { name: "Todas", filter: c => true },
    { name: "Escudos", filter: c => c.tipo === "escudo" },
    { name: "Presidentas/es", filter: c => c.tipo === "presidenta" },
    { name: "Supercampeonas", filter: c => c.tipo === "supercampeonas" }
  ];

  // Ejemplo de cartas: añade/edita las URLs e ids que necesites
  const CARDS = [
    { id: 1, nombre: "Escudo A", tipo: "escudo", imagen: "https://i.ibb.co/CpJ3c7B8/01-Escudo1-K.png" },
    { id: 2, nombre: "Escudo B", tipo: "escudo", imagen: "https://i.ibb.co/9y8p38r/02-Escudo2-K.png" },
    { id: 3, nombre: "Aroney Gonzalez", tipo: "presidenta", imagen: "https://i.ibb.co/6XG0kXc/sample-presidenta.png" },
    { id: 4, nombre: "Mar Serracanta", tipo: "presidenta", imagen: "https://i.ibb.co/3W9L0sF/sample-supercampeona.png" },
    { id: 5, nombre: "Super QL 1", tipo: "supercampeonas", imagen: "https://i.ibb.co/sample1/super1.png" },
    { id: 6, nombre: "Super QL 2", tipo: "supercampeonas", imagen: "https://i.ibb.co/sample1/super2.png" }
  ];

  // Códigos de creador (minúsculas en storage)
  const CODIGOS_CREADORES = [
    { codigo: "aroneygonzalez", monedas: 10000 },
    { codigo: "marserracanta", monedas: 10000 },
    { codigo: "bertavelasco", monedas: 10000 },
    { codigo: "ainaranavas", monedas: 10000 },
    { codigo: "beaperez", monedas: 10000 }
  ];

  // ----- DOM references -----
  const monedasPanel = document.getElementById("monedas-panel");
  const mainContent = document.getElementById("main-content");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");
  const modalInfo = document.getElementById("modal-info");
  const userPanel = document.getElementById("user-panel");
  const notificacion = document.getElementById("notificacion");
  const loginModal = document.getElementById("login-modal");
  const loginDiscordBtn = document.getElementById("login-discord");
  const loginGoogleBtn = document.getElementById("login-google");
  const loginCloseBtn = document.getElementById("login-close");
  const logo = document.getElementById("logo");

  if (!monedasPanel || !mainContent || !userPanel) {
    console.error("Elementos críticos no encontrados en DOM.");
    if (notificacion) {
      notificacion.textContent = "Error: elementos de la página no encontrados. Revisa el HTML.";
      notificacion.style.display = "block";
    }
    return;
  }

  // ----- Estado (localStorage) -----
  let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
  let album = JSON.parse(localStorage.getItem("album_queens")) || {}; // album[cardId] = cantidad
  let codigosUsados = JSON.parse(localStorage.getItem("codigos_usados_queens")) || [];

  // ----- Usuario simulado -----
  function getUser() {
    try { return JSON.parse(localStorage.getItem("album_user")) || null; } catch(e) { return null; }
  }
  function setUser(user) {
    localStorage.setItem("album_user", JSON.stringify(user));
    renderUserPanel();
    renderMenu();
  }
  function logoutUser() {
    localStorage.removeItem("album_user");
    renderUserPanel();
    renderMenu();
  }
  function loginDiscord() {
    // Simula un inicio con Discord (frontend only)
    const user = {
      name: "DiscordUser",
      avatar: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
      provider: "Discord"
    };
    setUser(user);
    if (loginModal) loginModal.style.display = "none";
    showNotificacion("Conectado como " + user.name);
  }
  function loginGoogle() {
    const user = {
      name: "GoogleUser",
      avatar: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
      provider: "Google"
    };
    setUser(user);
    if (loginModal) loginModal.style.display = "none";
    showNotificacion("Conectado como " + user.name);
  }

  // ----- Utilidades -----
  function saveState() {
    localStorage.setItem("monedas_queens", monedas);
    localStorage.setItem("album_queens", JSON.stringify(album));
  }

  function showNotificacion(msg, timeout = 2000) {
    if (!notificacion) { console.log("NOTIF:", msg); return; }
    notificacion.textContent = msg;
    notificacion.style.display = "block";
    setTimeout(() => { notificacion.style.display = "none"; }, timeout);
  }

  function updateMonedas() {
    monedasPanel.textContent = "Monedas: " + monedas;
    saveState();
  }

  // ----- Modal -----
  if (modalClose) modalClose.addEventListener("click", () => { modal.style.display = "none"; });
  if (modal) modal.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

  // ----- Album rendering -----
  function mostrarAlbum(filtroName = "Todas") {
    if (!getUser()) {
      showNotificacion("Inicia sesión para ver tu álbum");
      return;
    }

    mainContent.innerHTML = "";
    // Selector de filtro
    const select = document.createElement("select");
    select.className = "filtro-categoria";
    CARD_CATEGORIES.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.name; opt.textContent = cat.name;
      if (cat.name === filtroName) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener("change", () => mostrarAlbum(select.value));
    mainContent.appendChild(select);

    // Progreso
    const filteredCards = CARDS.filter(CARD_CATEGORIES.find(c => c.name === filtroName).filter);
    const obtenidas = filteredCards.filter(c => album[c.id]).length;
    const progreso = document.createElement("p");
    progreso.className = "progreso-album";
    progreso.textContent = `Cartas obtenidas: ${obtenidas} / ${filteredCards.length}`;
    mainContent.appendChild(progreso);

    // Grid
    const grid = document.createElement("div"); grid.className = "album-grid";
    filteredCards.sort((a,b) => a.id - b.id).forEach(card => {
      const div = document.createElement("div"); div.className = "cromo";
      const img = document.createElement("img");
      img.alt = card.nombre;
      img.src = album[card.id] ? card.imagen : REVERSO;
      img.tabIndex = 0;
      img.addEventListener("click", () => ampliarCromo(card));
      img.addEventListener("keyup", (e) => { if (e.key === "Enter") ampliarCromo(card); });
      div.appendChild(img);

      if (album[card.id] && album[card.id] > 1) {
        const dup = document.createElement("span"); dup.className = "duplicadas";
        dup.textContent = album[card.id];
        div.appendChild(dup);

        const btnVen = document.createElement("button"); btnVen.className = "btn-vender";
        btnVen.textContent = "Vender";
        btnVen.addEventListener("click", (ev) => { ev.stopPropagation(); venderDuplicadas(card.id); });
        div.appendChild(btnVen);
      }

      grid.appendChild(div);
    });
    mainContent.appendChild(grid);
    updateMonedas();
  }

  function ampliarCromo(card) {
    if (!modal || !modalImg || !modalInfo) return;
    modal.style.display = "flex";
    modalImg.src = card.imagen;
    modalImg.alt = card.nombre;
    modalInfo.textContent = album[card.id] ? `Tienes ${album[card.id]} copias.` : "";
  }

  function venderDuplicadas(cardId) {
    if (!album[cardId] || album[cardId] <= 1) {
      showNotificacion("No tienes duplicadas para vender.");
      return;
    }
    const vendidas = album[cardId] - 1;
    const ganancia = vendidas * 100;
    monedas += ganancia;
    album[cardId] = 1;
    saveState();
    updateMonedas();
    showNotificacion(`Vendidas ${vendidas} duplicadas → +${ganancia} monedas`);
    mostrarAlbum(document.querySelector(".filtro-categoria")?.value || "Todas");
  }

  // ----- Abrir sobre -----
  function abrirSobre() {
    if (!getUser()) { showNotificacion("Inicia sesión para abrir sobres"); return; }
    const COSTE = 1000;
    if (monedas < COSTE) { showNotificacion("No tienes suficientes monedas"); return; }
    monedas -= COSTE; updateMonedas();

    mainContent.innerHTML = "<h2>¡Sobre abierto!</h2><div class='sobre-grid'></div>";
    const grid = mainContent.querySelector('.sobre-grid');

    const nuevas = [];
    for (let i = 0; i < 5; i++) {
      const card = CARDS[Math.floor(Math.random() * CARDS.length)];
      album[card.id] = (album[card.id] || 0) + 1;
      nuevas.push(card);
    }
    saveState();

    nuevas.forEach(card => {
      const div = document.createElement("div"); div.className = "cromo";
      const img = document.createElement("img"); img.src = card.imagen; img.alt = card.nombre;
      img.addEventListener("click", () => ampliarCromo(card));
      div.appendChild(img);
      grid.appendChild(div);
    });
    showNotificacion("¡Has recibido 5 cartas!");
  }

  // ----- Bonus diario -----
  function bonusDiario() {
    if (!getUser()) { showNotificacion("Inicia sesión para reclamar bonus"); return; }
    const last = parseInt(localStorage.getItem("last_daily") || "0");
    const now = Date.now();
    if (!last || now - last > 24 * 60 * 60 * 1000) {
      monedas += 2000; updateMonedas();
      localStorage.setItem("last_daily", now.toString());
      showNotificacion("Bonus diario: 2000 monedas 🎉");
    } else {
      showNotificacion("Ya reclamaste el bonus diario hoy");
    }
  }

  // ----- Canjear código -----
  function canjearCodigo() {
    if (!getUser()) { showNotificacion("Inicia sesión para canjear códigos"); return; }
    const input = document.getElementById("input-codigo");
    if (!input) { showNotificacion("Campo de código no encontrado"); return; }
    const val = input.value.trim().toLowerCase();
    if (!val) { showNotificacion("Introduce un código"); return; }
    if (codigosUsados.includes(val)) {
      showNotificacion("Código ya usado");
      input.value = "";
      return;
    }
    const match = CODIGOS_CREADORES.find(c => c.codigo === val);
    if (!match) {
      showNotificacion("Código no válido");
      input.value = "";
      return;
    }
    monedas += match.monedas; updateMonedas();
    codigosUsados.push(val);
    localStorage.setItem("codigos_usados_queens", JSON.stringify(codigosUsados));
    showNotificacion(`Canjeado: +${match.monedas} monedas`);
    input.value = "";
  }

  // ----- Menú principal -----
  function renderMenu() {
    const user = getUser();
    if (!user) {
      mainContent.innerHTML = `
        <div class="menu-principal">
          <h2>¡Bienvenido al Álbum Virtual!</h2>
          <p>Inicia sesión para guardar tu progreso y abrir sobres.</p>
          <div style="display:flex; gap:8px;">
            <button class="login-btn" id="menu-login-discord">Iniciar con Discord</button>
            <button class="login-btn" id="menu-login-google">Iniciar con Google</button>
          </div>
        </div>
      `;
      document.getElementById("menu-login-discord")?.addEventListener("click", () => {
        if (loginModal) loginModal.style.display = "flex";
      });
      document.getElementById("menu-login-google")?.addEventListener("click", () => {
        if (loginModal) loginModal.style.display = "flex";
      });
      return;
    }

    mainContent.innerHTML = `
      <div class="menu-principal">
        <h2>Hola, ${user.name}</h2>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap; justify-content:center;">
          <button id="btn-ver-album" class="login-btn">Ver Álbum</button>
          <button id="btn-abrir-sobre" class="login-btn">Abrir Sobre (1000 monedas)</button>
          <button id="btn-bonus-diario" class="login-btn">Bonus Diario</button>
        </div>
        <div style="margin-top:10px;">
          <input id="input-codigo" type="text" placeholder="Código de creador" />
          <button id="btn-canjear" class="login-btn" style="margin-left:6px;">Canjear Código</button>
        </div>
      </div>
    `;
    document.getElementById("btn-ver-album")?.addEventListener("click", () => mostrarAlbum());
    document.getElementById("btn-abrir-sobre")?.addEventListener("click", abrirSobre);
    document.getElementById("btn-bonus-diario")?.addEventListener("click", bonusDiario);
    document.getElementById("btn-canjear")?.addEventListener("click", canjearCodigo);

    updateMonedas();
  }

  // ----- Render user panel in header -----
  function renderUserPanel() {
    const user = getUser();
    userPanel.innerHTML = "";
    if (user) {
      const img = document.createElement("img"); img.className = "avatar"; img.src = user.avatar; img.alt = user.name;
      userPanel.appendChild(img);
      const span = document.createElement("span"); span.textContent = `${user.name} (${user.provider})`;
      userPanel.appendChild(span);
      const btn = document.createElement("button"); btn.className = "logout-btn"; btn.textContent = "Salir";
      btn.addEventListener("click", () => {
        logoutUser();
        showNotificacion("Sesión cerrada");
      });
      userPanel.appendChild(btn);
    } else {
      const btnD = document.createElement("button"); btnD.className = "login-btn"; btnD.textContent = "Discord";
      btnD.addEventListener("click", () => { if (loginModal) loginModal.style.display = "flex"; });
      const btnG = document.createElement("button"); btnG.className = "login-btn"; btnG.textContent = "Google";
      btnG.addEventListener("click", () => { if (loginModal) loginModal.style.display = "flex"; });
      userPanel.appendChild(btnD); userPanel.appendChild(btnG);
    }
  }

  // ----- Event listeners login modal -----
  if (loginDiscordBtn) loginDiscordBtn.addEventListener("click", loginDiscord);
  if (loginGoogleBtn) loginGoogleBtn.addEventListener("click", loginGoogle);
  if (loginCloseBtn) loginCloseBtn.addEventListener("click", () => { if (loginModal) loginModal.style.display = "none"; });

  // logo click reload
  if (logo) logo.addEventListener("click", () => {
    renderUserPanel(); renderMenu();
  });

  // ----- Expose some functions for debugging / inline use if needed -----
  window.mostrarAlbum = mostrarAlbum;
  window.abrirSobre = abrirSobre;
  window.bonusDiario = bonusDiario;
  window.canjearCodigo = canjearCodigo;
  window.renderMenu = renderMenu;
  window.loginDiscord = loginDiscord;
  window.loginGoogle = loginGoogle;
  window.logoutUser = logoutUser;
  window.renderUserPanel = renderUserPanel;

  // ----- Inicialización -----
  renderUserPanel();
  renderMenu();
  updateMonedas();

  console.log("App inicializada correctamente.");
});

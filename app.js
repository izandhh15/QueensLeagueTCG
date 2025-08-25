const album = document.getElementById("album");
const btnSobre = document.getElementById("btn-sobre");

// Supongamos 20 cromos
const totalCromos = 20;
let coleccion = JSON.parse(localStorage.getItem("album")) || Array(totalCromos).fill(false);

function renderAlbum() {
  album.innerHTML = "";
  coleccion.forEach((tiene, i) => {
    const div = document.createElement("div");
    div.className = "cromo" + (tiene ? " obtenido" : "");
    div.textContent = tiene ? "Cromo " + (i+1) : "?";
    album.appendChild(div);
  });
}

function abrirSobre() {
  const nuevos = [];
  for (let i = 0; i < 3; i++) { // 3 cromos por sobre
    const aleatorio = Math.floor(Math.random() * totalCromos);
    coleccion[aleatorio] = true;
    nuevos.push(aleatorio+1);
  }
  localStorage.setItem("album", JSON.stringify(coleccion));
  renderAlbum();
  alert("¡Has conseguido: " + nuevos.join(", ") + "!");
}

btnSobre.addEventListener("click", abrirSobre);

renderAlbum();

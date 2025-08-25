// === CONFIGURACIÓN DEL ÁLBUM ===
const REVERSO = "https://i.ibb.co/F443KZqx/00-REVERSO.png";

// 24 cromos (12 escudos + 12 presidentes/as)
const CARDS = [
  { id:1,nombre:"Escudo 1K",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudo1k.png"},
  { id:2,nombre:"Escudo Aniquiladoras FC",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudoani.png"},
  { id:3,nombre:"Escudo El Barrio",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudobarrio.png"},
  { id:4,nombre:"Escudo Jijantas FC",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudojijantas.png"},
  { id:5,nombre:"Escudo Kunitas",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudokunitas.png"},
  { id:6,nombre:"Escudo Las Troncas FC",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudotroncas.png"},
  { id:7,nombre:"Escudo PIO FC",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudiopio.png"},
  { id:8,nombre:"Escudo Porcinas FC",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudoporcinas.png"},
  { id:9,nombre:"Escudo Rayo de Barcelona",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudorayo.png"},
  { id:10,nombre:"Escudo Saiyans FC",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudosaiyans.png"},
  { id:11,nombre:"Escudo Ultimate Móstoles",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudomostoles.png"},
  { id:12,nombre:"Escudo Xbuyer Team",tipo:"escudo",imagen:"https://i.ibb.co/XXXXXX/escudoxbuyer.png"},
  { id:13,nombre:"Mayichi (1K)",tipo:"presidenta",imagen:"https://i.ibb.co/XXXXXX/mayichi.png"},
  { id:14,nombre:"Ama Blitz (Aniquiladoras FC)",tipo:"presidenta",imagen:"https://i.ibb.co/XXXXXX/amablitz.png"},
  { id:15,nombre:"Adri Contreras + Mercedes Roa (El Barrio)",tipo:"presidente",imagen:"https://i.ibb.co/XXXXXX/adri-mercedes.png"},
  { id:16,nombre:"Gerard Romero + Lis Cid (Jijantas FC)",tipo:"presidente",imagen:"https://i.ibb.co/XXXXXX/gerard-lis.png"},
  { id:17,nombre:"Jo Valicenti (Kunitas)",tipo:"presidenta",imagen:"https://i.ibb.co/XXXXXX/jo.png"},
  { id:18,nombre:"Violeta + Perxitaa (Las Troncas FC)",tipo:"presidente",imagen:"https://i.ibb.co/XXXXXX/violeta-perxitaa.png"},
  { id:19,nombre:"Rivers (PIO FC)",tipo:"presidenta",imagen:"https://i.ibb.co/XXXXXX/rivers.png"},
  { id:20,nombre:"Gemita (Porcinas FC)",tipo:"presidenta",imagen:"https://i.ibb.co/XXXXXX/gemita.png"},
  { id:21,nombre:"Spursito (Rayo de Barcelona)",tipo:"presidente",imagen:"https://i.ibb.co/XXXXXX/spursito.png"},
  { id:22,nombre:"Totakeki (Saiyans FC)",tipo:"presidente",imagen:"https://i.ibb.co/XXXXXX/totakeki.png"},
  { id:23,nombre:"Noe9977 (Ultimate Móstoles)",tipo:"presidenta",imagen:"https://i.ibb.co/XXXXXX/noe9977.png"},
  { id:24,nombre:"Javi Buyer + Eric Minibuyer (Xbuyer Team)",tipo:"presidente",imagen:"https://i.ibb.co/XXXXXX/javi-eric.png"}
];

// === VARIABLES DE JUEGO ===
let monedas = parseInt(localStorage.getItem("monedas_queens")) || 2000;
let album = JSON.parse(localStorage.getItem("album_queens")) || [];

// === FUNCIONES ===
function updateMonedas(){
  document.getElementById("monedas-panel").textContent = "Monedas: "+monedas;
  localStorage.setItem("monedas_queens", monedas);
}

function mostrarAlbum(){
  const grid=document.getElementById("album-grid");
  grid.innerHTML="";
  CARDS.forEach(card=>{
    const div=document.createElement("div");
    div.classList.add("cromo");
    const img=document.createElement("img");
    img.src = album.includes(card.id)? card.imagen : REVERSO;
    img.alt = card.nombre;
    const p=document.createElement("p");
    p.textContent=card.nombre;
    div.appendChild(img);
    div.appendChild(p);
    grid.appendChild(div);
  });
}
mostrarAlbum();

// Abrir sobre
function abrirSobre(){
  if(monedas<1000){alert("No tienes suficientes monedas."); return;}
  monedas-=1000; updateMonedas();
  let pack=[];
  for(let i=0;i<5;i++){
    const c=CARDS[Math.floor(Math.random()*CARDS.length)];
    pack.push(c);
    if(!album.includes(c.id)) album.push(c.id);
  }
  localStorage.setItem("album_queens", JSON.stringify(album));

  // Mostrar sección sobre
  document.getElementById("pack-view").style.display="block";
  document.getElementById("album-view").style.display="none";

  let html="<h3>¡Has abierto un sobre! 🎁</h3><div class='grid'>";
  pack.forEach(c=>{html+=`<div class="cromo"><img src="${c.imagen}" alt="${c.nombre}"><p>${c.nombre}</p></div>`;});
  html+="</div>";
  document.getElementById("last-pack").innerHTML=html;
  mostrarAlbum();
}

// === EVENTOS DEL MENÚ ===
document.getElementById("btn-open").addEventListener("click", abrirSobre);

document.getElementById("bt



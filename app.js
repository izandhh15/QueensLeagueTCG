// Configuración
const TOTAL_CROMOS = 24;   // por ahora solo escudos + presidentes
const TAM_SOBRE = 3;
const STORAGE_KEY = "album_cromos_queens";

// Definición de cartas
const CARDS = [
  // --- Escudos ---
  { id: 1, nombre: "Escudo 1K", tipo: "escudo", imagen: "assets/cards/1k_escudo.png" },
  { id: 2, nombre: "Escudo Aniquiladoras FC", tipo: "escudo", imagen: "assets/cards/aniquiladoras_escudo.png" },
  { id: 3, nombre: "Escudo El Barrio", tipo: "escudo", imagen: "assets/cards/el_barrio_escudo.png" },
  { id: 4, nombre: "Escudo Jijantas FC", tipo: "escudo", imagen: "assets/cards/jijantas_escudo.png" },
  { id: 5, nombre: "Escudo Kunitas", tipo: "escudo", imagen: "assets/cards/kunitas_escudo.png" },
  { id: 6, nombre: "Escudo Las Troncas FC", tipo: "escudo", imagen: "assets/cards/troncas_escudo.png" },
  { id: 7, nombre: "Escudo PIO FC", tipo: "escudo", imagen: "assets/cards/pio_escudo.png" },
  { id: 8, nombre: "Escudo Porcinas FC", tipo: "escudo", imagen: "assets/cards/porcinas_escudo.png" },
  { id: 9, nombre: "Escudo Rayo de Barcelona", tipo: "escudo", imagen: "assets/cards/rayo_escudo.png" },
  { id: 10, nombre: "Escudo Saiyans FC", tipo: "escudo", imagen: "assets/cards/saiyans_escudo.png" },
  { id: 11, nombre: "Escudo Ultimate Móstoles", tipo: "escudo", imagen: "assets/cards/mostoles_escudo.png" },
  { id: 12, nombre: "Escudo Xbuyer Team", tipo: "escudo", imagen: "assets/cards/xbuyer_escudo.png" },

  // --- Presidentes/as ---
  { id: 13, nombre: "Mayichi (Presidenta 1K)", tipo: "presidenta", imagen: "assets/cards/mayichi.png" },
  { id: 14, nombre: "Ama Blitz (Presidenta Aniquiladoras)", tipo: "presidenta", imagen: "assets/cards/ama_blitz.png" },
  { id: 15, nombre: "Adri Contreras + Mercedes Roa (El Barrio)", tipo: "presidenta", imagen: "assets/cards/adri_mercedes.png" },
  { id: 16, nombre: "Gerard Romero + Lis Cid (Jijantas FC)", tipo: "presidenta", imagen: "assets/cards/gerard_lis.png" },
  { id: 17, nombre: "Jo Valicenti (Kunitas)", tipo: "presidenta", imagen: "assets/cards/jo_valicenti.png" },
  { id: 18, nombre: "Violeta + Perxitaa (Las Troncas)", tipo: "presidenta", imagen: "assets/cards/violeta_perxitaa.png" },
  { id: 19, nombre: "Rivers (PIO FC)", tipo: "presidenta", imagen: "assets/cards/rivers.png" },
  { id: 20, nombre: "Gemita (Porcinas FC)", tipo: "presidenta", imagen: "assets/cards/gemita.png" },
  { id: 21, nombre: "Spursito (Rayo de Barcelona)", tipo: "presidenta", imagen: "assets/cards/spursito.png" },
  { id: 22, nombre: "Totakeki (Saiyans FC)", tipo: "presidenta", imagen: "assets/cards/totakeki.png" },
  { id: 23, nombre: "Noe9977 (Ultimate Móstoles)", tipo: "presidenta", imagen: "assets/cards/noe9977.png" },
  { id: 24, nombre: "Javi Buyer + Eric Minibuyer (Xbuyer Team)", tipo: "presidenta", imagen: "assets/cards/xbuyer_duo.png" },
];

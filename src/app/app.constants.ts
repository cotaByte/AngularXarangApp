export const URL = 'http://127.0.0.1:5000';
export const URL_IMAGENES = '/src/assets/images';
export const headers_genericos = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

export var TOKEN = "";

export const instrumentos_id_nombre = {
  1: "Percusión",
  2: "Tuba",
  3: "Trombón",
  4: "Trompa",
  5: "Trompeta",
  6: "Bombardí",
  7: "Saxo Tenor",
  8: "Saxo Alto",
  9: "Flauta",
  10: "Flautín"
};

/* export const instrumentos_nombre_id = Object.entries(instrumentos_id_nombre).map(([key, value]) => [value, key]); */
export const instrumentos_nombre_id = {
 "Percusión": 1,
 "Tuba": 2,
 "Trombón": 3,
 "Trompa":4,
 "Trompeta": 5,
 "Bombardí": 6,
 "Saxo Tenor":7,
  "Saxo Alto": 8,
  "Flauta": 9,
  "Flautín": 10,
  "Clarinete": 11
};

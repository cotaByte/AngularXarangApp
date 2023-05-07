export const URL = 'http://127.0.0.1:5000';
//export const URL = 'http://172.20.0.3:5000'; //para despliegue en prod  

export const URL_IMAGENES = '/src/assets/images';
export const headers_genericos = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};


export const TOKEN  = {
  id: '',
  nombre : '',
  id_instrumento:0,
  director: false
}


export const instrumentos_id_nombre = [
  {id: 1, nombre: "Percusión"},
  {id:2,  nombre:"Tuba"},
  {id:3,  nombre:"Trombón"},
  {id:4,  nombre:"Trompa"},
  {id:5,  nombre: "Trompeta"},
  {id:6,  nombre:"Bombardí"},
  {id:7,  nombre:"Saxo Tenor"},
  {id:8,  nombre:"Saxo Alto"},
  {id:9,  nombre:"Flauta"},
  {id:10, nombre:"Flautín"},
  {id:11, nombre:"Clarinete"}

];

/* export const instrumentos_nombre_id = Object.entries(instrumentos_id_nombre).map(([key, value]) => [value, key]); */
export const instrumentos_nombre_id =[
  {"Percusión": 1},
  {"Tuba": 2},
  {"Trombón": 3},
  {"Trompa":4},
  {"Trompeta": 5},
  {"Bombardí": 6},
  {"Saxo Tenor":7},
  {"Saxo Alto": 8},
  {"Flauta": 9},
  {"Flautín": 10},
  {"Clarinete": 11}
] ;

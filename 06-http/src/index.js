// import { init } from "./js/chistes-page";
// import { init } from "./js/usuarios-page";
// init();

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);
CRUD.crearUsuario({name:'Fernando', job:'Carpintero'}).then(console.log);
CRUD.actualizarUsuario(1, {name:'Melissa', job:'Developer'}).then(console.log);
CRUD.eliminarUsuario(1).then(console.log);
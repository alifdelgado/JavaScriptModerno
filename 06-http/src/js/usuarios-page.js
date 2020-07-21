import { obtenerUsuarios } from "./http-provider";

const body = document.body;
let divContainer;

const crearUsuariosHtml = () => {
    const html = `
        <h1>Usuarios</h1>
        <hr>
        <div class="row border">
            <div class="col-md-3">Nombre</div>
            <div class="col-md-3">Apellido</div>
            <div class="col-md-3">Email</div>
            <div class="col-md-3">Imagen</div>
        </div>
    `;
    const divTabla = document.createElement('div');
    divTabla.innerHTML = html;
    divTabla.classList.add('container');
    body.append(divTabla);
    divContainer = document.querySelector('.container');
};


const dibujarUsuario = async (usuario) => {
    const divItem = document.createElement('div');
    divItem.innerHTML = `<div class="col-md-3">${usuario.first_name}</div>
                        <div class="col-md-3">${usuario.last_name}</div>
                        <div class="col-md-3">${usuario.email}</div>
                        <div class="col-md-3"><img class="img-thumbnail" src="${usuario.avatar}"></div>`;
    divItem.classList.add('row');
    divItem.classList.add('border');
    divContainer.append(divItem);
};

export const init = async () => {
    crearUsuariosHtml();
    (await obtenerUsuarios()).forEach(dibujarUsuario);
};
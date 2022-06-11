import { Usuario, Publicacion } from "../model";
import { setUsuario,setPublicacion } from "..";
/*Asignacion para crear usuario */
const id_usuario = '0';
const Nombre = 'Duilio';
/*Asignacion para crear una publicacion */
const id_publicacion='0';
const detalle_publicacion='Bonita casa, dos cuartos, acabado en marmol, cajon de estacionamiento';
const imagen = 'Foto.png';
const direccion = 'Almendros #824 San Felipe del Agua';
const user_vendedor ='Duilio';

let NuevoUsuario = new Usuario(id_usuario,Nombre);
let NuevaPublicacion = new Publicacion(id_publicacion,detalle_publicacion,imagen,direccion,user_vendedor);

describe("Crear usuario si todo esta bien ",()=>{
  it('Error',() =>{
    expect (setUsuario('0','Duilio')).toStrictEqual(NuevoUsuario);
  })
})

describe("Generar publicacion si todo esta bien ",()=>{
  it('Error',() =>{
    expect (setPublicacion('0','Bonita casa, dos cuartos, acabado en marmol, cajon de estacionamiento','Foto.png','Almendros #824 San Felipe del Agua','Duilio')).toStrictEqual(NuevaPublicacion);
  })
})
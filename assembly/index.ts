import { logging, PersistentUnorderedMap, u128,PersistentVector} from "near-sdk-as";
import { Usuario, Usuarios_tabla } from "./model";
import { Publicacion, Todas_Publicaciones } from "./model";
import { Venta,Todas_Ventas } from "./model";
/* Variables axuxiliares para recorrer el array*/
const AuxUsuarios = Usuarios_tabla.length;
const AuxPublicacion = Todas_Publicaciones.length;
const AuxVenta = Todas_Ventas.length;

export function setUsuario(id_usuario: String, Nombre :String ): Usuario {
    const NewUser = new Usuario(id_usuario,Nombre);
    Usuarios_tabla.push(NewUser);
    logging.log("Usuario agregado");
    return NewUser;
}

export function getUsuarios(): Usuario []{
    const data = new Array<Usuario>(AuxUsuarios);
    for(let i=0;i<AuxUsuarios;i++){
        data[i]=Usuarios_tabla[i];
        logging.log(i);
    }
    return data;
}

export function buscarUsuario(SearchU: String): Usuario{
    const data = new Array<Usuario>(AuxUsuarios);
    for(let i=0;i<AuxUsuarios;i++){
        data[i]=Usuarios_tabla[i];
        if(data[i].Nombre==SearchU){
            return Usuarios_tabla[i];
        }    
    }
    logging.log("No existe el usuario")
    return Usuarios_tabla[AuxUsuarios+2];
}

export function setPublicacion(id_publicacion : String ,detalle_publicacion : String, imagen : String, direccion : String, user_vendedor : String): Publicacion{
    const NewPublicacion = new Publicacion (id_publicacion,detalle_publicacion,imagen,direccion,user_vendedor);
    Todas_Publicaciones.push(NewPublicacion);
    logging.log(" Publicacion generada con exito ");
    return NewPublicacion;
}

export function getPublicaciones(): Publicacion[]{
    const data = new Array<Publicacion>(AuxPublicacion);
    for(let i=0;i<AuxPublicacion;i++){
        data[i]=Todas_Publicaciones[i];
        logging.log(i);
    }
    return data;
}
export function buscarPublicacion(SearchP: String): Publicacion{
    const data = new Array<Publicacion>(AuxPublicacion);
    for(let i=0;i<AuxPublicacion;i++){
        data[i]=Todas_Publicaciones[i];
        if(data[i].id_publicacion==SearchP){
            return Todas_Publicaciones[i];
        }    
    }
    logging.log("No existe el usuario")
    return Todas_Publicaciones[AuxPublicacion+2];
}

export function setVenta(id_venta: String,detalle_venta: String):Venta{
    const NewVenta = new Venta(id_venta,detalle_venta);
    Todas_Ventas.push(NewVenta);
    logging.log("Detalle de la venta");
    return NewVenta;
} 

export function getVenta(): Venta[]{
    const data = new Array<Venta>(AuxVenta);
    for(let i=0;i<AuxVenta;i++){
        data[i]=Todas_Ventas[i];
        logging.log(i);
    }
    return data;
}
export function buscarVenta(SearchV: String): Venta{
    const data = new Array<Venta>(AuxVenta);
    for(let i=0;i<AuxVenta;i++){
        data[i]=Todas_Ventas[i];
        if(data[i].id_venta==SearchV){
            return Todas_Ventas[i];
        }    
    }
    logging.log("No existe el usuario")
    return Todas_Ventas[AuxVenta+2];
}
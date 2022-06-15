# iHome
iHome con tecnología web 3.0!
iHome es una aplicación que basa su existencia en la compraventa de cualquier tipo de bien, inmueble, terreno. Teniendo como característica que no toma mucho tiempo realizar una publicación de venta y así como búsquedas filtradas para que los usuarios puedan encontrar la mejor opción de compra.
***
## REQUISITOS 
* Node 12.0 o una version superior
* Yarn
* Cuenta de Near testnet
* Near Cli
* NPM
***
## INSTALACION 
1. Clonar el repositorio con ```git clone https://github.com/Near-University-Tec-de-Tlaxiaco/iHome.git&& cd iHome```
2. Ejecutamos ```yarn install```
3. Iniciamos sesion de la cuenta de near con ayuda de : ```near login```
4. Procedemos a compilar con ```yarn asb```
5. Posteriormente con el comando ```near deploy --accountId (cuenta de near testnet) --wasmFile build/release/iHome.wasm``` se implemneta
***
## Llamado de métodos
* Usuarios
```
near call (cuenta hijo o subcuenta) setUsuario '{"id_publicacion": "0", " Nombre" :  "Duilio"}' --accountId (cuenta de near testnet)
```
* Ver usuarios
```
 near call (cuenta hijo o subcuenta) getUsuario --accountId (cuenta de near testnet)
 ```
* Publicacion
```
near call (cuenta hijo o subcuenta) setPublicacion '{"id_publicacion": "0", " detalle_publicacion" : "Bonita casa, dos cuartos, acabado en marmol, cajon de estacionamiento",  "imagen" :"Foto.png", "direccion" : "Almendros #824 San Felipe del Agua", "user_vendedor": "Duilio"}' --accountId (cuenta de near testnet)
```
* Ver publicaciones
```
 near call (cuenta hijo o subcuenta) getPublicacion --accountId (cuenta de near testnet)
 ```
* Ventas
```
near call (cuenta hijo o subcuenta) setVenta '{"id_venta": "0", " detalle_venta" :  "Operacion exitosa"}' --accountId (cuenta de near testnet)
```
* Ver ventas
```
 near call (cuenta hijo o subcuenta) getVenta --accountId (cuenta de near testnet)
 ```

***
## AUTORES
- [Duilio Aquino](https://github.com/DuilioAquino10)
- [Rigoberto Suridai Pascual Reyes](https://github.com/kirus21)
- [Christopher Mayoral Velasco](https://github.com/christopheremv)

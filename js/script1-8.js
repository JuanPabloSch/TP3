// Ejercicio 1
let precio = 300;
let iva = 21;
let total = precio + (precio * iva / 100);
console.log ("El precio total con IVA es $ " + total);

// // Ejercicio 2
// let lado = 8;
// let area = lado * lado;
// let perimetro = lado * 4;
// console.log ("Lado del cuadrado " + lado);
// console.log ("Area del cuadrado " + area);
// console.log ("Perímetro del cuadrado " + perimetro);

// // Ejercicio 3
// let nombre = prompt ("Ingresá tu nombre");
// console.log ("Hola " + nombre);

// // Ejercicio 4
// let numero1 = parseInt(prompt("Ingresa el primer número "));
// let numero2 = parseInt(prompt("Ingresa el segundo número "));
// let numero3 = parseInt(prompt("Ingresa el tercer número "));
// let promedio = (numero1 + numero2 + numero3) / 3;
// console.log ("El promedio es " + promedio);

// // Ejercicio 5
// let litros = parseFloat(prompt("Ingrese los litros que fueron consumidos "));
// let kms = parseFloat(prompt("Ingrese los kilómetros que fueron recorridos "));
// let consumo = litros / kms;
// console.log ("El consumo por kilómetro es de " + consumo + " litros/km");

// // Ejercicio 6
// class Ficha {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.sesiones = [];
//         this.numsesiones = 0;
//     }
//     anotar(kms) {
//         this.sesiones.push(kms);
//         this.numsesiones++;
//     }
//     media() {
//         if (this.numsesiones === 0) {
//             return 0;
//         }
//         let suma = 0;
//         for (let i = 0; i < this.sesiones.length; i++) {
//             suma += this.sesiones[i];
//         }
//         return suma / this.numsesiones;
//     }
// }

// // sesion
// let ficha1 = new Ficha("Roberto");
// ficha1.anotar(3);
// ficha1.anotar(5);
// ficha1.anotar(4);
// console.log("Media de KMS recorridos por " + ficha1.nombre + " en " + ficha1.numsesiones + 
//     " sesiones es de " + ficha1.media() + " kms");

// // Ejercicio 7
// let clientes = [
//     {nombre: "Juan", email: "juan@gmail.com", telefono: "1137983020" },
//     {nombre: "Pablo", email: "pablo@gmail.com", telefono: "3885681228" },
//     {nombre: "Manuel", email: "manuel@gmail.com", telefono: "3876472359" },
// ];
// class Factura {
//     constructor(idCliente, total) {
//         this.idCliente = idCliente;
//         this.total = total;
//         this.estado = "pendiente";
//     }
//     cobrar() {
//         this.estado = "pagada"
//     }
//     imprimir() {
//     let cliente = clientes[this.idCliente];
//         console.log("Factura para " + cliente.nombre);
//         console.log("Email " + cliente.email);
//         console.log("Tel " + cliente.telefono);
//         console.log("Total $ " + this.total);
//         console.log("Estado " + this.estado);
//     }
// }

// // factura
// let factura1 = new Factura (0, 500);
// let factura2 = new Factura (1, 1528);
// let factura3 = new Factura (2, 5521);
// factura1.imprimir();
// console.log("");
// factura1.cobrar();
// factura1.imprimir();
// console.log("");
// factura2.imprimir();
// console.log("");
// factura2.cobrar();
// factura2.imprimir();
// console.log("");
// factura3.imprimir();
// console.log("");
// factura3.cobrar();
// factura3.imprimir();

// // Ejercicio 8
// class Proveedor {
//     constructor (nombre, email, telefono) {
//         this.nombre = nombre;
//         this.email = email;
//         this.telefono = telefono;
//     }
// }
// class Articulo {
//     constructor(nombre, precio, proveedor){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.proveedor = proveedor;
//     }
//     telefono() {
//         return {
//             nombreProveedor: this.proveedor.nombre,
//             telefono: this.proveedor.telefono
//         };
//     }
// }

// // testeo
// let proveedor1 = new Proveedor ("Distribuidora Noa", "noa@gmail.com", "3881487891");
// let articulo1 = new Articulo ("Lapicera", 500, proveedor1);
// let articulo2 = new Articulo ("Regla", 550, proveedor1);
// let info1 = articulo1.telefono();
// let info2 = articulo2.telefono();
// console.log("Artículo " + articulo1.nombre);
// console.log("Precio $ " + articulo1.precio);
// console.log("Proveedor " + info1.nombreProveedor);
// console.log("Teléfono " + info1.telefono);
// console.log("");
// console.log("Artículo " + articulo2.nombre);
// console.log("Precio $ " + articulo2.precio);
// console.log("Proveedor " + info2.nombreProveedor);
// console.log("Teléfono " + info2.telefono);
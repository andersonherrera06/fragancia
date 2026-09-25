document.getElementById("mensaje").textContent =
    "¡Bienvenido a mi catálogo!";
let productos = [

    {
        nombre: "BURBERRY",
        categoria: "Dama",
        precio: 25000,
        disponible: true
    },

    {
        nombre: "Amor Amor",
        categoria: "Dama",
        precio: 25000,
        disponible: true
    },

    {
        nombre: "TOMMY GIRL",
        categoria: "Dama",
        precio: 25000,
        disponible: true
    }

];

let catalogo = document.getElementById("catalogo");

productos.forEach(function(producto) {

    let tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>Categoría: ${producto.categoria}</p>
        <p>Precio: $${producto.precio}</p>
    `;

    catalogo.appendChild(tarjeta);

});

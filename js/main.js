class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
               
    }
}

const producto1 = new Producto(1, "Sillon", 23000, 1);
const producto2 = new Producto(2, "Escritorio", 85000, 1);
const producto3 = new Producto(3, "Mesa", 30000, 1);
const producto4 = new Producto(4, "Mesa2", 26000, 1);

const productos = [producto1, producto2, producto3, producto4];

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card","col-xl-3", "col-md-6", "col-sm-12");
    divProducto.innerHTML = `
                            <div>
                                <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-text"> ${producto.precio} </p>
                                    <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorProductos.appendChild(divProducto);
    //Agregar un evento al boton de agregar al carrito: 
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
    })
});
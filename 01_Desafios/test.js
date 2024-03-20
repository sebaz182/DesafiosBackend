const { clear } = require("console");
const ProductManager = require("./productManager");

const manager = new ProductManager();

// Agrego productos
console.log(manager.addProduct());
console.log(manager.addProduct("Producto 1", "Descripción del producto 1", 100, "thumbnail1.jpg", "P001", 50));
console.log(manager.addProduct("Producto 2", "Descripción del producto 2", 200, "thumbnail2.jpg", "P001", 200));
console.log(manager.addProduct("Producto 2", "Descripción del producto 2", 200, "thumbnail2.jpg", "P002", 200));
console.log(manager.addProduct("Producto 3", "Descripción del producto 3", 300, "thumbnail3.jpg", "P003", 30));

// Muestro Tabla de productos cargados
console.table(manager.getProducts());

// Busco productos por ID
console.log(manager.getProductById(2));
console.log(manager.getProductById(88));

// Busco productos por Codigo
console.log(manager.getProductByCode('P001'));
console.log(manager.getProductByCode('p111'));

// Agrego un cuarto producto
console.log(manager.addProduct("Producto 4", "Descripción del producto 4", 400, "thumbnail4.jpg", "P004", 420));

// Elimino el producto id 2
console.log(manager.deleteProduct(2));
// Elimino producto no existente
console.log(manager.deleteProduct(9999));

// Agrego un quinto producto
console.log(manager.addProduct("Producto 5", "Descripción del producto 5", 500, "thumbnail4.jpg", "P005", 5000));

// Actualizo un producto
const productUpdate =     {
    "id": 1000,
    "title": "Producto 1",
    "description": "Descripción del producto 1 v2   ",
    "price": 1000,
    "thumbnail": "thumbnail1++.jpg",
    "code": "P999",
    "stock": 5
}

// Actualizo producto no existente
console.log(manager.updateProduct(999, productUpdate));
console.log(manager.updateProduct(1, productUpdate));


// Muestro la tabla actualizada
console.table(manager.getProducts());


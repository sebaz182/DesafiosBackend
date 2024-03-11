const ProductManager = require("./productManager");

const manager = new ProductManager();

console.log(manager.addProduct());
console.log(manager.addProduct("Producto 1", "Descripción del producto 1", 100, "thumbnail1.jpg", "P001", 50));
console.log(manager.addProduct("Producto 2", "Descripción del producto 2", 200, "thumbnail2.jpg", "P001", 200));
console.log(manager.addProduct("Producto 2", "Descripción del producto 2", 200, "thumbnail2.jpg", "P002", 200));
console.log(manager.addProduct("Producto 3", "Descripción del producto 3", 300, "thumbnail3.jpg", "P003", 30));


console.table(manager.getProducts());

console.log(manager.getProductById(2));
console.log(manager.getProductById(88));

console.log(manager.getProductByCode('P001'));
console.log(manager.getProductByCode('p111'));

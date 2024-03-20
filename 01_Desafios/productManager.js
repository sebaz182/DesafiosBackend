const fs = require('fs');

class ProductManager {
    #products;
    // #idCounter;
    #path;

    constructor() {
        this.#path = './data/products.json';
        
        this.#products = this.#readProductsInFile();
        // this.#idCounter = 1;
    }

    #readProductsInFile(){
        try {
            if(fs.existsSync(this.#path))
                return JSON.parse(fs.readFileSync(this.#path, 'utf-8'));

            return [];
        } catch (error) {
            console.log(`Ocurrio un error al leer el archivo de productos ${error}`);
        }
    }

    #saveFile(){
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products))
        } catch (error) {
            console.log(`Ocurrio un error al grabar el archivo de productos ${error}`);
        }
    }

    #asigIdProduct(){
        let id = 1;
            if (this.#products.length != 0)
                id = this.#products[this.#products.length - 1].id + 1;
        return id;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock)
            return ('\n Debe ingresar todos los atributos del producto!!! \n');

        if (this.#products.some(p => p.code == code))
            return `\n El codigo ${code} ya existe \n`;

            const id = this.#asigIdProduct();
        
            const product = {
                id: id,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            };

            this.#products.push(product);
            this.#saveFile();
            // this.#idCounter++; // Incrementar el contador para el próximo ID
            return `\n Producto ${product.code} agregado exitosamente \n`;        
    }


    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const product = this.#products.find(p => p.id === id)
        if (product)
            return product;
        else
            return `\n El Producto ${id} no fue encontrado! \n`;
    }

    getProductByCode(code) {
        const product = this.#products.find(p => p.code === code)
        if (product)
            return product;
        else
            return `\n El Producto codigo ${code} no fue encontrado! \n`;
    }

    updateProduct(id, objetUpdate){
        let msg = `No encontramos el producto con id: ${id}`;

        const index = this.#products.findIndex(p=>p.id === id);

        if (index !== -1){
            const {id, ...rest} = objetUpdate;
            this.#products[index] = {...this.#products[index], ...rest};
            this.#saveFile();
            msg = `Producto fue actualizado`
        }

        return msg;
    }

    deleteProduct(id){
        let msg = `No encontramos el producto con id: ${id}`;

        const index = this.#products.findIndex(p=>p.id === id);

        if (index !== -1){
            this.#products = this.#products.filter(p=> p.id !== id);
            this.#saveFile();
            msg = `Producto id: ${id} Eliminado!`
        }

        return msg;
    }
}

module.exports = ProductManager;
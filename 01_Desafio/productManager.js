class ProductManager {
    #products;
    #idCounter;

    constructor() {

        this.#products = [];
        this.#idCounter = 1;

    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock)
            return ('\n Debe ingresar todos los atributos del producto!!! \n');

        if (this.#products.some(p => p.code == code))
            return `\n El codigo ${code} ya existe \n`;
        
            const product = {
                id: this.#idCounter,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            };

            this.#products.push(product);
            this.#idCounter++; // Incrementar el contador para el próximo ID
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

}

module.exports = ProductManager;
/*
Pregunta 2:
Genera un nuevo arreglo que:
- Contenga solo productos de la categoría 'electronics'.
- Devuelva un objeto con { id, priceWithTax } aplicando un impuesto del 19%.
*/

const products = [
    { id: 1, name: "Laptop", price: 900, category: "electronics" },
    { id: 2, name: "Shirt", price: 30, category: "clothing" },
    { id: 3, name: "Phone", price: 700, category: "electronics" },
    { id: 4, name: "Pants", price: 50, category: "clothing" },
  ];


// Solución:

function filterElectronics(productsArr){

    const filtered_products = [];

    productsArr.forEach((product) => {
        if(product.category === "electronics"){
            filtered_products.push({
                id: product.id,
                priceWithTax: product.price * 1.19
            })
        }
    })

    return filtered_products;
}

console.log(filterElectronics(products));
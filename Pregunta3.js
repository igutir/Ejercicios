/*
Pregunta 3:
Agrúpalos por categoría y genera el siguiente resumen:
{
  electronics: {
    totalStock: 17,
    averagePrice: 933.33,
    items: ["Laptop", "Phone", "TV"]
  },
  clothing: {
    totalStock: 35,
    averagePrice: 40,
    items: ["Shirt", "Pants"]
  }
}
Requisitos:
- Calcular totalStock sumando el stock por categoría.
- Calcular averagePrice con dos decimales.
- Incluir items como un arreglo con los nombres de los productos de esa categoría.
*/

const products = [
    { id: 1, name: "Laptop", price: 900, stock: 10, category: "electronics" },
    { id: 2, name: "Shirt", price: 30, stock: 20, category: "clothing" },
    { id: 3, name: "Phone", price: 700, stock: 5, category: "electronics" },
    { id: 4, name: "Pants", price: 50, stock: 15, category: "clothing" },
    { id: 5, name: "TV", price: 1200, stock: 2, category: "electronics" }
  ];

// Solución:

function productsSummary(products){

    //Genero un objeto vacío donde se guardarán las categorías
    const summary = {};

    //Genero un array para guardar las categorias sin repetir
    const categories = [];

    products.forEach(product => {
        if(!categories.includes(product.category)){
            categories.push(product.category);
        }
    });

    let filtered_products, total_stock, sum_prices, items;

    categories.forEach((category) => {

        filtered_products = [];
        total_stock = 0;
        sum_prices = 0;
        items = [];

        //obtengo los productos de la categoría actual 'category'
        filtered_products = products.filter(product => category === product.category)

        //calculo el stock usando reduce
        total_stock = filtered_products.reduce((total, filtered_product) => {
            return total + filtered_product.stock;
        }, 0);

        //calculo la suma de todos los productos de la categoría usando reduce
        sum_prices = filtered_products.reduce((total, filtered_product) => {
            return total + filtered_product.price;
        }, 0);

        //agrego los nombres de productos de la categoría al arreglo
        filtered_products.map(product => items.push(product.name));

        //creo la propiedad dentro del objeto con el nombre de la categoría y dentro la información solicitada
        summary[category] = {
            ['totalStock']: total_stock,
            ['averagePrice']: Number((sum_prices / items.length).toFixed(2)),
            ['items']: items
        }
    });

    return summary;
}

console.log(productsSummary(products));
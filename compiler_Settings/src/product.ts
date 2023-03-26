interface Product {
    price :number,
    name :string,
    quantity :number,
}



const printProductInformation =(product :Product):void =>{


    console.log(`${product.name}  - ${product.price}  `)
}
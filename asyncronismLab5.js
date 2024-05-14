//Crear objeto donde se va a almacenar la informacion del producto
const product = {
    name: "KOORUI 34 Inch Ultrawide Curved Gaming Monitor 144Hz WQHD 3440x1440, 21:9",
    price : 499.00,
    discount: "44%", 
    priceDiscounted: 279.99,
    reviews: 4.2,
    ratings: 225, 
    brand : "KOORUI", 
    resolution : "QHD Ultra Wide 1440p",
    screenSize: "34 Inches"
}
//Imprimir la info del producto
console.log(product)


function addList(process){ //Funcion de orden superior
    console.log("Se esta agregando tu producto a tu lista de compras")
    setTimeout(()=> {
        let infoProduct = product
        process(infoProduct) //Funcion que va a simular asincronismo
    },5000)
}

//Funcion que va a mostrar el resultado del asincronismo
const watchList = (data) => {
    data ? console.log("Tu producto fue agregado con exito")  : ("Continuar comprando")
}

//Llamada a la funcion de orden superior
addList(watchList)  

console.log("Ver productos similares")

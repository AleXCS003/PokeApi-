
//variable

//Información del producto almacenada en variables
let reviews = 4.5
var ratings = "1122 ratings"
const productInfo = {
    uses : "recording",
    brand : "MAONO",
    color: "black"
}

console.log(typeof productInfo)


//strings

let productPrice = 48.99
let productName =  "maono gaming usb Microphone"
let stock = true

if(productName.length >= 20){
    console.log("The product name is so long")
}else {
    console.log("The product name is short")
}

console.log(productName.toUpperCase())

console.log(`The new ${productName} has an incredible price only ${productPrice} dollars you can buy it, but do it now because its stock is ${stock}   `)


//Numbers

let price = 39
let count_reviews = "1510"

console.log(typeof price) //Mostrar el tipo de dato de la variable



//Conversion

//Conversion de str a tipo de dato entero
let Price = "49"
let new_price = Number.parseInt(Price);
console.log(new_price + 15.2);

//Conditionals

//Utilización de operadores ternacrios en base al tipo de entreaga del producto 
let delivery = "free delivery"
let order = delivery === "free delivery" ? "your order is going to be sent Wednesday" : "your order is going to be sent Sunday"
console.log(order)

//Loops

//Creación de un arreglo con los tipos de uso que se le da al producto
const usesForProduct = ["Podcasting", "Video", "Creation", "Online Chat"];
usesForProduct.forEach((use, position)=>{console.log(position +1 , use)} )


for(product of usesForProduct){
    console.log(product)
}

//Creación de un objeto con los planes de protección que ofrece el producto en Amazon
const proteccionPlanes = {
    protection3years : 5.99,
    protection5years: 7.99,
    asurionProtect: 16.99
}


for(plan in proteccionPlanes){
    console.log(proteccionPlanes[plan])
}

//Creación de la función maps para mostrar la información del arreglo usesForProduct
const uses = usesForProduct.map((use) => use.toUpperCase())
console.log(uses)


//Functions

//Función de tipo declarada
function newFuction(data){console.log(data)};

const colors = ["black", "white", "pink", "purple", "gray"];
newFuction(colors)

//Función de tipo expresada
const recommended = function(data){
    console.log(data)
}


recommended("It's gamer xd")


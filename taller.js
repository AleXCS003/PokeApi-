//Creacion del objeto
const product = {
    name: "Kolog_silicon_case",
    brand: "Generic",
    color: "Korok1",
    information: {
        dimension: "3.27 inches",
        weight: "1.06 ounces",
        serials: {
            asin: "B0CLCDR33Z",
            model: "3C-AC-0730018-APPro-Korok"
        }
    }
}

//Acceso y destructuracion de objetos
const { name, brand, color, information: { serials } } = product;
console.log(name, brand, color, serials);


//impresion del objeto completo
console.log(product)

//eliminar un par de clave y valor
delete product.color
console.log(product)

//congelar el objeto, me da un valor booleano true al aplicar los cambios
/*Object.freeze(product)
console.log(Object.isFrozen(product))
product.image="https://m.media-amazon.com/images/I/61U1gp-BV7L._AC_SL1500_.jpg"*/


//Usando seal, no agrega ni elimina pero realzia cambios dentro del objeto
Object.seal(product)
console.log(Object.isSealed(product))
product.brand="Apple"
console.log(product)

//copiar objetos
const producto = {
    nombre:"Zelda case",
    color1:"Kolog2"
}

const informacion = {
    dimensiones:"2.75 inch",
    peso:'0.05 pounds'
}

const todo = {...producto,...informacion}
console.log(todo)

//Usando this, para hacer referencia al contexto del objeto
const amazon = {
    nombre:"Zelda case",
    color1:"Kolog2",
    colors:["k2","k3","k4"],
    colorListo: ()=>{
        return `color listo ${this.colors[2]}`
    }
}

console.log(amazon.colorListo)

//obteniendo claves
console.log("Obtener las claves: ", Object.keys(amazon))
//obteniendo valores
console.log("Obtener los valores: ", Object.values(amazon))
//obteniendo claves y valores en un arreglo
console.log("Obtener las claves y valores en un arreglo: ", Object.entries(amazon))

//abreviando nombres para la creacion del objeto
const nom="case"
const prices="11.99"

const newProduct = {
    nom,
    prices
}

console.log(newProduct)

// Creación del arreglo
const product = [
    {
      name: "Kolog_silicon_case",
      brand: "Generic",
      color: "Korok1",
      information: {
        dimension: "3.27 inches",
        weight: "1.06 ounces",
        serials: {
          asin: "B0CLCDR33Z",
          model: "3C-AC-0730018-APPro-Korok",
        },
      },
    },
    24.84,
    "Funda para AirPods: específicamente animé de dibujos animados Korok diseñado para tu funda de carga Airpods Pro/Pro 2. ",
  ];
  
  // Accediendo a los elementeos
  console.log("Nombre del producto: " + product[0].brand);
  console.log("Descripción: " + product[2]);
  console.log("Modelo: " + product[0].information.serials.model);
  
  //Destructuración
  const [ObjInformacion, price, description] = product;
  console.log(
    `DESTRUCTURACIÓN:\nbrand:${ObjInformacion}\nPrice:${price}\nInformation:${description}`
  );
  
  product.length < 5
    ? console.log("El array es corto")
    : console.log("El array es largo");
  
  //Primera forma de iterar un arreglo
  for (let index = 0; index < product.length; index++) {
    const element = product[index];
    console.log("\n" + element + "\n");
  }
  //Segunda forma de iterar con el
  //método forEach
  product.forEach((i) => console.log(i));
  
  //Tercera forma de iterar
  //Método map (No modifica el arr) los valores se pueden guardar
  const newArr = product.map(i=>i+"map")
  console.log('\nArr con map: '+newArr);
  
  //Métodos para arrays
  //push() agrega elemento al final del arr
  product.push(14)
  //unshift() agrega elemento al inicio del arr
  product.unshift("inicio")
  
  //pop() elimina un elemento del final del arr
  product.pop()
  
  //shift() elimina un elemento al inicio del arr
  product.shift()
  
  //slice()  es una copia sombra del arr
  const copyArr = product.slice()
  console.log("CopyArr\n"+copyArr);
  
  //Array.isArray() Determina si es un array
  Array.isArray(copyArr)
  //.length Tamaño del array
  console.log('Arr product: \n');
  product.forEach((i) => console.log(i));
  
  //Rest operator
  const [objeto,...rest] = product
  console.log('***********************');
  
  console.log(objeto)
  console.log(rest)
  
  //Spread operator
  const ArrProduct_newArr = [...product, ...newArr];
  console.log("\nArrProduct_newArr:\n"+ArrProduct_newArr)
  
  
  
  

const  nombre_bouteilles = prompt("Entrer un nombre de bouteilles");

const nombreFois = nombre_bouteilles ;

if (nombreFois > 0) {
  console.log(`${nombreFois}  bottles of beer on the wall`);
  console.log(`${nombreFois}  bottles of beer`);
  console.log(`Take  ${nombre_bouteilles - nombreFois + 1} down, pass ${nombre_bouteilles -nombreFois + 1 > 1} ? them : it  around`);
  console.log(`${nombreFois - 1} bottles of beer on the wall `);
 
}


console.log("No more bottles of beer on the wall");
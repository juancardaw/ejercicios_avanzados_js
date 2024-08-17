const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];


function findArrayIndex(array, text) {
   for(i = 0; i < array.length; i++)
    if(text === array[i]){
        console.log("La posicion de ", text, " es el numero de indice dentro del array", i)
    }
}

findArrayIndex(mainCharacters, "Anakin");



// Ejercicio 4.1

const removeItem = (array, index) => {
  array.splice(index, 1);
  console.log("Hemos eliminado el elemento ", array[index], " de la lista que estaba en la posicion", index);
}

removeItem(mainCharacters, 5)
const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

const swap = (array, indexOne, indexTwo) => {
    const arrayTemporal = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = arrayTemporal;
    console.log(array)
    return array;
}

swap(fantasticFour, 1, 2)
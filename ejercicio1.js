const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

const resultadoFinal = [];

for(const peliculas of movies){
  for(const categorias of peliculas.categories){
    if(!resultadoFinal.includes(categorias)){
      resultadoFinal.push(categorias);
    }
  }
}
console.log(resultadoFinal)
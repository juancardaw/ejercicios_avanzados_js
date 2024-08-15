const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

  let volumenTotal = 0;
  let mediaTotal = 0;

  for(const usuarios of users){
    for(const volumen in usuarios.favoritesSounds){
      //console.log(usuarios.favoritesSounds[volumen].volume) //Asegurar que entro a los valores
      volumenTotal += usuarios.favoritesSounds[volumen].volume;
      mediaTotal++
    }
  }
//console.log(mediaTotal); //asegurar contador de media.
  const resultadoFinal = volumenTotal / mediaTotal;
  console.log(resultadoFinal);
  
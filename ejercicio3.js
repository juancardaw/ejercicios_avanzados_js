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

// waves, wind, firecamp, train, shower

  let totalCancionesFirecamp = 0;
  let totalCancionesShower = 0;
  let totalCancionesTrain = 0;
  let totalCancionesWaves = 0;
  let totalCancionesWind = 0;

  for(const usuarios of users){
    for(const canciones in usuarios.favoritesSounds){
      if(canciones === "waves"){
        totalCancionesWaves++;
      } else if(canciones === "wind"){
        totalCancionesWind++;
      } else if(canciones === "firecamp"){
        totalCancionesFirecamp++;
      } else if(canciones === "train"){
        totalCancionesTrain++;
      } else if(canciones === "shower"){
        totalCancionesShower++;
      }
    }
  }
  const cancionesTotal = {
    "Las canciones favoritas de Waves son": totalCancionesWaves,
    "Las canciones favoritas de Wind son": totalCancionesWind,
    "Las canciones favoritas de Firecamp son": totalCancionesFirecamp,
    "Las canciones favoritas de Train son": totalCancionesTrain,
    "Las canciones favoritas de Shower son": totalCancionesShower
  }
  console.log("Las canciones favoritas de los usuarios son las siguientes:", cancionesTotal)


  /* Otra forma de hacerlo mas facil seria--------------------------*/

  const cancionesTotal1 = [];

for(const usuarios of users){
    for(const canciones in usuarios.favoritesSounds){
        if(!cancionesTotal1[canciones]){
            cancionesTotal1[canciones] = 1;
        } else {
            cancionesTotal1[canciones]++;
        }
    }
}

console.log("Las canciones favoritas de los usuarios son: ", cancionesTotal1);
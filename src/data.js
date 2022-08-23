//Mostrar nombre de personajes con su imagen
export const showData = (films, requiredData) => {
  let allTheData = [];
  films.forEach(item => allTheData.push (item[requiredData].filter((requiredItem) => requiredItem.name)))
  return allTheData.flat ()
}

//Funcion orden A-Z
export const orderAZ = (requiredArray) => {
  return requiredArray.sort((a, b) => a.name.localeCompare(b.name));
}

//Funcion orden Z-A
export const orderZA = (requiredArray) => {
  return requiredArray.sort((a, b) => a.name.localeCompare(b.name)).reverse();
}

//Función trivia (elige un elemento al azar)
export const randomData = (item) => {
  return item[Math.floor(Math.random() * item.length)]
}

//Función estadísticas (genera estadísticas para cada valor)
export const statistics = (films, requiredData) => {
  //find matches on all the keys. 
  //buscar sus keys
  let allTheData = [];
  films.forEach(item => allTheData.push(item[requiredData].filter((requiredItem) => requiredItem.name)))
  allTheData = allTheData.flat();

  //Contador para estadísticas
  let counts = {};
  for (let i = 1; i < Object.keys(allTheData[0]).length; i++) {
    let filter = Object.keys(allTheData[0])[i]
    counts[filter] = {};
    for (let i = 0; i < allTheData.length; i++) {
      if (counts[filter][allTheData[i][filter]]) {
        counts[filter][allTheData[i][filter]] += 1
      } else {
        counts[filter][allTheData[i][filter]] = 1
      }
    }
  }
  return counts;
}


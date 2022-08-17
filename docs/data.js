
  //mostrar nombre de personajes con su imagen
export const showData = (films, requiredData) => {
  let allTheData = [];
  films.forEach(item => allTheData.push (item[requiredData].filter((requiredItem) => requiredItem.name)))
  return allTheData.flat ()
}

export const orderAZ = (requiredArray) => {
  return requiredArray.sort((a, b) => a.name.localeCompare(b.name));
}

export const orderZA = (requiredArray) => {
  return requiredArray.sort((a, b) => a.name.localeCompare(b.name)).reverse();
}
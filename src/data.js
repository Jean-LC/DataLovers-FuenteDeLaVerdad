
  //mostrar nombre de personajes con su imagen
export const showData = (films, requiredData) => {
  let allTheData = [];
  films.forEach(item => allTheData.push (item[requiredData].filter((requiredItem) => requiredItem.name)))
  return allTheData.flat ()
}

/*
//mostrar nombre de vehículos con su imagen
  export const showVehicles = (films) => {
    const items = films.map((item) => {
      return item.vehicles.map ((vehicles) => {
        return [vehicles.name, vehicles.img]
      })
    })
    return items
  }

//mostrar nombre de locaciones con su imagen
export const showLocations = (films) => {
  const items = films.map((item) => {
    return item.locations.map((locations) => {
      return [locations.name, locations.img]
    })
  })
  return items
}
*/



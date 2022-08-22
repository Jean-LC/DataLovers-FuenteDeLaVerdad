
//mostrar nombre de personajes con su imagen
export const showData = (films, requiredData) => {
  let allTheData = [];
  films.forEach(item => allTheData.push(item[requiredData].filter((requiredItem) => requiredItem.name)))
  return allTheData.flat()
}

export const orderAZ = (requiredArray) => {
  return requiredArray.sort((a, b) => a.name.localeCompare(b.name));
}

export const orderZA = (requiredArray) => {
  return requiredArray.sort((a, b) => a.name.localeCompare(b.name)).reverse();
}

export const statistics = (requiredArray) => {
  //find matches on all the keys. 
  let sorted_arr = [];
  requiredArray.forEach(item => {
    if (item.eye_color) {
      sorted_arr.push(item);
    }
  })
  sorted_arr = sorted_arr.sort((a, b) => a.eye_color.localeCompare(b.eye_color));
  console.log('the array', sorted_arr);

  let counts = {}
  for (let i = 0; i < sorted_arr.length; i++) {
    if (counts[sorted_arr[i].eye_color]) {
      counts[sorted_arr[i].eye_color] += 1
    } else {
      counts[sorted_arr[i].eye_color] = 1
    }
  }
  counts.totalCharacters = sorted_arr.length
  return counts; 

}
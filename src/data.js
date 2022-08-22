
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

export const statistics = (films, requiredData) => {
  //find matches on all the keys. 
//buscar sus keys
let allTheData = [];
films.forEach(item => allTheData.push(item[requiredData].filter((requiredItem) => requiredItem.name)))
allTheData = allTheData.flat();

console.log(Object.keys(allTheData[0]));
//hacer todo por acad una de su data

let allkeys = [];
for (let i = 0; i < Object.keys(allTheData[0]).length; i++) {
  allkeys.push(allTheData.sort((a, b) => a[Object.keys(allTheData[0])[i]].localeCompare(b[Object.keys(allTheData[0])[i]])));
}

console.log(allkeys);




  let sorted_arr = [];

  /*

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
  */

}
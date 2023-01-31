export function minBy(array, cb) {
  let min = array[0]; 
  for (let elm of array){
    if(cb(elm) < cb(min)){
      min = elm
    }
  }
  return min
}

export function maxBy(array, cb) {
  let max = array[0]; 
  for(let elm of array){
    if(cb(elm) > cb(max)){
      max = elm
    }
  }
  return max
}


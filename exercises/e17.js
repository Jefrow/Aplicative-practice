export function minBy(array, cb) {

  let newArray = getMin(array);

  function getMin(array) {
    let ageArray = []
    for (let elements of array) {
      ageArray.push(cb(elements));
    }
    return ageArray;
  }

  let min = Math.min(...newArray)

  for (let el of array) {
    if (cb(el) === min) {
      return el;
    }
  } 

}

export function maxBy(array, cb) {
  
  let newArray = getMax(array);

  function getMax(array) {
    let ageArray = []
    for (let elements of array) {
      ageArray.push(cb(elements));
    }
    return ageArray;
  }

  let min = Math.max(...newArray)

  for (let el of array) {
    if (cb(el) === min) {
      return el;
    }
  }

}


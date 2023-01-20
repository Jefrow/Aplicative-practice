export function minBy(array, cb) {

  let newArray = ageArray(array);

  function ageArray(array) {
    const ages = array.map((el) => {
      return cb(el);
    })
    return ages; 
  }

  let min = Math.min(...newArray)

  for (let el of array) {
    if (cb(el) === min) {
      return el;
    }
  } 

}

export function maxBy(array, cb) {
  
  let newArray = ageArray(array);

  function ageArray(array) {
    const ages = array.map((el) => {
      return cb(el);
    })
    return ages; 
  }

  let max = Math.max(...newArray)

  for (let el of array) {
    if (cb(el) === max) {
      return el;
    }
  }

}


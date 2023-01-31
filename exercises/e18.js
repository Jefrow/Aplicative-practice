import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  let yearsDiscovered = data.asteroids.map(asteroids => asteroids.discoveryYear)

  let maxCount = 0;
  let maxOccur;

  for (let i = 0; i < yearsDiscovered.length; i++) {
    let count = 0;
    for (let j = 0; j < yearsDiscovered.length; j++) {
      if (yearsDiscovered[i] == yearsDiscovered[j])
        count++
    }
    if (count > maxCount) {
      maxCount = count;
      maxOccur = yearsDiscovered[i];
    }
  }

  return maxOccur;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

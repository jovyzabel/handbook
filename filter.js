function filter(array, callback) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    
    return result;
  }


    const numbers = [1, 2, 3, 4, 5];
    // const evenNumbers = filter((number, index, array) => number % 2 === 0); 
    const evenNumbers = filter(numbers, num => num % 2 === 0);
    console.log(evenNumbers); // [2, 4]

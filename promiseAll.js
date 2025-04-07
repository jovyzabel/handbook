/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {

    return new Promise((resolve, reject)=>{
  
      const promises = Array.from(iterable);
      const results = [];
      let completedCount = 0;
  
      if(promises.length == 0){
        resolve(results);
        return;
      }
  
      promises.forEach((promise, i) =>{
        Promise.resolve(promise)
        .then((value) => {
            results[i] = value;
            completedCount++;
            if(completedCount == promises.length)resolve(results);
            
        })
        .catch(reason => {
            reject(reason);
        });
      });
  
    }) ;
    
  }
  
  // Resolved example.
  const p0 = Promise.resolve(3);
  const p1 = 42;
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 100);
  });
  
  promiseAll([p0, p1, p2]); // [3, 42, 'foo']
  
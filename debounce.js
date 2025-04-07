/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timer;
    
    return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }
  
  let i = 0;
  function increment() {
    i++;
  }
  const debouncedIncrement = debounce(increment, 100);
  
  debouncedIncrement(); // i = 0
  
  setTimeout(debouncedIncrement(),200) ;
  
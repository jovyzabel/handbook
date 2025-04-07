/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    const result = [];
    
    for (const item of value) {
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } else {
        result.push(item);
      }
    }
    
    return result;
  }
  // Single-level arrays are unaffected.
  flatten([1, 2, 3]); // [1, 2, 3]
  
  // Inner arrays are flattened into a single level.
  flatten([1, [2, 3]]); // [1, 2, 3]
  flatten([
    [1, 2],
    [3, 4],
  ]); // [1, 2, 3, 4]
  
  // Flattens recursively.
  flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
  
  
  
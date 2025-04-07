/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items = [], options = {}) {
    let filteredItems = items.filter(item => item !== '');
    
    // Apply unique option if specified
    if (options.unique) {
      filteredItems = [...new Set(filteredItems)];
    }
    
    // Apply sorted option if specified
    if (options.sorted) {
      filteredItems = [...filteredItems].sort();
    }
    
    // Handle empty array case
    if (filteredItems.length === 0) {
      return '';
    }
    
    // Handle single item case
    if (filteredItems.length === 1) {
      return filteredItems[0];
    }
    
    // Apply length option if valid
    let displayedItems = filteredItems;
    let remainingCount = 0;
    
    if (options.length && options.length > 0 && options.length < filteredItems.length) {
      displayedItems = filteredItems.slice(0, options.length);
      remainingCount = filteredItems.length - options.length;
    }
    
    // Format the output string
    if (displayedItems.length === 2) {
      return `${displayedItems[0]} and ${displayedItems[1]}`;
    }
    
    const lastItem = displayedItems.pop();
    let result = displayedItems.join(', ');
    
    if (remainingCount > 0) {
      result += ` and ${remainingCount} ${remainingCount === 1 ? 'other' : 'others'}`;
    } else {
      result += ` and ${lastItem}`;
    }
    
    return result;
  }
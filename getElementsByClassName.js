/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNames) {
    // Parse the class names string into an array
    const classesToMatch = classNames.trim().split(/\s+/);
    
    // Initialize results array
    const results = [];
    
    // Recursively traverse the DOM tree
    function traverseElements(currentElement) {
      // Skip the text nodes and other non-element nodes
      if (currentElement.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      
      // Skip the root element since we only want descendants
      if (currentElement !== element) {
        // Check if the current element has all the required classes
        const hasAllClasses = classesToMatch.every(className => 
          currentElement.classList.contains(className)
        );
        
        if (hasAllClasses) {
          results.push(currentElement);
        }
      }
      
      // Recursively process all child nodes
      const childNodes = currentElement.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        traverseElements(childNodes[i]);
      }
    }
    
    // Start the traversal from the root element
    traverseElements(element);
    
    return results;
  }
  
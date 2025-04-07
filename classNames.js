/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    const classes = [];
    
    function processArg(arg) {
      // Ignore falsey values
      if (!arg) {
        return;
      }
      
      if (typeof arg === 'string' || typeof arg === 'number') {
        classes.push(arg);
        return;
      }
      
      if (Array.isArray(arg)) {
        arg.forEach(processArg);
        return;
      }
      
      // Handle objects
      if (typeof arg === 'object') {
        // Just iterate over the object's own properties directly
        for (const key in arg) {
          
          if (arg[key]) {
            classes.push(key);
          }
        }
        return;
      }
    }
    
    // Process all arguments
    args.forEach(processArg);
    
    // Join the classes with a space
    return classes.join(' ').trim();
  }
  
  classNames('foo', 'bar'); // 'foo bar'
  classNames('foo', { bar: true }); // 'foo bar'
  classNames({ 'foo-bar': true }); // 'foo-bar'
  classNames({ 'foo-bar': false }); // ''
  classNames({ foo: true }, { bar: true }); // 'foo bar'
  classNames({ foo: true, bar: true }); // 'foo bar'
  classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
  
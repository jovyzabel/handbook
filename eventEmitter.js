// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

export default class EventEmitter {

    constructor() {
      this.events = {};
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
      if(!this.events[eventName])
        {
          this.events[eventName] = [];
        }
     this.events[eventName].push(listener);
     return this;
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
      if (!this.events[eventName]) {
        return this;
      }
      
      // Filter out the specified listener
      this.events[eventName] = this.events[eventName].filter(
        eventFn => eventFn !== listener
      );
      
      // Return this for method chaining
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
      if (!this.events[eventName] || this.events[eventName].length === 0) {
        return false;
      }
      
      // Call each listener with the provided arguments
      this.events[eventName].forEach(listener => {
        listener(...args);
      });
      
      return true;
    }
  }
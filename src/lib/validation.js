const _ = require("lodash");  
function isFunction (obj){
  return _.isFunction(obj);//Object.prototype.toString.call(obj) == '[object Function]';
}

function containsProperty (obj, PropertyName){
  return obj.hasOwnPropery(PropertyName);
}
export { isFunction,containsProperty}
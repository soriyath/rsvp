import moment from 'moment';

const Utils = function(){
  let singleton;
  // private section

  const createSingleton = function(){
    // private section
    let API = {
      log : function(level, sender, msg) {
        console.log(`${moment().format()}, ${level}, ${sender}, ${msg}`);
      }
    };

    return API;
  };

  let getSingleton = function(){
    return singleton = singleton || createSingleton();
  };

  return getSingleton();
}();

export default Utils;

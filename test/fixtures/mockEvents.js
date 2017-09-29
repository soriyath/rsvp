import moment from 'moment';
import rsvpEvent from '../../src/commons/rsvpEvent';

const MockEvents = function(){
  let singleton;
  const _events = [
    new rsvpEvent(0,"title1","2017-04-22","18:30","Dummy event 1",["user1","user2","user3"]),
    new rsvpEvent(1,"title2","2017-08-22","18:30","Dummy event 2",["user1","user2","user3"]),
    new rsvpEvent(2,"title3","2017-05-22","18:30","Dummy event 3",["user1","user2"]),
    new rsvpEvent(3,"title4","2017-04-22","18:30","Dummy event 4",["user1","user2","user3"]),
    new rsvpEvent(4,"title5","2018-12-23","18:30","Dummy event 5",["user2","user3"]),
    new rsvpEvent(5,"title6","2018-06-12","18:30","Dummy event 6",[]),
    new rsvpEvent(6,"title7","2018-06-12","18:30","Dummy event 7",[])
  ];

  const createSingleton = function(){
    // private section
    let API = {
      getEvents : function(){
        return _events;
      }
    };

    return API;
  };

  let getSingleton = function(){
    return singleton = singleton || createSingleton();
  };

  return getSingleton();
}();

export default MockEvents;

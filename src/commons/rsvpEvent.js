// new RSVPEvent(3,"title4","2017-04-22","18:30","Dummy event 4",["user1","user2","user3"]),

const rsvpEvent = (id, title, date, time, desc, participants) => {

  return {
    id,
    title,
    date,
    time,
    desc,
    participants
  };

};

export default rsvpEvent;

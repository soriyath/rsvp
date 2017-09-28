import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Utils from '../utils';

// POJO
import MockEvents from '../../test/fixtures/mockEvents';

class ListEvents extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      events : MockEvents.getEvents()
    };
    console.table(this.state.events);
  }

  render() {
    const {events} = this.state;

    return (
      <ul>
        {Utils.arrayHasElements(events) && events.map((e, id, arr) => {
          return <li>{e.title} - {e.date}</li>;
        })}
      </ul>
    );
  }

}

export default ListEvents;

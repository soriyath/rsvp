import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Utils from '../utils';

// POJO
import MockEvents from '../../test/fixtures/mockEvents';

// UI Stuff
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const styles = {
  listItem : {
    borderBottom : "1px solid grey"
  }
};

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
      <List>
        {Utils.arrayHasElements(events) && events.map((e, id, arr) => {
          return (
            <ListItem style={styles.listItem} primaryText={`${e.title} - ${e.date}`} leftIcon={<ActionGrade />} />
          );
        })}
      </List>
    );
  }

}

export default ListEvents;

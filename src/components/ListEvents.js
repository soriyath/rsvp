//@flow
import React, {Component} from 'react'
import Utils from '../utils'

// POJO
import MockEvents from '../../test/fixtures/mockEvents'

// UI Stuff
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Grade from '@material-ui/icons/Grade'

const styles = {
  listItem : {
    borderBottom : "1px solid grey"
  }
}

class ListEvents extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      events : MockEvents.getEvents()
    }
    console.table(this.state.events)
  }

  render() {
    const {events} = this.state

    return (
      <List>
        {events.map(({title, date}, idx) => {
          return (
            <ListItem style={styles.listItem} key={idx}>
              <ListItemIcon><Grade /></ListItemIcon>
              <ListItemText primary={`${title} - ${date}`} />
            </ListItem>
          )
        })}
      </List>
    )
  }

}

export default ListEvents

import React, {Component} from 'react'
import Utils from '../utils'

// POJO
import MockEvents from '../../test/fixtures/mockEvents'

// UI Stuff
import {List, ListItem} from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ActionInfo from '@material-ui/icons'
import ActionGrade from '@material-ui/icons'

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
        {events.map((e, id, arr) => {
          return (
            <ListItem style={styles.listItem} primaryText={`${e.title} - ${e.date}`} leftIcon={<ActionGrade />} />
          )
        })}
      </List>
    )
  }

}

export default ListEvents

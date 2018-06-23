// import React, {Component} from 'react';
// class Sth extends Component{...}
//
// import React from 'react';
// class Sth extends React.Component {...};

// // Array destructuring
// // object destructuring
// // spread operator
// const arr = [0,1,2,3,4];
// const [firstNumber, ...rest] = arr; // firstNumber is equal to 0, rest is equal to [1,2,3,4]

// @flow

import React, {Component} from 'react';

// UI Stuff
import {AppBar, Typography} from '@material-ui/core';

class Navbar extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        title : props.title || "No Title Error"
      };
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return false;
  // }

  // see lifecycle methods: https://facebook.github.io/react/docs/react-component.html
  componentWillMount(){
    this.setState({
      title : "The Chimpanze Company"
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.title != nextProps.title){
      this.setState({
        title : nextProps.title
      })
    }
  }

  render(){
    // i can have some logic here

    return ( // JSX starts here
      <div className="navbar" position='static' color='default'>
        <AppBar>
          <Typography variant="title" color="inherit">
            {this.state.title}
          </Typography>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
};

export default Navbar;

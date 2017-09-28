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

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  render(){
    // i can have some logic here

    return ( // JSX starts here
      <header className="navbar">I am a Navbar</header>
    );
  }
};

export default Navbar;

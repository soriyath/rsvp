import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Synthetic events: see https://facebook.github.io/react/docs/events.html

const Footer = (props) => {
  return ( // JSX starts here
    <footer className="footer">
      &copy;{moment().format("YYYY")}
      <span onClick={props.onChange}> {/* onClick is a synthetic event */}
        {props.companyName}
      </span>
    </footer>
  );
};

Footer.propTypes = {
  companyName : PropTypes.string.required,
  onChange : PropTypes.func.required
};

export default Footer;

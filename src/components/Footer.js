import React from 'react';
import moment from 'moment';

const Footer = (props) => {
  return ( // JSX starts here
    <footer className="footer">
      &copy;{moment().format("YYYY")} The Monkey Company
    </footer>
  );
};

export default Footer;

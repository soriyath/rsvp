import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// UI Stuff
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

// Synthetic events: see https://facebook.github.io/react/docs/events.html

const styles = {
  toolbar : {
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    alignItems: "center"
  }
};

const Footer = (props) => {
  return ( // JSX starts here
    <Toolbar style={styles.toolbar}>
      <footer className="footer">
          &copy;{moment().format("YYYY")}
          <span onClick={props.onChange}> {/* onClick is a synthetic event */}
            {props.companyName}
          </span>
      </footer>
    </Toolbar>
  );
};

Footer.propTypes = {
  companyName : PropTypes.string.required,
  onChange : PropTypes.func.required
};

export default Footer;

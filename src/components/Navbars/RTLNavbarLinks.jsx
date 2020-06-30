import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Dashboard from "@material-ui/icons/Dashboard";

import rtlHeaderLinksStyle from "../../assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <Dashboard className={classes.icons} />
    );
  }
}

export default withStyles(rtlHeaderLinksStyle)(HeaderLinks);

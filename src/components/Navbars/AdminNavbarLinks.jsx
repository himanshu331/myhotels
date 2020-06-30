import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Dashboard from "@material-ui/icons/Dashboard";
import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dashboard className={classes.icons}/>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);

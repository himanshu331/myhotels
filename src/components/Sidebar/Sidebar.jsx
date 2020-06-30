import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// core components
import AdminNavbarLinks from "../../components/Navbars/AdminNavbarLinks.jsx";
import RTLNavbarLinks from "../../components/Navbars/RTLNavbarLinks.jsx";

import sidebarStyle from "../../assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

import CheckboxLabels from "../Checkbox/Checkbox.jsx"
const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  const hotel = [
  {type:"5 star",name:"5 star"},
  {type:"4 star", name:"4 star"}, 
  {type:"3 star", name:"3 star"}, 
  {hotelType:"Hotel", name:"Hotel"}, 
  {hotelType:"Villa", name:"Villa"}, 
]
  const { classes, image, logoText } = props;

  const handleSelect = (value) =>{
    console.log("value",value)
    props.handleSelect(value); 
  }
  var links = (
    <List className={classes.list}>
      {hotel.map((prop, key) => {
        console.log("prop",prop)
        var listItemClasses;
        return (
            <ListItem className={classes.itemLink + listItemClasses}>
              <CheckboxLabels onSelect={handleSelect} value={prop}>
              </CheckboxLabels>
              <ListItemText
                primary={prop.name}
                style={{backgroundColor: "blue"}}
              />
            </ListItem>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.creative-tim.com"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
      >
        {/* <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div> */}
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);

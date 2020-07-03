import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
// core components
import AdminNavbarLinks from "../../components/Navbars/AdminNavbarLinks.jsx";
import RTLNavbarLinks from "../../components/Navbars/RTLNavbarLinks.jsx";

import sidebarStyle from "../../assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

import CheckboxLabels from "../Checkbox/Checkbox.jsx"
import Ranger from "../Ranger/Ranger.jsx"
const Sidebar = ({ ...props }) => {
  const [values, setValues] = React.useState([0]);
  // verifies if routeName is the one active (in browser input)
  const hotel = [
    { ranger: "sss" },
    { type: "5 star", name: "5 star", category: "Star Category" },
    { type: "4 star", name: "4 star" },
    { type: "3 star", name: "3 star" },
    { hotelType: "Hotel", name: "Hotel", category: "Property Category" },
    { hotelType: "Villa", name: "Villa" },
    { facility: "Wifi", name: "Wifi", category: "Facility" },
    { facility: "Parking", name: "Parking" }
  ]
  const arrayList = {
    starCategory: [],
    propertyCategory: [],
    facility: [],
    priceRange: []
  };
  const { classes, image, logoText } = props;

  const handleSelect = (value) => {
    props.handleSelect(value);
  }

  const handleChildClick = (value) => {
    setValues(value)
    arrayList.priceRange.push(value)
    props.handleSelect(arrayList);
  }
  var links = (
    <List className={classes.list}>
      {hotel.map((prop, key) => {
        return (
          <div>
            {prop.ranger ? <Ranger show={true} onChildClick={handleChildClick}></Ranger> : ''}
            {prop.ranger ? <div style={{ width: "100%" }}> <span style={{ marginLeft: "30px", color: "white", width: "50%" }}>INR {values}</span><span style={{ marginLeft: "55px", color: "white", width: "50%" }}>INR 10000</span></div> : <span style={{ height: "50px" }}></span>}
            {prop.category ? <div style={{ color: "gold", marginLeft: "30px", height: "35px", marginTop: "10px" }}>
              <b></b>{prop.category ? <span style={{}}
              >{prop.category}</span> : ''}
            </div> : ''}
            {prop.name ? <div style={{ marginLeft: "20px" }}>
              <CheckboxLabels onSelect={handleSelect} value={prop}>
              </CheckboxLabels>
              <span style={{ color: "white" }}>
                {prop.name}
              </span>
            </div> : ''}
          </div>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <span className={classNames(classes.logoLink, {
        [classes.logoLinkRTL]: props.rtlActive
      })}>
        {logoText}
      </span>
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

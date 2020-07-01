import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import image from "../../assets/img/hotel.jpg";
import resortimage from "../../assets/img/anmol-hotel.jpg";
import markushotel from "../../assets/img/markus-hotel.jpg";
import wifi from "../../assets/img/wifi.png";
import garage from "../../assets/img/garage.png";
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
const hotels = [
  { id: 1, name: "Ramaya", location: "delhi", hotelType: "Hotel", type: "3 star", wifi: "Wifi", parking: "Parking", price: "8774" },
  { id: 2, name: "Taj", location: "Banglore", hotelType: "Hotel", type: "5 star", wifi: "", parking: "Parking", price: "7794" },
  { id: 3, name: "Golden Tulip", location: "Gurgaon", hotelType: "Villa", type: "4 star", wifi: "Wifi", parking: "", price: "9999" },
  { id: 4, name: "Lemon Tree", location: "Goa", hotelType: "Hotel", type: "4 star", wifi: "Wifi", parking: "Parking", price: "5999" },
  { id: 5, name: "Hotel Royal", location: "paundechery", hotelType: "Hotel", type: "5 star", wifi: "", parking: "Parking", price: "8599" },
  { id: 6, name: "Vivanta", location: "Gurgaon", hotelType: "Hotel", type: "4 star", wifi: "Wifi", parking: "Parking", price: "6999" },
  { id: 7, name: "Urja Resort", location: "pune", hotelType: "Villa", type: "5 star", wifi: "Wifi", parking: "", price: "4999" },
  { id: 8, name: "Hotel Campal", location: "Hydrebad", hotelType: "Hotel", type: "3 star", wifi: "", parking: "Parking", price: "10999" },
  { id: 9, name: "Hotel City Comfort", location: "Delhi", hotelType: "Hotel", type: "3 star", wifi: "Wifi", parking: "Parking", price: "4999" },
  { id: 10, name: "Grand Vatika Resort", location: "Gurgaon", hotelType: "Villa", type: "4 star", wifi: "Wifi", parking: "Parking", price: "6899" },
]
let newList = [];

export class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    console.log("props........", props)
    this.state = {
      value: 0,
      hotelList: []
    }
    newList.push(...hotels)
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  handleChangeIndex(index) {
    this.setState({ value: index });
  };
  render() {
    let selectedList = this.props.listNameFromParent[0]
    console.log("selectedList",selectedList)
    console.log("selectedList",selectedList)
    if (selectedList && selectedList.length > 0) {
      newList = []
      let listt = []
      hotels && hotels.forEach(hotel=>{
        let found = true;
        const keys = Object.keys(hotel);
        const values = keys.map(key=>{
          return hotel[key];
        })
        selectedList.forEach(list=>{
          console.log("list",list)
          newList = []
          if(typeof list !== 'number'){
          if(!values.includes(list)){
            console.log("false")
            found = false;
          }else{
            console.log("true")
            found = true
          }
        }else{
          console.log("else")
          if(list>=parseInt(hotel.price)){
            found = true
          }else{
            found = false;
          }
        }
        console.log("found",found)
        if(found)
          listt.push(hotel)
        })
        console.log("found",found)
        // if(found)
        //   listt.push(hotel)
      })
      console.log("list",listt)
      console.log("hotels",hotels)
      newList.push(...listt)
      console.log("newList",newList)
    } else {
      newList = []
      newList.push(...hotels)
    }
    return ( <div>
      {newList && newList.map((prop, index) => {
          console.log("prop+++++++", prop, index)
          return (<div style={{ width: "800px", height: "200px", paddingTop: "10px", border: "1px solid grey", marginTop: "2px" }}>
            <div style={{ width: "30%", height: "100px", float: "left", paddingLeft: "10px" }}>
              {prop.id === 10 || prop.id === 3 || prop.id === 6 || prop.id === 9 ? <img style={{ width: "200px", height: "180px" }} alt="image1" src={image}></img> : ''}
              {prop.id === 1 || prop.id === 4 || prop.id === 7 ? <img style={{ width: "200px", height: "180px" }} alt="image11" src={resortimage}></img> : ''}
              {prop.id === 2 || prop.id === 5 || prop.id === 8 ? <img style={{ width: "200px", height: "180px" }} alt="image12" src={markushotel}></img> : ''}
            </div>
            {console.log("========================", prop.type)}
            <div style={{ width: "70%", height: "150px", float: "right" }}>
              <div style={{ marginLeft: "20px", height: '120px', width: "350px", textAlign:"center", float: "left" }}>
                <h4 style={{ color: "green"}}><b>{prop.name}</b></h4>
                <div>
                  <span>{prop.type}</span>
                  <span style={{ paddingLeft: "20px" }}>{prop.hotelType}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  {prop.wifi === "Wifi" ? <img style={{ width: "20px" }} alt="imageProp" src={wifi}></img> : ''}
                  {prop.wifi === "Wifi" ? <span>{"wifi"}</span> : ""}
                  {prop.parking ? <img style={{ width: "20px", marginLeft: "20px" }} alt="image2" src={garage}></img> : ''}
                  {prop.parking ? <span>{"parking"}</span> : ""}
                </div>
              </div>
              <div style={{ width: "140px", height: '180px', float: "right", backgroundColor: "lightgrey", textAlign: "center" }}>
                <h5 ><b>INR{prop.price}</b></h5>
                <span>per night</span>
              </div>
            </div>
          </div>)
        })}
        </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

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
  {id:1, name:"Ramaya", location:"delhi", hotelType:"Hotel", type:"3 star", wifi:true, parking: true, price:"8,774"},
  {id:2, name:"Taj", location:"Banglore", hotelType:"Hotel", type:"5 star", wifi:true, parking: true, price:"7,794"},
  {id:3, name:"Golden Tulip", location:"Gurgaon", hotelType:"Villa", type:"4 star", wifi:true, parking: false, price:"9,999"},
  {id:4, name:"Lemon Tree", location:"Goa", hotelType:"Hotel", type:"4 star", wifi:false, parking: true, price:"5,999"},
  {id:5, name:"Hotel Royal", location:"paundechery", hotelType:"Hotel", type:"5 star", wifi:true, parking: true, price:"8,599"},
  {id:6, name:"Vivanta", location:"Gurgaon", hotelType:"Hotel", type:"4 star", wifi:false, parking: true, price:"6,999"},
  {id:7, name:"Urja Resort", location:"pune", hotelType:"Villa", type:"5 star", wifi:true, parking: true, price:"4,999"},
  {id:8, name:"Hotel Campal", location:"Hydrebad", hotelType:"Hotel", type:"3 star", wifi:false, parking: true, price:"10,999"},
  {id:9, name:"Hotel City Comfort", location:"Delhi", hotelType:"Hotel", type:"3 star", wifi:true, parking: true, price:"4,999"},
  {id:10, name:"Grand Vatika Resort", location:"Gurgaon", hotelType:"Villa", type:"4 star", wifi:true, parking: true, price:"6,899"},
]

let newList = [];

export class Dashboard extends React.Component {
  constructor(props){
    super(props)
    console.log("props........",props)
    this.state = {
      value: 0,
      hotelList: []
    }
    newList.push(...hotels)
  }

  handleChange(event, value){
    this.setState({ value });
  };

  handleChangeIndex(index) {
    this.setState({ value: index });
  };
  render() {
  let selectedList = this.props.listNameFromParent[0]
  let listHotels = []
  if(selectedList && selectedList.length>0){
  selectedList && selectedList.forEach(element=>{
    hotels && hotels.forEach(hotelElement=>{
      console.log("hotelElement",hotelElement)
    if(element === hotelElement.type){
      console.log("element--------",hotelElement)
      newList = []
      listHotels.push(hotelElement)
    }
    if(element === hotelElement.hotelType){
      newList = []
      listHotels.push(hotelElement)
    }
  })

    })
    newList.push(...listHotels)
  }else{
    newList = []
    newList.push(...hotels)
  }
    return (
      <div>
      {newList && newList.forEach((prop, index) => {
        console.log("prop+++++++",prop, index)
        return <div style={{width:"800px",height:"200px",paddingTop:"10px", border: "1px solid grey", marginTop:"2px"}}>
          <div style={{width:"30%",height:"100px",float: "left", paddingLeft:"10px"}}>
            {prop.id===10 || prop.id===3 || prop.id===6 || prop.id===9?<img style={{width:"200px",height:"180px"}} alt="image1" src={image}></img>:''}
            {prop.id===1 || prop.id===4 || prop.id===7?<img style={{width:"200px",height:"180px"}} alt="image11" src={resortimage}></img>:''}
            {prop.id===2 || prop.id===5 || prop.id===8?<img style={{width:"200px",height:"180px"}} alt="image12" src={markushotel}></img>:''}
          </div>
          <div style={{width:"70%",height:"150px",float: "right"}}>
            <div style={{marginLeft:"20px", height: '120px', width:"180px",float: "left" }}>
            <h4>{prop.name}</h4>
            <div>
            <span>{prop.type}</span>
            <span style={{paddingLeft:"20px"}}>{prop.hotelType}</span>
            </div>
            <div style={{marginTop:"10px"}}>
            {prop.wifi?<img style={{width:"20px"}} alt="imageProp" src={wifi}></img>:''}
              {prop.wifi?<span>{"wifi"}</span>:""}
              {prop.parking?<img style={{width:"20px", marginLeft:"20px"}} alt="imagegarage" src={garage}></img>:''}
              {prop.parking?<span>{"parking"}</span>:""}
            </div>
            </div>
            <div style={{ width:"140px", height: '180px', float: "right", backgroundColor:"lightgrey", textAlign:"center"}}>
            <h5 ><b>INR{prop.price}</b></h5>
            <span>per night</span>
            </div>
          
            
          </div>
          </div>
      })
    }
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

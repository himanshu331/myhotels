import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
const arrayList = {
  starCategory: [],
  propertyCategory: [],
  facility: []
};

// export default function CheckboxLabels() {
  export default class CheckboxLabels extends React.Component {
    constructor(props){
      super(props);
      // console.log("props",props)
      this.state = {
        checkedHotel: false
      } 
      this.handleChange = this.handleChange.bind(this)
    }
   
  
    handleChange(event) {
      console.log("event.target.name",event.target.name)
      this.setState({checkedHotel: event.target.checked });
      if(event.target.checked){
        if(event.target.name === "5 star" || event.target.name === "4 star" || event.target.name === "3 star"){
          arrayList.starCategory.push(event.target.name)
        }else if(event.target.name === "Hotel" || event.target.name === "Villa"){
          arrayList.propertyCategory.push(event.target.name)
        }else{
          arrayList.facility.push(event.target.name)
        }
      }else{
        if(event.target.name === "5 star" || event.target.name === "4 star" || event.target.name === "3 star"){
      arrayList && arrayList.starCategory.forEach((e, index)=>{
        if(e === event.target.name){
          console.log("rrrrrrrrrrrr",e)
          arrayList.starCategory.splice(index, 1);
        }
      })
    }
    else if(event.target.name === "Hotel" || event.target.name === "Villa"){
      arrayList && arrayList.propertyCategory.forEach((e, index)=>{
        if(e === event.target.name){
          console.log("rrrrrrrrrrrr",e)
          arrayList.propertyCategory.splice(index, 1);
        }
      })
    }else{
      arrayList && arrayList.facility.forEach((e, index)=>{
        if(e === event.target.name){
          console.log("rrrrrrrrrrrr",e)
          arrayList.facility.splice(index, 1);
        }
      })
    }
      }
      this.props.onSelect(arrayList);        
    };

    render() {
      return (
          <Checkbox
          style ={{
            color: "white",
          }}
          checked={this.state.checkedHotel}
          onChange={this.handleChange}
          name={this.props.value.name}
          color="primary"
          />
      );
    }
}
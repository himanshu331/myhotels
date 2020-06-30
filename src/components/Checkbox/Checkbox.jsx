import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
const arrayList = [];

// export default function CheckboxLabels() {
  export default class CheckboxLabels extends React.Component {
    constructor(props){
      super(props);
      console.log("props",props)
      this.state = {
        checkedHotel: ''
      } 
    }
   
  
    handleChange = (event) => {
      const name = event.target.name
      console.log("event.target.name",event.target.checked)
      this.setState({checkedHotel: event.target.checked });
      if(event.target.checked){
        arrayList.push(event.target.name)
      }else{
      arrayList && arrayList.map((e, index)=>{
        if(e === event.target.name){
          console.log("rrrrrrrrrrrr",e)
          arrayList.splice(index, 1);
        }
      })
      }
      console.log("kkkkkk",event.target.name)
      console.log("arrayList",arrayList)
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
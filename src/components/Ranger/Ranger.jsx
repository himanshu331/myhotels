/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRanger } from "react-ranger";

export default function App({onChildClick}) {
  const [values, setValues] = React.useState([0]);

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 10000,
    stepSize: 500,
    values,
    onChange: handleClick
  });

  function handleClick(event) {
      // console.log("kkkkkkkkkkk",event)
      setValues(event)
      onChildClick(event); // pass any argument to the callback
  }

  return (
    <div style={{color:"gold",height: "70px",
    width: "185px",
    marginLeft: "30px"}}>
      <span >Price Range</span>
      <br />
      <br />
      <div
        {...getTrackProps({
          style: {
            height: "4px",
            background: "#ddd",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
            borderRadius: "2px"
          }
        })}
      >
        {handles.map(({ getHandleProps }) => (
          <div
            {...getHandleProps({
              style: {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                background: "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                border: "solid 1px #888"
              }
            })}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <pre
        style={{
          display: "inline-block",
          textAlign: "left"
        }}
      >
      </pre>
    </div>
  );
}

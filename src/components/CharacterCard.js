import React from "react";

export default function CharacterCard(props) {
  console.log(props)
  return (
    <div>
      <img src = {props.data.image} />
      <h2> {props.data.name} </h2>
      <h4>Status: {props.data.status} </h4>
      <h4>Species: {props.data.species} </h4>
    </div>
  )
}

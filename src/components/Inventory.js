import React from "react";
import AddFishForm from "./AddFishForm";


const Inventory = props => {
  return(
    <div>
      <AddFishForm addFish={props.addFish}/>
      <button onClick={props.loadSamples}>as</button>
     </div>
  )
}


export default Inventory;

import React from "react"
import { formatPrice } from "../helpers"
const Fish = props => {
  const {image, name, price, desc} = props.details;
  return (
    <li className="menu-list">
      <img src={image} alt=""/>
      <h2>{name}</h2>
      <h4>{desc} <span>{formatPrice(price)}</span></h4>

  </li>
  )
}

export default Fish;

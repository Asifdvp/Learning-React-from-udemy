import React from "react";
import PropTypes from 'prop-types'
export default function User(props){
  const {name,department,salary} = props;
    return(
<div className="user">
<ul>
<li> Ad:{name} </li>
<li> department:{department}</li>
<li> maas:{salary} </li>

    </ul>

    </div>
    )
    
}
User.propTypes = {
    name:PropTypes.string.isRequired,
    department:PropTypes.string.isRequired,
    maas:PropTypes.string.isRequired
 }
User.defaultProps = {
    name:"Ad yoxdur",
   department:" yoxdur",
   salary:"yoxdur",
}
import React from "react";

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
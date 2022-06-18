
import React from 'react';
import User from './User';
export default function Users(props){
 const {data} = props;
 console.log(data)
return(
    <>
{
    data.map(item=>{
     return (
        <User name={item.name} department={item.department} salary={item.salary}/>
     )
    })
}
</>
)


}

import React from 'react';
import ProptTypes from 'prop-types'
import User from './User';
export default function Users(props){
 const {data,deleteUser} = props;
return(
    <>
{
    data.map(item=>{
     return (
        <User 
        deleteUser = {deleteUser}
        key={item.id}
        id={item.id}
        name={item.name} 
        department={item.department} 
        salary={item.salary}/>
     )
    })
}
</>
)



}
Users.propTypes = {
    data:ProptTypes.array.isRequired,
    deleteUser:ProptTypes.func.isRequired
}
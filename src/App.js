
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import Users from './components/Users';
class App extends React.Component{
  state={
  users:  [
{id:"1",name:"Asif",department:"front",salary:"5000"},
{id:"2",name:"Asif2",department:"front",salary:"5000"},
{id:"3",name:"Asif3",department:"front",salary:"5000"},
{id:"4",name:"Asif4",department:"front",salary:"5000"},
{id:"5",name:"Asif5",department:"front",salary:"5000"}


    ]
  }
render() {
  return (
    <div className="App container">
      <Navbar />
      <Users data={this.state.users} />
     
    </div>
  );
}}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
function App() {
  return (
    <div className="App container">
      <Navbar />
     <User
     name = "Asif"
     department = "Front"
     salary = "500"
     />
     <User
     name = "Asif"
     department = "Front"
     salary = "500"
     />
     <User
     name = "Asif"
     department = "Front"
     salary = "500"
     />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import { Route } from 'react-router-dom';







function App() {
  return (
   
    <div>
     
      <Navbar />
    <Login />
  
    </div>
    
  );
}

export default App;

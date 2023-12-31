import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Routes from './Routes/Routes';
import Home from './Pages/Home/Home';
import Mission from './Pages/Mission/Mission';
import Footer from './Components/Footer/Footer';







function App() {
  return (
    
   <BrowserRouter>
    
     
      <Navbar />
  
    <Routes/>
<Footer/>
    </BrowserRouter>
    
  );
}

export default App;

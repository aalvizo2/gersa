import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import {Routes as ReactDomRutes, Route } from 'react-router-dom';
import Home from "../Pages/Home/Home";

const Routes = () => {
    return (
    <div>
  <ReactDomRutes>

  <Route path='acceder/Register' element={<Register/>}/>
       <Route path='/acceder' element={<Login/>}/>
<Route path='/' element={<Home/>}/>

  </ReactDomRutes>



    </div>



        );
  
    };
    export default Routes;
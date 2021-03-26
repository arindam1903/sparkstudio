import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

import './App.css';

function App() {

  //Enter your key
  const passkey = "wd1pwb5i97xsD3FW7gmA0Z4cnvCuq5AKPF7obrua";
const [query,setQuery]=React.useState('');
const handleChange=(e)=>{
console.log(e.target.value);
setQuery(e.target.value)
}


  return (
    <div id="screen">
  
      <BrowserRouter>
        <header>
          <h4>NASA Media Search</h4>
         
        </header>
        <div id="nav">
          <Link to="/" className='nav-items'>Home</Link>
          <input className='nav-items' onChange={(e)=>handleChange(e)}/>
          <Link to='/search'><button className='nav-items' >Search</button></Link>
        </div>
        <div id='container'>

        <Switch>
          <Route path="/Search">
            <Search query={query}/>{" "}
          </Route>
          <Route path="/">
            <Home passkey={passkey} />
          </Route>
        </Switch></div>
      </BrowserRouter>
    </div>
  );
}

export default App;

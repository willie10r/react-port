import React from 'react';
import { ReactDOM } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import '../App.css';


import Nav from './Nav';
import Home from './Home';
import Contact from './contact';

const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Nav></Nav>
        <Routes>
          <switch>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
          </switch>
        </Routes>

      </div>
    </BrowserRouter>
  )
};


export default App;

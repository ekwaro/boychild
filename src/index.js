import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import {Contacts,About,Mentors,Parents,Events } from '../src/components/componentlist'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/contact' element={<Contacts/>}></Route>
      <Route path='/mentors' element={<Mentors/>}></Route>
      <Route path='/Parents' element={<Parents/>}></Route>
      <Route path='/events' element={<Events/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

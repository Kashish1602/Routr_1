import React from 'react'
import {Route,Link, Routes} from "react-router-dom"
import Tab from './tabs/tab'
import Pass from './Generatorpass/pass'
import Counter from './increment/Incre_1'
import Hom from './tabs/home'
import Abo  from './tabs/about'
import Con from './tabs/contact'
function Jet() {
  return (
    <div>
      
        <div className='m1'>
        <h1 className="kmz2">PROJECT ON REACT ROUTER'S</h1>
            <div className='m'>
               <div className="kmz">
               <Link className="kmz1" to="/"> TABS</Link>
               <Link className="kmz1" to="/incre_1">COUNTER</Link>
               <Link className="kmz1" to="/pass">GENERATE</Link>
               </div>
             </div>
      <div className='m3'>
          <Routes> 
            <Route path="/" element={<Tab/>}>    {/* nested router  calling*/}
              <Route path="/" element={<Hom/>}/>
              <Route path="/tabs/about" element={<Abo/>}/>
              <Route path="/tabs/contact" element={<Con/>}/>
              </Route>
            <Route path="/incre_1" element={<Counter/>}/>
            <Route path="/pass" element={<Pass/>}/>
          </Routes> 
       </div>
      <div className='footer'>
              created by | <span>Kashish sharma</span>
      </div>
        </div>
    </div>
  )
}

export default Jet
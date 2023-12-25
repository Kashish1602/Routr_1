import React from 'react'
import{NavLink, Outlet} from "react-router-dom"
// import Hom from './home'
// import Abo from './about'
// import Con from './contact'

function Tab() {
  return (
    <>
    {/* <div className='jk'> */}
        <div className='ka'>
            <div className='kas'>
         <NavLink to="/"><h1 className='d1'>HOME</h1></NavLink>
         <NavLink to="/tabs/about"><h1 className='d1'>ABOUT</h1></NavLink>
         <NavLink to="/tabs/contact"><h1 className='d1'>CONTACT</h1></NavLink>
         </div>
         <Outlet/>
         
         {/* <div className='kas1'> */}
         {/* <Routes> */}
    {/* <Route path="/" element={<Hom/>}/>
    <Route path="/tabs/about" element={<Abo/>}/>
    <Route path="/tabs/contact" element={<Con/>}/>  */}
    {/* </Routes> */}
   {/* </div> */}
   </div> 
   {/* </div> */}

    </>
  )
}

export default Tab
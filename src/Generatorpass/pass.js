import React from 'react'
// import "./pass.css"
import { useState ,useEffect,useCallback,useRef } from 'react'
function Pass() {

     const[length,setLength]=useState(6)
     const[numberAllow,setNumberAllow]=useState(false)
     const[charAllow,setCharAllow]=useState(false)

     const[password,setPassword] = useState("")

    const passref=useRef(null)


     const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllow)
        {
         str +="0123456789"
        }
        if(charAllow)
        {
         str +="!@#$%^&*+-?/~"
        }
        let i;
        for(i=1;i<=length;i++)
        {
        let char =Math.floor(Math.random() * str.length + 1)
        pass +=str.charAt(char) 
        }
 
    setPassword(pass)

   },[length,numberAllow,charAllow])

   const copyPassClip=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])

   useEffect(()=>{passwordGenerator()},[length,charAllow,numberAllow,passwordGenerator])  // used here to call password generator

  return (
    // <div className='z'>
        <div className='z1'>
          <div className='z2'>password Generator</div>
          <input type='text' value={password} placeholder='password' className='cl' ref={passref}/>
          <div className='z3'>
          <button className='bt' onClick={copyPassClip}>copy</button>
          </div>
          
          <div className='z4'>
            <div className='z5'>
            <label>Length : {length}</label>
            <input type='range' min={6} max={20} value={length}  onChange={(e)=>{setLength(e.target.value)}}/>
            </div>
            <div className='z5'>
            <input type='checkbox' defaultChecked={numberAllow} onChange={()=>{setNumberAllow((prev)=> !prev)}}
            className='rng' />
            <label>allow no.</label>
            </div>
            <div className='z5'>
            <input type='checkbox' defaultChecked={charAllow} onChange={()=>{setCharAllow((prev)=> !prev)}}
            className='rng' />
            <label>allow character</label>
            </div>
          </div>
        </div>
    // </div>
  )
}

export default Pass

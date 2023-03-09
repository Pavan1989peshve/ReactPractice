import React from 'react'
import Allv from './Components/Allv';
import Obj from './Components/Obj';
import Imag from './Components/Imag';
import pic from  './seal1.jpg' 
const App = () => {
  return (
    <>
     <Allv string="Hello" number={143} boolean={true}/>
      <Obj data={{user: "Rocky", pwd:"donkey"}} />
    <Imag picture={pic}/>
    </>
  )
}
export default App
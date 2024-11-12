import { useContext } from 'react'
import HelloTailWind from './component/hello'
import { globalContext } from './component/content'

function App() {
  
  const {color} = useContext(globalContext);

  return (
    <div id='quote-box' style={{background:`${color}`, height:"100vh", placeContent:"center"}} >
        <HelloTailWind />
        <p style={{color:"white", textAlign:"center", fontFamily:"sans-serif", fontWeight:"lighter", fontSize:"16px"}}>by Ashu</p>
    </div>
  )
}

export default App

import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'

import Electronic from './components/electronic'
function App() {

  return (
    <>
     <nav style={{padding:'1erm',style:"fixed",background:"#ddd",top:0}}>
     <Link to="/home">Home</Link>
<Link to="/electronic">Electronics</Link>
<Link to="/footer">About us</Link>




     </nav>

<Routes>
 <Route path="/home" element={<Home/>} />
      <Route path="/electronic" element={<Electronic />} /> 
            <Route path="/footer" element={<Footer/>} /> 


</Routes>

    </>
  )
}

export default App
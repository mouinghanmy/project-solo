import { Routes,Route,Link } from 'react-router-dom'
import Phones from './components/phones'
import Laptop from './components/laptop'
import './App.css'
import Home from './components/Home'
import Register from './components/register'
import Search from './components/Search'
function App() {

  return (
    <>
     <nav style={{padding:'1erm',style:"fixed",background:"#ddd",top:0}}>
     <Link to="/home">Home</Link>
<Link to="/Register">Register</Link>

     <Link to="/phones">Phones</Link>
          <Link to="/laptop">Laptop</Link>


          <Link to="/Search">Search</Link>

     </nav>

<Routes>
 <Route path="/home" element={<Home/>} />
<Route path="/register" element={<Register/>} />



  <Route path="/phones" element={<Phones/>} />
    <Route path="/laptop" element={<Laptop/>} />



    <Route path="/Search" element={<Search/>} />

</Routes>
<footer>
  <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
</footer>

    </>
  )
}

export default App
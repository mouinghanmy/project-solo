import { Routes,Route,Link } from 'react-router-dom'
import Phones from './components/phones'
import Laptop from './components/laptop'
import './App.css'

function App() {

  return (
    <>
     <nav style={{padding:'1erm',style:"fixed",background:"#ddd",top:0}}>
     {/* <Link to="/">Home</Link> */}

     <Link to="/phones">Phones</Link>
          <Link to="/laptop">Laptop</Link>


          {/* <Link to="/Search">Search</Link> */}

     </nav>

<Routes>
 {/* <Route path="/" element={<Home/>} /> */}
 {/* <Route path="/department" element={Department}><Department/></Route>
 <Route path="/student" element={Student}><Student/></Route>
 <Route path="/teacher" element={Teacher}><Teacher/></Route> */}
  <Route path="/phones" element={<Phones/>} />
    <Route path="/laptop" element={<Laptop/>} />



    {/* <Route path="/Search" element={<Search/>} /> */}

</Routes>

    </>
  )
}

export default App
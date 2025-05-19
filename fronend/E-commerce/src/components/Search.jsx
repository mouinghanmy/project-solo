import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Search() {
      const [phone, setphone] = useState([]);
      const [filtred,setfiltred]=useState([])
  const [term, setTerm] = useState("");
const fetch=()=>{
  axios
    .get(`http://localhost:3000/phones/getAll`)
    .then((response) => {
      console.log(response.data,'data');
      
        setphone(response.data);
        setfiltred(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
}


useEffect(()=>{
  fetch()

},[])
      const search = () => {
    console.log("search",term)
    const res=phone.filter((el)=>{
      return el.name===term
    })
    setfiltred(res)
    console.log('res',res);
}
  return (
     <div>
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}/>
      <button onClick={() => search(term)}>Search</button>

        {filtred.map((el,i)=>(
        <ul key={i}>
        <li>{el.name}</li>
        <li>{el.price}</li>
        <li>{el.categorie}</li>
<img src={el.image} />

        
        </ul>
     ))}
    </div>
  
  )
}
export default Search


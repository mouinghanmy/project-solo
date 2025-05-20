import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function electronic() {
   const [electronic, setelectonic] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categorie, setCategorie] = useState('')
  const [image, setImage] = useState('')
        const [filtred,setfiltred]=useState([])
    const [term, setTerm] = useState("");
const newElectonic = { name:name, price:price, categorie:categorie, image:image }
    const updatedElectronic = { name:name, price:price, categorie:categorie, image:image }


  const fetchelectonic = () => {
    axios.get('http://localhost:3000/electronic/getAll')
      .then(res => setelectonic(res.data))
      .catch(err => console.error(err))
  }

 const search = () => {
    console.log("search",term)
    const res=electronic.filter((el)=>{
      return el.categorie.toLowerCase().includes(term.toLowerCase())
    })
    setfiltred(res)
    console.log('res',res);
    
}


  const addElectronic = () => {
    
    axios.post('http://localhost:3000/electronic/post', newElectonic)
      .then(() => {
        fetchelectonic()
        clearInputs()
      })
      .catch(err => console.error(err))
  }

  const deleteElectronic = (id) => {
    axios.delete(`http://localhost:3000/electronic/delete/${id}`)
      .then(() => fetchelectonic())
      .catch(err => console.error(err))
  }

  const updateElectronic = (id) => {
    axios.put(`http://localhost:3000/electronic/update/${id}`, updatedElectronic)
      .then(() => {
        fetchelectonic()
        clearInputs()
      })
      .catch(err => console.error(err));
  }

  const clearInputs = () => {
    setName('')
    setPrice('')
    setCategorie('')
    setImage('')
  }

// const fetch=()=>{
//   axios
//     .get(`http://localhost:3000/electronic/getAll`)
//     .then((response) => {
//       console.log(response.data,'data');
      
//         setelectonic(response.data);
//         setfiltred(response.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// }

  useEffect(() => {
    fetchelectonic()
    // fetch()
  }, [])

//   return (
    
//     <div>
// <h2>Electronic List</h2>


//       <h2>Add / Update Electonic</h2>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//       <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
//       <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} placeholder="Category" />
//       <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
//       <button onClick={()=>{addElectronic(newElectonic)}}>Add Electronic</button>

// <div className="card-grid">
//   {(term ? filtred : electronic).map((el) => (
//     <div className="card" key={el.id}>
//       <img src={el.image} alt={el.name} />
//       <h3>{el.name}</h3>
//       <p>Price: ${el.price}</p>
//       <p>Category: {el.categorie}</p>
//       <button onClick={() => updateElectronic(el.id)}>Update</button>
//       <button className="delete" onClick={() => deleteElectronic(el.id)}>Delete</button>
//     </div>
//   ))}
// </div>



//       {/* <h2>Electronic List</h2>
//       {electronic.map((el) => (
//         <ul key={el.id}>
//           <li>{el.name}</li>
//           <li>{el.price}</li>
//           <li>{el.categorie}</li>
//           <img src={el.image} alt={el.name} width="100" />
//           <div> */}
                    //   <button onClick={() => updateElectronic(el.id,updatedElectronic)}>Update Electronic</button>
// {/* 
//           </div>
//         <div> */}
//               {/* <button onClick={() => deleteElectronic(el.id)}>Delete Electronic</button> */}
//         {/* </div> */}
//         {/* </ul> */}
//       {/* ))} */}

       

//         {filtred.map((el,i)=>(
//         <ul key={i}>
//         <li>{el.name}</li>
//         <li>{el.price}</li>
//         <li>{el.categorie}</li>
//         <img src={el.image} />

        
//         </ul>
//      ))}
//     </div>
    
//   )
return (
  <div>
    <h1>Electronic Store</h1>

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search by category"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
    <button onClick={search}>Search</button>

    {/* Add/Update Form */}
    <h2>Add / Update Electronic</h2>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
    <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} placeholder="Category" />
    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
    <button onClick={addElectronic}>Add Electronic</button>

    {/* Electronic List */}
    <h2>Electronic List</h2>
    <div className="card-grid">
      {(term ? filtred : electronic).map((el) => (
        <div className="card" key={el.id}>
          <img src={el.image} alt={el.name} width="100" />
          <h3>{el.name}</h3>
          <p>Price: ${el.price}</p>
          <p>Category: {el.categorie}</p>
          <button onClick={() => updateElectronic(el.id)}>Update</button>

          <button onClick={() => deleteElectronic(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
)

}

export default electronic

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Phones() {
//   const [phones, setPhones] = useState([])
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [categorie, setCategorie] = useState('')
//   const [image, setImage] = useState('')
// const newPhone = { name:name, price:price, categorie:categorie, image:image }
//     const updatedPhone = { name:name, price:price, categorie:categorie, image:image }


//   const fetchPhones = () => {
//     axios.get('http://localhost:3000/phones/getAll')
//       .then(res => setPhones(res.data))
//       .catch(err => console.error(err))
//   }

//   const addPhone = () => {
    
//     axios.post('http://localhost:3000/phones/post', newPhone)
//       .then(() => {
//         fetchPhones()
//         clearInputs()
//       })
//       .catch(err => console.error(err))
//   }

//   const deletePhone = (id) => {
//     axios.delete(`http://localhost:3000/phones/delete/${id}`)
//       .then(() => fetchPhones())
//       .catch(err => console.error(err))
//   }

//   const updatePhone = (id) => {
//     axios.put(`http://localhost:3000/phones/update/${id}`, updatedPhone)
//       .then(() => {
//         fetchPhones()
//         clearInputs()
//       })
//       .catch(err => console.error(err));
//   }

//   const clearInputs = () => {
//     setName('')
//     setPrice('')
//     setCategorie('')
//     setImage('')
//   }
//   useEffect(() => {
//     fetchPhones()
//   }, [])

//   return (
//     <div>
//       <h2>Add / Update Phone</h2>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//       <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
//       <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} placeholder="Category" />
//       <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
//       <button onClick={()=>{addPhone(newPhone)}}>Add Phone</button>

//       <h2>Phone List</h2>
//       {phones.map((el) => (
//         <ul key={el.id}>
//           <li>{el.name}</li>
//           <li>{el.price}</li>
//           <li>{el.categorie}</li>
//           <img src={el.image} alt={el.name} width="100" />
//           <div>
//                       <button onClick={() => updatePhone(el.id,updatedPhone)}>Update Phone</button>

//           </div>
//         <div>
//               <button onClick={() => deletePhone(el.id)}>Delete Phone</button>
//         </div>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default Phones

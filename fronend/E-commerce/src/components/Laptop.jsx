import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Laptop() {
const [laptop, setLaptop] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categorie, setCategorie] = useState('')
  const [image, setImage] = useState('')
    const newLaptop = { name:name, price:price, categorie:categorie, image:image };
    const updatedLaptop = { name:name, price:price, categorie:categorie, image:image };

  useEffect(() => {
    fetchLaptop();
  }, []);

  const fetchLaptop = () => {
    axios.get('http://localhost:3000/laptop/getAll')
      .then(res => setLaptop(res.data))
      .catch(err => console.error(err));
  }

  const addLaptop = () => {
    axios.post('http://localhost:3000/laptop/post', newLaptop)
      .then(() => {
        fetchLaptop();
        clearInputs();
      })
      .catch(err => console.error(err));
  }

  const deleteLaptop = (id) => {
    axios.delete(`http://localhost:3000/laptop/delete/${id}`)
      .then(() => fetchLaptop())
      .catch(err => console.error(err));
  }

  const updateLaptop = (id) => {
    axios.put(`http://localhost:3000/laptop/update/${id}`, updatedLaptop)
      .then(() => {
        fetchLaptop();
        clearInputs();
      })
      .catch(err => console.error(err));
  }

  const clearInputs = () => {
    setName('')
    setPrice('')
    setCategorie('')
    setImage('')
  }

  return (
    <div>
      <h2>Add / Update Laptop </h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} placeholder="Category" />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <button onClick={()=>{addLaptop(newLaptop)}}>Add Laptop</button>

      <h2>Laptop List</h2>
      {laptop.map((el) => (
        <ul key={el.id}>
          <li>{el.name}</li>
          <li>{el.price}</li>
          <li>{el.categorie}</li>
          <img src={el.image}  width="100" />
          <button onClick={() => updateLaptop(el.id,updatedLaptop)}>Update Laptop</button>
          <button onClick={() => deleteLaptop(el.id)}>Delete Laptop</button>
        </ul>
      ))}
    </div>
  )

}

export default Laptop

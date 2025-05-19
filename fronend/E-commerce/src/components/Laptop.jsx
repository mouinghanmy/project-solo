import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function laptop() {
const [laptop,setlaptop]=useState([])
const [name,setname]=useState('')
const [price,setprice]=useState('')
const [categorie,setcategorie]=useState('')
const [image,setimage]=useState('')

const addandupdate={name:name,price:price,categorie:categorie,image:image}
const fetch=()=>{
    axios.get('http://localhost:3000/laptop/getAll')
    .then((response)=>{setlaptop(response.data)})
    .catch((err)=>{console.log(err)})
}
useEffect(()=>{
    fetch()
},[])

const addlaptop=(newlaptop)=>{
    axios.post('http://localhost:3000/laptop/post',newlaptop)
    .then((response)=>{console.log(response.data)
        fetch()
    })
    .catch((err)=>{console.log(err)})
}
const deletelaptop=(id)=>{
    axios.delete(`http://localhost:3000/laptop/delete/${id}`)
    .then((response)=>{console.log(response.data);
        fetch()
    })
    .catch((err)=>{console.log(err);
    })
}
 const updatelaptop=(id,updatedlaptop)=>{
   axios.put(`http://localhost:3000/laptop/update/${id}`,updatedlaptop) 
   .then((response)=>{console.log(response.data);
    fetch()
   })
   .catch((err)=>{console.log(err)})
 }

  return (
    <div>
<input type="text" 
value={name}
onChange={(e)=>{setname(e.target.value)}}
/>
<input type="text" 
value={price}
onChange={(e)=>{setprice(e.target.value)}}
/><input type="text" 
value={categorie}
onChange={(e)=>{setcategorie(e.target.value)}}
/><input type="text" 
value={image}
onChange={(e)=>{setimage(e.target.value)}}
/>
<button onClick={()=>{addlaptop(addandupdate)}}>Add Laptop</button>


      {laptop.map((el,i)=>(
        <ul key={i}>
<li>{el.name}</li>
<li>{el.price}</li>
<li>{el.categorie}</li>
<img src={el.image} />


<div>
    <input type="text"
value={name}
onChange={(e)=>{setname(e.target.value)}}
/>

<input type="text"
value={price}
onChange={(e)=>{setprice(e.target.value)}}
/>
<input type="text"
value={categorie}
onChange={(e)=>{setcategorie(e.target.value)}}
/>
<input type="text"
value={image}
onChange={(e)=>{setimage(e.target.value)}}
/>
<button onClick={()=>{updatelaptop(el.id,addandupdate)}}> Update Laptop</button>
</div>
<button onClick={()=>{deletelaptop(el.id)}}>Delete Laptop </button>

        </ul>
        
      ))}
    </div>
  )

}

export default laptop

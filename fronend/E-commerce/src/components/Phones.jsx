import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function phones() {
const [phone,setphone]=useState([])
const [name,setname]=useState('')
const [price,setprice]=useState('')
const [categorie,setcategorie]=useState('')
const [image,setimage]=useState('')

// const addandupdate={name:name,price:price,categorie:categorie,image:image}
const fetch=()=>{
    axios.get('http://localhost:3000/phones/getAll')
    .then((response)=>{setphone(response.data)})
    .catch((err)=>{console.log(err)})
}
useEffect(()=>{
    fetch()
},[])

const addphone=(newphone)=>{
    axios.post('http://localhost:3000/phones/post',newphone)
    .then((response)=>{console.log(response.data)
        fetch()
    })
    .catch((err)=>{console.log(err)})
}
const deletephone=(id)=>{
    axios.delete(`http://localhost:3000/phones/delete/${id}`)
    .then((response)=>{console.log(response.data);
        fetch()
    })
    .catch((err)=>{console.log(err);
    })
}
//  const updatephone=(id,updatedphone)=>{
//    axios.put(`http://localhost:3000/phones/update/${id}`,updatedphone) 
//    .then((response)=>{console.log(response.data);
//     fetch()
//    })
//    .catch((err)=>{console.log(err)})
//  }

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
<button onClick={()=>{addphone(addandupdate)}}>Add Phone</button>


      {phone.map((el,i)=>(
        <ul key={i}>
<li>{el.name}</li>
<li>{el.price}</li>
<li>{el.categorie}</li>
<img src={el.image} />


{/* <div>
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
<button onClick={()=>{updatephone(el.id,addandupdate)}}> Update Phone</button>
</div> */}
<button onClick={()=>{deletephone(el.id)}}>Delete Phone </button>

        </ul>
        
      ))}
    </div>
  )
}

export default phones

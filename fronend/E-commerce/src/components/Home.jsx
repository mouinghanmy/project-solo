// import React from 'react';

// function Home() {
//   return (
//     <div>
//       <div>
//         <p>
//           Welcome to our school department, where a dedicated team of passionate teachers works collaboratively to provide a supportive and enriching learning environment for all students. <br />
//           Our educators are not only experts in their fields but also mentors who inspire curiosity, critical thinking, and personal growth. <br />
//           The students in our department come from diverse backgrounds, bringing with them unique perspectives and a strong desire to learn and succeed. <br />
//           Together, we foster a community built on respect, collaboration, and a shared commitment to academic excellence and personal development.
//         </p>
//         <br />
//       </div>


//       <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
//         <iframe 
//           // src="https://www.youtube.com/embed/JSKpbNNla_M"
//                     src="https://www.youtube.com/embed/8kKlMnWS8gU"

          

//           title="YouTube video"

//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//           }}
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { useState,useEffect } from 'react'

function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/user/login", formData)
    console.log("Login success", response.data); // ✅
    localStorage.setItem("token", response.data.token);
    alert(response.data.message);
    navigate("/shoes");
  } catch (error) {
    console.error("Login failed", error); // ⛔
    alert(error.response?.data?.message || "Login failed");
  }
};


  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) navigate("/Home"); // or redirect to login
}, []);

  return (
     <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );

}

export default Home

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/authContext";

// const Login = () => {
//   const [uid, setUid] = useState("");
//   const [pwd, setPwd] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy JWT with real structure: header.payload.signature
//     const dummyToken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
//       "eyJpZCI6MSwidXNlcm5hbWUiOiJzaWRkaGVzaCJ9." +
//       "abc123dummy";

//     login(dummyToken);
//     navigate("/products");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={uid}
//         onChange={(e) => setUid(e.target.value)}
//         placeholder="UserID"
//         required
//       />
//       <input
//         type="password"
//         value={pwd}
//         onChange={(e) => setPwd(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('https://localhost:7069/api/Auth/users');

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const users = await response.json();

//       const user = users.find(u => u.email === email);

//       if (user && user.password === password) {
//         console.log("Login successful for:", user.email); // Safe logging
//         onLogin(user.userID); // You can pass user.email too if needed
//       } else {
//         alert('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error?.message || error.toString());
//       alert('An error occurred during login. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/authContext";

// const Login = () => {
//   const [uid, setUid] = useState("");
//   const [pwd, setPwd] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://localhost:7069/api/Auth/users");

//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status}`);
//       }

//       const users = await response.json();
//       const user = users.find((u) => u.email === uid);

//       if (user && user.password === pwd) {
//         // Simulate a token (in production, you'd get this from your backend)
//         const dummyToken =
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
//           `eyJpZCI6${user.userID},"username":"${user.username}"` +
//           ".abc123dummy";

//         login(dummyToken);
//         navigate("/products");
//       } else {
//         alert("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Login error:", err.message);
//       alert("Something went wrong while logging in.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={uid}
//         onChange={(e) => setUid(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={pwd}
//         onChange={(e) => setPwd(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext";

const Login = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7069/api/Auth/users");

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const users = await response.json();
      const user = users.find((u) => u.email === uid);

      if (user && user.password === pwd) {
        // ✅ Construct a proper dummy JWT token
        const payload = {
          userID: user.userID,
          username: user.username
        };

        const base64Payload = btoa(JSON.stringify(payload)); // base64-encoded JSON
        const dummyToken = `header.${base64Payload}.signature`; // fake token format

        login(dummyToken);
        navigate("/products");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      alert("Something went wrong while logging in.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;


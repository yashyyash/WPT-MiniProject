import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authContext";

const Login = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy JWT with real structure: header.payload.signature
    const dummyToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      "eyJpZCI6MSwidXNlcm5hbWUiOiJzaWRkaGVzaCJ9." +
      "abc123dummy";

    login(dummyToken);
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        placeholder="UserID"
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

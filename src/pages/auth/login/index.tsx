import { auth } from "../../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import "./index.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <>
      <div className="login-container">
        <div className="login-title">Welcome Back</div>
        <hr />
        <div className="login-with-email">Login with Email</div>
        <div className="login-form">
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-form-submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

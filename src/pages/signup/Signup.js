import { useState } from "react";
import useSignup from "../../hooks/useSignup";

// Styles
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, pending, error } = useSignup();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <form onSubmit={handleForm} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmail} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePassword} />
      </label>
      <label>
        Display Name:
        <input type="text" value={name} onChange={handleName} />
      </label>

      {!pending && <button className="btn">Signup</button>}
      {pending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;

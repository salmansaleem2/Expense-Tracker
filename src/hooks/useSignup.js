import { useState } from "react";
import { projectAuth } from "../firebase/config";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setPending(true);

    try {
      // Signup user
      const res = projectAuth.createUserWithEmailAndPassword(email, password);
      console.log(res);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await res.user.updateProfile({ displayName });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setPending(false);
    }
  };

  return { error, pending, signup };
};

export default useSignup;

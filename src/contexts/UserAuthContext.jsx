import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { googleSignIn, googleSignOut } from "../authentication/Firebase";

const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await googleSignIn();
      setUser({
        name: response.user.displayName,
        email: response.user.email,
        profilePic: response.user.photoURL
      });
      console.log("Login Success:\n", response);
      navigate("./pokedex");
    }
    catch (error) {
      setUser(null);
      setTimeout(
        () => alert(`Something went wrong! You are not Logged In.\n`, error),
        1000
      );
      navigate("./error");
    }
  };

  const logout = async () => {
    googleSignOut();
    setUser(null);
    navigate("/");
    setTimeout(() => alert(`You're Logged Out Successfully!`), 1000);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };

import { useAuth } from "../../contexts/UserAuthContext";

import Button from "../button/Button";

import "./googleAuthBtn-styles.scss";

export const GoogleAuthBtn = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      {!user ? (
        <Button name="Google" onClick={login} className="login-btn">
          Google
        </Button>
      ) : (
        <Button name="Google" onClick={logout} className="logout-btn">
          Logout
        </Button>
      )}
    </>
  );
};

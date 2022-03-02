import { useAuth } from "../../contexts/UserAuthContext";

import Button from "../button/Button";

import "./googleAuthBtn-styles.scss";

export const GoogleAuthBtn = () => {
  
  const { user, login, logout } = useAuth();

  return (
    <>
      {!user ? (
        <Button
          btnLabel="Google"
          onClick={login}
          className="auth-btn login-btn"
        />
      ) : (
        <Button
          btnLabel="Logout"
          onClick={logout}
          className="auth-btn logout-btn"
        />
      )}
    </>
  );
};

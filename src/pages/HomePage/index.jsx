import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const HomePage = () => {
  const { user, handleLogout } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="wrapper-home">
      <header className="wrapper-home__header">
        <h3 className="wrapper-home__header__heading">{`${
          user?.displayName
            ? `Barefoot Store welcome to ${user?.displayName}`
            : "Barefoot Store"
        } `}</h3>
        {user ? (
          <button className="wrapper-home__header__btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button
            className="wrapper-home__header__btn"
            onClick={() => navigate("/login")}
          >
            signIn
          </button>
        )}
      </header>
    </div>
  );
};

export default HomePage;

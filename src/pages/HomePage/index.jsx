import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const HomePage = () => {
  const { user, handleLogout, acctoken } = useAuthContext();
  // console.log("userFacebookAccount", user);
  // console.log("accessTokenFacebookAccount", acctoken);

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
          <div className="wrapper-home__header__user-info">
            <img alt={`${user?.photoURL}`} src={`${user?.photoURL}`} />
            <button
              className="wrapper-home__header__btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
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

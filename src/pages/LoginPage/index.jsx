import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const LoginPage = () => {
  const { handleSignWithGoogle, user, handleSignWithFacebook } =
    useAuthContext();
  console.log("user", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (Boolean(user?.displayName)) navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="wrapper-login-page">
      {/* <h3 className="wrapper-login-page__heading" onClick={() => navigate("/")}>
        Barefoot Store
      </h3> */}
      <form className="form">
        <h3 className="form__heading">Login</h3>
        <div className="form__field">
          <label className="form__field__lable">Email</label>
          <input
            className="form__field__input"
            type="text"
            placeholder="huynhngocdat2002.td@gmail.com"
          />
        </div>
        <div className="form__field">
          <label className="form__field__lable">PassWord</label>
          <input
            className="form__field__input"
            type="password"
            placeholder=".........."
          />
        </div>
        <div className="form__submit">
          <button type="submit">Login</button>
        </div>
        <div className="form__btn">
          <div
            className="form__btn__shared form__btn__shared--google "
            onClick={handleSignWithGoogle}
          >
            Login with google
          </div>
          <span>or</span>
          <div
            className="form__btn__shared form__btn__shared--facebook"
            onClick={handleSignWithFacebook}
          >
            Login with facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

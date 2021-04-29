import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Login.scss";

export const Login = () => {
  const { setUser, user } = useContext(UserContext);

  const doLogin = async () => {
    const response = await fetch("/api/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "Carlos", password: "12345" }),
    }).then((resp) => resp.json());
    console.log(response);
    if (response && response.success) {
      setUser({ id: 1, name: "Carlos" });
    }
  };

  return (
    <div className="container login">
      {!user ? <h1>Login</h1> : <h1>Logout</h1>}
      {!user && (
        <button className="btn btn-primary sign-up" onClick={() => doLogin()}>
          Sign up
        </button>
      )}
      {user && (
        <button className="btn btn-warning" onClick={() => setUser(null)}>
          Logout
        </button>
      )}
      <pre>{user ? JSON.stringify(user) : "No data"}</pre>
    </div>
  );
};

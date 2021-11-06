import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "../../hooks/useForm";
import "./Login.scss";

export const Login = () => {
  const { setUser, user } = useContext(UserContext);

  const [{ username, password }, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const doLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => resp.json());
    console.log(response);
    if (response && response.success) {
      setUser({
        name: response.data.username,
        email: response.data.email,
        roles: response.data.roles,
      });
    }
  };

  return (
    <div className="container login">
      {!user ? <h1>Login</h1> : <h1>Logout</h1>}
      {!user && (
        <>
          <form onSubmit={doLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby="username"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </>
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

import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { UserContext } from "../../context/UserContext";
import { useForm } from "../../hooks/useForm";
import "./Login.scss";

export const Login = () => {
  const { setUser, user } = useContext(UserContext);

  const [{ username, password }, handleInputChange, reset] = useForm({
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
      {!user ? (
        <h1>
          <FormattedMessage id="login" />
        </h1>
      ) : (
        <h1>
          <FormattedMessage id="logout" />
        </h1>
      )}
      {!user && (
        <>
          <form onSubmit={doLogin}>
            <div class="mb-3">
              <label for="username" className="form-label">
                <FormattedMessage id="username" />
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby={<FormattedMessage id="username" />}
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                <FormattedMessage id="password" />
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
              <FormattedMessage id="login" />
            </button>
          </form>
        </>
      )}
      {user && (
        <button className="btn btn-warning" onClick={() => setUser(null)}>
          <FormattedMessage id="logout" />
        </button>
      )}
      <pre>{user ? JSON.stringify(user) : "No data"}</pre>
    </div>
  );
};

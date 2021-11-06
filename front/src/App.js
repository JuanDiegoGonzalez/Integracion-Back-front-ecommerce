import "./App.scss";
import React, { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <main className="ligth-mode">
        <UserContext.Provider value={{ user, setUser }}>
          <AppRouter />
        </UserContext.Provider>
      </main>
    </>
  );
}

export default App;

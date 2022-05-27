import React, { useContext } from "react";

import Start from "./components/Start/Start";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && !(ctx.showLogin || ctx.showRegistration) && (
          <Start />
        )}
        {!ctx.isLoggedIn && !ctx.showLogin && ctx.showRegistration && (
          <Registration />
        )}
        {!ctx.isLoggedIn && ctx.showLogin && !ctx.showRegistration && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

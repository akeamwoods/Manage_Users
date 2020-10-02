import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { SideMenu } from "./components/SideMenu";
import { LoginHandler } from "./handlers/LoginHandler";
import { UsersHandler } from "./handlers/UsersHandler";
import { SettingsHandler } from "./handlers/SettingsHandler";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <SideMenu />
        <Route exact path="/" component={LoginHandler} />
        <Route exact path="/users" component={UsersHandler} />
        <Route exact path="/settings" component={SettingsHandler} />
      </HashRouter>
    </div>
  );
}

export default App;

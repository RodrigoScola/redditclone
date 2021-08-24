import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Homepage } from "./Components/pages/Homepage";
import { ProfilePage } from "./Components/pages/ProfilePage";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/profile-page">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

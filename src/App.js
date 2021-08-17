import { USER } from "./data/user";

const App = () => {
  return (
    <div>
      <button onClick={USER.authorize}> click me</button>
    </div>
  );
};

export default App;

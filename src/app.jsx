import "./app.css";
import Login from "./components/login/login";

function App({ authServer }) {
  return <Login authServer={authServer} />;
}

export default App;

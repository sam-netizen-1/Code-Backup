import { Link } from "react-router-dom";
import Router from "./App.routes";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">root</Link>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/qwertuio">404</Link>
      </nav>
      <Router />
    </>
  );
};

export default App;

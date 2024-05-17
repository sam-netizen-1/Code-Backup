import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Root from "./pages/Root/Root";
const routeArray = [
  { path: "/", page: <Root /> },
  { path: "/home", page: <Home /> },
  { path: "/about", page: <>about</> },
  { path: "*", page: <>404 Not Found</> },
];

const Router = () => {
  return (
    <Routes>
      {routeArray.map((route) => (
        <Route path={route.path} element={route.page}></Route>
      ))}
    </Routes>
  );
};

export default Router;

// useNavigate
// useParams
// get query parameters
// role specific routes

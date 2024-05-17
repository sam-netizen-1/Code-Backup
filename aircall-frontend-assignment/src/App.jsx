import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import ActivityFeed from "./components/ActivityFeed";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ActivityFeed />
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;

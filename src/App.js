import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

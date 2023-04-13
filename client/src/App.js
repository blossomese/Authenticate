import "./App.css";
import { Routes, Route, RouteProps } from "react-router-dom";
import Registration from "./component/registration/registration.component";
import Login from "./component/login/login.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

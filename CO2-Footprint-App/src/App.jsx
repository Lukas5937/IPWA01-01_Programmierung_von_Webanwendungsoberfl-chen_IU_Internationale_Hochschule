import "./App.css";
import { Routes, Route } from "react-router";
import Navigation from "./Navigation";
import Homepage from "./pages/home/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

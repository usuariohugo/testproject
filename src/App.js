import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home}  from "./pages/home";
import {Help}  from "./pages/help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/help" element={<Help/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

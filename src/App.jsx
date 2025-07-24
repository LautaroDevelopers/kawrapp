import { Home, Login } from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
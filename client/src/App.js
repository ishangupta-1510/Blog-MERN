import "./App.css";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import IndexPgae from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPgae />}></Route>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../pages/Auth";
import { Crud } from "../pages/Crud";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
};

import React from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AddUser } from "./user/AddUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

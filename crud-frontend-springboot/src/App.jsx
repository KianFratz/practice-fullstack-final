import React from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AddUser } from "./user/AddUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditUser } from "./user/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

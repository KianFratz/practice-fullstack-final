import React from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AddUser } from "./user/AddUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditUser } from "./user/EditUser";
import { ViewUser } from "./user/ViewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/edit-user/:id" element={<EditUser />} />
          <Route exact path="/view-user/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

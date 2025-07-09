import React from "react";

export const NavBar = () => {
  return (
    <nav className="nav bg-blue-500 p-4">
      <div className="font-bold text-white flex justify-between items-center">
        <div>
          <a href="" className=" hover:text-blue-600">CRUD Full-Stack Application</a>
        </div>
        <div>
          <a href="" className="border rounded-md py-1 px-6 hover:bg-white hover:text-blue-600">Add User</a>
        </div>
      </div>
    </nav>
  );
};

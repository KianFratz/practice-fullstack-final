import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const userData = await axios.get("http://localhost:8080/users");
    console.log(userData.data);
    setUsers(userData.data);
  };

  return (
    <div className="container p-4">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left px-4 py-2 ">ID</th>
            <th className="text-left px-4 py-2 ">Email</th>
            <th className="text-left px-4 py-2 ">Name</th>
            <th className="text-left px-4 py-2 ">Username</th>
            <th className="text-left px-4 py-2 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr className="bg-white hover:bg-gray-50" key={user.id}>
                <td className="px-4 py-2 ">{user.id}</td>
                <td className="px-4 py-2 ">{user.email}</td>
                <td className="px-4 py-2 ">{user.name}</td>
                <td className="px-4 py-2 ">{user.username}</td>
                <td className="flex item-center">
                  <button className="text-white border bg-blue-500 px-4 py-1 rounded-md mr-2">
                    View
                  </button>
                  <button className="border-blue-500 border text-blue-500 bg-white px-4 py-1 rounded-md mr-2">
                    Edit
                  </button>
                  <button className="text-white border bg-red-500 px-4 py-1 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

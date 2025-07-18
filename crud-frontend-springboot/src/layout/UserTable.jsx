import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const UserTable = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const userData = await axios.get("http://localhost:8080/users");
    console.log(userData.data);
    setUsers(userData.data);
  };

  // delete user
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    getUsers()
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
                  <Link
                    to={`/edituser/${user.id}`}
                    className="border-blue-500 border text-blue-500 bg-white px-4 py-1 rounded-md mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="text-white border bg-red-500 px-4 py-1 rounded-md cursor-pointer"
                    onClick={() => deleteUser(user.id)}
                  >
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

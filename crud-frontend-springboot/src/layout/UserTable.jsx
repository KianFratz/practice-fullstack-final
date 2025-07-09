import React from "react";

export const UserTable = () => {
  return (
    <div className="container p-4">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left px-4 py-2 ">ID</th>
            <th className="text-left px-4 py-2 ">Name</th>
            <th className="text-left px-4 py-2 ">Email</th>
            <th className="text-left px-4 py-2 font-medium">Role</th>
            <th className="text-left px-4 py-2  font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className="px-4 py-2 ">1</td>
            <td className="px-4 py-2 ">Kian Fratz</td>
            <td className="px-4 py-2 ">Fratzkian@gmail.com</td>
            <td className="px-4 py-2 ">Backend Developer</td>
            <td className="flex item-center">
              <button className="text-white border bg-blue-500 px-4 py-1 rounded-md mr-2">
                Edit
              </button>
              <button className="text-white border bg-red-500 px-4 py-1 rounded-md">
                Delete
              </button>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="px-4 py-2 ">2</td>
            <td className="px-4 py-2 ">Kane</td>
            <td className="px-4 py-2 ">kane@gmail.com</td>
            <td className="px-4 py-2 ">Frontend Developer</td>
            <td className="flex item-center">
              <button className="text-white border bg-blue-500 px-4 py-1 rounded-md mr-2">
                Edit
              </button>
              <button className="text-white border bg-red-500 px-4 py-1 rounded-md">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

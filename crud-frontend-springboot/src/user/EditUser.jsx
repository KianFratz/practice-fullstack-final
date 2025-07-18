import React, { useEffect, useState } from "react";
import { NavBar } from "../layout/NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EditUser = () => {
  let navigate = useNavigate()

  const {id} = useParams()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    
  }

  useEffect(() => {
    loadUser()
  }, [])

  // update user
  const onCreateUser = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user)
    navigate("/") // navigate to home

  }

  // display user data
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data)
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <h2 className="font-bold text-blue-500 text-3xl  p-4 flex items-center justify-center">
          Edit User
        </h2>

        <form
          onSubmit={(e) => onCreateUser(e)}
          action=""
          className="container p-4 border border-gray-300 mx-auto max-w-md bg-white rounded"
        >
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => onInputChange(e)}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => onInputChange(e)}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="name"
              name="email"
              required
              value={email}
              onChange={(e) => onInputChange(e)}
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="border px-3 py-1 rounded bg-blue-500 text-white mr-1">
              Submit
            </button>
            <Link to={"/"} className="border px-3 py-1 rounded hover:bg-red-500 hover:text-white">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

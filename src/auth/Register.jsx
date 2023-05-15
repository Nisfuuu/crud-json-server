import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [id, idChange] = useState("");

  const [pwd, pwdChange] = useState("");
  const [email, emailChange] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let datas = { id, email, pwd };
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(datas),
    })
      .then((res) => {
        alert("success register");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <body className="bg-gray-100 w-full ">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Username
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={id} onChange={(e) => idChange(e.target.value)} type="text" id="username" placeholder="John Doe" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                value={email}
                onChange={(e) => emailChange(e.target.value)}
                type="email"
                id="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={pwd} onChange={(e) => pwdChange(e.target.value)} type="password" id="password" placeholder="********" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
                Confirm Password
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="password" id="confirm-password" name="confirm-password" placeholder="********" />
            </div>
            <Link className="w-1/4 btn mr-1  text-white text-sm font-bold py-2 px-4 rounded-md transition duration-300" to={"/login"}>
              back
            </Link>
            <button className="w-1/4 btn bg-primary text-white text-sm font-bold py-2 px-4 rounded-mdtransition duration-300" type="submit">
              Register
            </button>
          </form>
        </div>
      </body>
    </>
  );
};

export default Register;

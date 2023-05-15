import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, userNameUpdate] = useState("");
  const [pwd, pwdUpdate] = useState("");

  const userNavigate = useNavigate();

  const ProLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/users/" + userName)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            alert("please enter valid username");
          } else {
            if (resp.pwd === pwd) {
              alert("success");
              userNavigate("/data");
            } else {
              alert("please validate credentials");
            }
          }
        })
        .catch((err) => {
          console.log("error" + err.message);
          alert(err.massage);
        });
    }
  };
  const validate = () => {
    let isValidate = true;
    if (userName === "" || userName === null) {
      isValidate = false;
      alert("please enter username");
    }

    if (pwd === "" || pwd === null) {
      isValidate = false;
      alert("please enter password");
    }
    return isValidate;
  };

  return (
    <div>
      <body class="bg-gray-100 ">
        <div class="container mx-auto py-8">
          <h1 class="text-2xl font-bold mb-6 text-center">User Login</h1>
          <form onSubmit={ProLogin} class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Username
              </label>
              <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={userName} onChange={(e) => userNameUpdate(e.target.value)} type="text" placeholder="John Doe" />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" value={pwd} onChange={(e) => pwdUpdate(e.target.value)} type="password" placeholder="********" />
            </div>
            <Link className="w-1/4 btn mr-1 text-white text-sm font-bold py-2 px-4 rounded-md transition duration-300" to={"/register"}>
              Register
            </Link>
            <button className="w-1/4 btn bg-primary text-white text-sm font-bold py-2 px-4 rounded-md  transition duration-300" type="submit">
              Login
            </button>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Login;
// login dengan NAME bokan ID
// fetch("http://localhost:8000/users?name=" + userName)
//         .then((res) => {
//           return res.json();
//         })
//         .then((resp) => {
//           const user = resp.find((user) => user.name === userName);
//           if (!user) {
//             alert("please enter valid username");
//           } else {
//             if (user && user.pwd === pwd) {
//               alert("success");
//               userNavigate("/");
//             } else {
//               alert("please validate credentials");
//             }
//           }
//         })

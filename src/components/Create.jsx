import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, validationchange] = useState(false);

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const datas = { name, email, phone, active };

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(datas),
    })
      .then((res) => {
        alert("saved successfully");
        navigate("/data");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handelSubmit}>
        <div className="mb-4" style={{ textAlign: "left" }}>
          <label htmlFor="id" class="block text-gray-700 text-sm font-bold mb-2">
            ID
          </label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" id="id" value={id} disabled="disabled" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" class="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="name"
            onMouseDown={(e) => validationchange(e.target.value)}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            id="name"
            value={name}
            onChange={(e) => namechange(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" class="block text-gray-700 text-sm font-bold mb-2">
            Email address
          </label>
          <input
            type="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => emailchange(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" class="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" id="phone" value={phone} onChange={(e) => phonechange(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={active} onChange={(e) => activechange(e.target.checked)} />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check active
          </label>
        </div>
        <Link to="/data" className="btn btn-dark ">
          Back
        </Link>
        <button type="submit" className="btn btn-success ml-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

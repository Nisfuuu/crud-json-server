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
      <form onSubmit={handelSubmit}>
        <div className="mb-3" style={{ textAlign: "left" }}>
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input type="text" className="form-control" id="id" value={id} disabled="disabled" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="name" onMouseDown={(e) => validationchange(e.target.value)} className="form-control" id="name" value={name} onChange={(e) => namechange(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => emailchange(e.target.value)} />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="number" className="form-control" id="phone" value={phone} onChange={(e) => phonechange(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={active} onChange={(e) => activechange(e.target.checked)} />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check active
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/data" className="btn btn-dark">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Create;

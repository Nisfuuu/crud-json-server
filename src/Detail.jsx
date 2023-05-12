import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/data/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div>
        <h2>create data</h2>
      </div>
      {data && (
        <div className="card">
          <div className="card-header">No: {data.id}</div>
          <div className="card-body">
            <h2 className="card-title">Name is : {data.name}</h2>
            <h5 className="card-text">contact Details</h5>
            <p className="card-text">Email is: {data.email}</p>
            <p className="card-text">contact is: {data.phone}</p>
            <Link to="/data" className="btn btn-secondary">
              back to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;

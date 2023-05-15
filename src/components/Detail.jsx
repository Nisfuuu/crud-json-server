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
    <div className="flex justify-center mt-16">
      {data && (
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Name is : {data.name}</h2>
            <p>Details id: {data.id}</p>
            <p>Email is: {data.email}</p>
            <p>contact is: {data.phone}</p>
            <div className="card-actions justify-end">
              <button className="btn">
                <Link to="/data">back to Dashboard</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;

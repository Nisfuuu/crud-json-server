import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Get = (id) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate(`detail/` + id);
  };
  const LoadEdit = (id) => {
    navigate(`edit/` + id);
  };
  const RemoveFunction = (id) => {
    if (window.confirm("do you want to remove?")) {
      fetch(`http://localhost:8000/data/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Remove successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
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
    <div className="mt-9">
      <div className="flex m-auto w-1/5 btn btn-success">
        <Link to="/data/create">create (+)</Link>
      </div>

      <div className="mt-2 flex justify-center">
        <table className="table text-center">
          <thead className="table-dark  ">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button
                      onClick={() => {
                        LoadEdit(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        RemoveFunction(item.id);
                      }}
                      className="btn btn-error mx-1"
                    >
                      delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        LoadDetail(item.id);
                      }}
                    >
                      details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Get;

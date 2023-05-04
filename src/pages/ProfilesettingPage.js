import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProfilesettingPage= () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage=(id,name,email,password)=>{
localStorage.setItem("id",id);
localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("email",password);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div >
    <div className="d-flex justify-content-between m-2">
      <h2>Profile</h2>
      <Link to="/">
      <button className="btn btn-primary" >Home</button>
      </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <Link to="/LoginPage">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.password,
                          )
                        }
                      >

                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>

            </>
          );
        })}
      </table>
      </div>
    </>
  );
};

export default ProfilesettingPage;

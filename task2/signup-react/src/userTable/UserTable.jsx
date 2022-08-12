import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userTable.css";
const UserTable = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userdata")));
  }, []);
  console.log(user);
  return (
    <div>
      <button>
        <Link to="/">New User</Link>
      </button>
      <table>
        <caption>User Table</caption>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>SocialConnection</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.socialConnection}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

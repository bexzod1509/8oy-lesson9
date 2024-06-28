import React from "react";
import "./Admin.css";
import { useGetUsersQuery } from "../../context/api/userApi";
function Admin() {
  const { data, isLoading } = useGetUsersQuery();
  let Data = data?.data?.users;
  let users = Data?.map((el) => (
    <div key={el.id} className="h2">
      <img src="https://dummyjson.com/icon/emilys/128" alt="" />
      <h2>
        {el.FirstName} {el.LastName}
      </h2>
      <p>{el.phones[0]}</p>
    </div>
  ));
  return (
    <div className="container">
      <div className="h">
        <h1>Meet our team</h1>
        <div className="h1">{users}</div>
      </div>
    </div>
  );
}

export default Admin;

import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://picsum.photos/id/237/200/300",
      name: "john Doe",
      places: 4,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;

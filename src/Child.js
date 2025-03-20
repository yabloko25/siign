import React from "react";

const Child = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} yosh
        </li>
      ))}
    </ul>
  );
};

export default Child;

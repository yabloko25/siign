import React from "react";
import Child from "./Child";

const Parent = () => {
  const users = [
    { id: 1, name: "Ali", age: 25 },
    { id: 2, name: "Vali", age: 30 },
    { id: 3, name: "Zokir", age: 22 },
    { id: 4, name: "Shahnoza", age: 27 },
    { id: 5, name: "Dilshod", age: 29 },
  ];

  return (
    <div>
      <h2>Foydalanuvchilar ro‘yxati</h2>
      <Child users={users} />
    </div>
  );
};

export default Parent;

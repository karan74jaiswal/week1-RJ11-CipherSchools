import React from "react";
import Userdetails from "./UserDetails.js";

const AlluserList = () => {
  let allusers = [
    {
      name: "Rohan",
      email: "Rohan@gmail.com",
      phoneNumber: "9876543210",
    },
    {
      name: "Karan",
      email: "Karan@gmail.com",
      phoneNumber: "9876543210",
    },
    {
      name: "Lopa",
      email: "Lopa@gmail.com",
      phoneNumber: "9876543210",
    },
  ];
  return (
    <div>
      <Userdetails user={allusers[0]} />
      <Userdetails user={allusers[1]} />
      <Userdetails user={allusers[2]} />
      <Userdetails />
    </div>
  );
};

export default AlluserList;

import React, { useEffect } from "react";
import CardUser from "./CardUser";
import { useAdmin } from "@/app/context/adminContext";

function UserList({ users, inputValue }) {
  const { originalUsers, setUsers } = useAdmin();
  

  useEffect(() => {
    if (inputValue) {
      const userEmail = inputValue.toLowerCase();
      const filteredUsers = originalUsers.filter(user => user.email.toLowerCase() === userEmail);
      
      setUsers(filteredUsers);
    }
  }, [inputValue, originalUsers, setUsers]);

  return (
    <>
      <h3 className="font-bold mt-7 mb-5">Users</h3>
      <div className="h-screen flex flex-col gap-6">
        {users &&
          users.map((user) => (
            <div key={user._id}>
              <CardUser user={user} />
            </div>
          ))}
      </div>
    </>
  );
}

export default UserList;

import React, { useEffect } from "react";
import CardUser from "./CardUser";
import { useAdmin } from "@/app/context/adminContext";

function UserList({ users, inputValue }) {
  const { originalUsers, setUsers } = useAdmin();
  

  useEffect(() => {
    if (inputValue) {
      const userEmail = originalUsers.filter(user => user.email.includes(inputValue))
      setUsers(userEmail);
    }
  }, [inputValue])

  return (
    <>
      <h3 className="font-semibold text-2xl mt-7 mb-5">Users</h3>
      <div className="flex flex-col gap-6">
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

import { userClientType } from "@/types/Users";
import React from "react";
import CardUser from "./CardUser";

function UserList({ users }: { users: userClientType[] }) {
  return (
    <>
      <h3 className="font-bold mt-7 mb-5">Users</h3>

      <div className="h-20 flex flex-col gap-6">
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

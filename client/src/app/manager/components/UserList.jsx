import React, { useEffect } from "react";
import CardUser from "./CardUser";
import { useAdmin } from "@/app/context/adminContext";

/**
 * UserList component to display a list of users.
 * Filters users based on the input value and displays the filtered results.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.users - The list of users to display.
 * @param {string} props.inputValue - The input value to filter users by email.
 */
function UserList({ users, inputValue }) {
  const { originalUsers, setUsers } = useAdmin();

  // Filter users based on the input value
  useEffect(() => {
    if (inputValue) {
      const filteredUsers = originalUsers.filter(user =>
        user.email.includes(inputValue)
      );
      setUsers(filteredUsers);
    }
  }, [inputValue, originalUsers, setUsers]);

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

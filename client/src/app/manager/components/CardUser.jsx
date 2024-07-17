import React from "react";
import { useAdmin } from "../../context/adminContext";

/**
 * CardUser Component
 * 
 * A component to display user information and allow updating user roles.
 * 
 * @param {Object} user - The user object containing user details.
 */
function CardUser({ user }) {
  const { updateUserRol } = useAdmin();

  return (
    <div className="flex flex-col md:flex-row justify-between bg-slate-50 p-5 rounded-md shadow-lg border-solid border-2 hover:border-gray-100">
      <div className="flex flex-row justify-start gap-2 mb-4 md:mb-0">
        <div className="flex-shrink-0">
          <img
            className="object-cover rounded-full w-20 h-20 md:w-16 md:h-16 shadow-2xl"
            src={`https://gravatar.com/avatar/${user.avatar}?d=mp`}
            alt="User avatar"
          />
        </div>
        <div className="ml-3 inline-block min-w-0">
          <p className="font-semibold text-xl text-gray-800">{`${user.name} ${user.lastname}`}</p>
          <h5 className="font-bold text-gray-500 truncate block">{user.email}</h5>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <select
            id="roles"
            className="bg-gray-50 border text-gray-800 text-sm rounded-lg block w-full p-2.5 border-gray-600 hover:border"
            defaultValue={user.rol}
            onChange={({ target }) =>
              updateUserRol({ ...user, newRol: target.value })
            }
          >
            <option>{user.rol}</option>
            {user.rol === "Admin" ? (
              <option value="User">User</option>
            ) : (
              <option value="Admin">Admin</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CardUser;

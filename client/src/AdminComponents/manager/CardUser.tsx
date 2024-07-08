import { useAdmin } from "@/app/context/adminContext";
import { userClientType } from "@/types/Users";
import React from "react";

function CardUser({ user }: { user: userClientType }) {
  const { updateUserRol } = useAdmin();

  return (
    <div className="flex flex-wrap justify-between bg-green-100 hover:bg-green-200 p-5 rounded-md drop-shadow-lg">
      <div className="flex flex-row justify-start gap-2">
        <div className="grid place-content-center">
          <img
            className="object-cover rounded-full w-10 h-auto drop-shadow-2xl"
            src={`https://gravatar.com/avatar/${user.avatar}?d=mp`}
            alt="Your avatar"
          />
        </div>
        <div className="grid place-content-center">
          <div>
            <p className="font-bold text-slate-500">{`${user.name} ${user.lastname}`}</p>
            <h5 className="text-slate-400">{user.email}</h5>
          </div>
        </div>
      </div>

      <div className="grid place-content-center">
        <div>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={user.rol}
            onChange={({ target }) => updateUserRol({...user, newRol: target.value})}
          >
            <option>{user.rol}</option>
            { user.rol === 'Admin' ? <option value="User">User</option> : <option value="Admin">Admin</option> }
          </select>
        </div>
      </div>
    </div>
  );
}

export default CardUser;

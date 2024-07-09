import React, { useEffect, useState } from "react";
import Navbar from './NavbarAdmin'
import KanbanTable from "./KanbanTable";
import UserList from "./UserList";
import {
  TbChalkboard,
  TbFilter,
  TbPlaystationX,
  TbSearch,
  TbUserCog,
} from "react-icons/tb";
import BoxFilter from "./BoxFilter";
import { useAdmin } from '../../context/adminContext';

function AdministrationComponent() {
  const { feedbacks, getFeedbacks, setFeedbacks, users, setUsers, getUsers, originalFeedbacks, originalUsers} = useAdmin();
  const [optionView, setOptionView] = useState("kanban");
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    getFeedbacks();
    getUsers();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue)
  }

  const handleSubmitUsers = (e) => {
    e.preventDefault();
    setSearchUser(inputValue)
  }

  const handleOptionView = (text) => {
    if (text == "users") setIsOpenFilter(false);
    setOptionView(text);
  };

  const handleFilterFeedbacks = (filteredFeedbacks) => {
    setFeedbacks(filteredFeedbacks);
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  useEffect(() => {
    if (searchTerm.startsWith("email:")) {
      const userEmail = searchTerm.split("email:")[1].trim();

      const [userEmailFound] = users.filter((user) => user.email === userEmail);

      if (userEmailFound === undefined) return setFeedbacks([])

      const filteredFeedbacks = originalFeedbacks.filter((feedback) => feedback.userId === userEmailFound._id);
      
      setFeedbacks(filteredFeedbacks);
      
    } else if (searchTerm.startsWith("feedback:")) {
      const feedbackCategory = searchTerm.split("feedback:")[1].trim();;
      const filteredFeedbacks = originalFeedbacks.filter(
        (feedback) => feedback.category === feedbackCategory
      );

      setFeedbacks(filteredFeedbacks);

    } else {
      setFeedbacks(originalFeedbacks);
    }
  }, [searchTerm, originalFeedbacks]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-2 p-10 max-h-max">
        <div className="flex mb-5">
          <div className="flex flex-row gap-3">
            <button
              className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
              type="button"
              onClick={() => handleOptionView("kanban")}
            >
              KanBan Board
              <TbChalkboard size={25} />
            </button>

            <button
              className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3"
              type="button"
              onClick={() => handleOptionView("users")}
            >
              Users
              <TbUserCog size={23} />
            </button>
          </div>
        </div>

        {openSearch && optionView == 'kanban' ? (
          <div className="flex flex-row gap-10">
            <p className="mb-3 mt-3 font-normal text-gray-700 text-sm">
              <span className="p-1 text-gray-500 font-mono bg-gray-200 rounded-md">
                {`<email: search by email>`}
              </span>{" "}
              to search for feedbacks by user email
            </p>
            <p className="mb-3 mt-3 font-normal text-gray-700 text-sm">
              <span className="p-1 text-gray-500 font-mono bg-gray-200 rounded-md">
                {`<feedback: search by category [Congratulations, Complaint, Suggestion]>`}
              </span>{" "}
              to search for feedbacks by your unique Id
            </p>
          </div>
        ) : openSearch && optionView == 'users' && (
          <div className="flex flex-row gap-10">
            <p className="mb-3 mt-3 font-normal text-gray-700 text-sm">
              <span className="p-1 text-gray-500 font-mono bg-gray-200 rounded-md">
                {`<User email>`}
              </span>{" "}
              to search user by email
            </p>
          </div>
        )}
        <div className="flex flex-row gap-3 justify-end">
          {openSearch && optionView == 'kanban' ? (
            <>
              <form className="flex-1" onSubmit={handleSubmit}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Search Feedbacks and Users"
                    required
                    value={inputValue}
                    onChange={({ target }) => {
                      if (target.value.length === 0) setFeedbacks(originalFeedbacks);
                      setInputValue(target.value)
                    }}
                  />
                </div>
              </form>
            </>
          ):
          openSearch && optionView == 'users' && (
            <>
              <form className="flex-1" onSubmit={handleSubmitUsers}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Search User"
                    required
                    value={inputValue}
                    onChange={({ target }) => {
                      if (target.value.length === 0) setUsers(originalUsers);
                      setInputValue(target.value)
                    }}
                  />
                </div>
              </form>
            </>
          )}

          {openSearch && (
            <div
              className="grid place-content-center p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-md"
              onClick={() => setOpenSearch(false)}
            >
              <TbPlaystationX size={20} />
            </div>
          )}
          {!openSearch && (
            <div
              className="grid place-content-center p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-md"
              onClick={() => setOpenSearch(true)}
            >
              <TbSearch size={20} />
            </div>
          )}
          {optionView == "kanban" && (
            <div
              className="grid place-content-center pt-1 pb-1 pl-4 pr-4 bg-slate-200 hover:bg-slate-300 cursor-pointer rounded-md"
              onClick={handleOpenFilter}
            >
              <TbFilter size={20} />
            </div>
          )}
        </div>

        {isOpenFilter && optionView == "kanban" && (
          <BoxFilter
            feedbacks={originalFeedbacks}
            filter={handleFilterFeedbacks}
          />
        )}

        {optionView == "kanban" && (
          <KanbanTable feedbacks={feedbacks} />
        )}

        {optionView == "users" && (
          <UserList users={users} inputValue={searchUser} />
        )}
      </main>
    </>
  );
}

export default AdministrationComponent;

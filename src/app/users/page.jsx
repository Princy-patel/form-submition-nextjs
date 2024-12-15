"use client";

import TableSkeleton from "@/skeletons/TableSkeleton";
import { addUserApi, deleteUserApi, getUsersApi } from "@/slice/userSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Users() {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.userData);

  useEffect(() => {
    if (error) {
      return;
    }

    dispatch(getUsersApi());
  }, [dispatch, error]);

  const handleDelete = function (id) {
    dispatch(deleteUserApi(id));
  };

  const handleSubmit = function () {
    const { userId, title, body } = inputValue;
    dispatch(addUserApi({ userId, title, body }));
    setOpenModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add user
      </button>

      {loading && <TableSkeleton />}
      {data && data.length > 0 ? (
        <div className="flex min-h-screen items-center justify-center">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-xl">
              <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">Id</th>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Body</th>
                  <th className="py-3 px-4 text-left">View</th>
                  <th className="py-3 px-4 text-left">Delete</th>
                  <th className="py-3 px-4 text-left">Edit</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                {data.map((data) => (
                  <tr key={data.id} className="border-b border-blue-gray-200">
                    <td className="py-3 px-4">{data.id}</td>
                    <td className="py-3 px-4">{data.title}</td>
                    <td className="py-3 px-4">{data.body}</td>
                    <td className="py-3 px-4">
                      <Link
                        href="#"
                        className="font-medium text-green-600 hover:text-green-800"
                      >
                        View
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        href="#"
                        className="font-medium text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={handleDelete.bind(null, data.id)}
                      >
                        Delete
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <TableSkeleton />
      )}

      {openModal && (
        <div className="fixed inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-lg">
            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
              Its a simple Modal
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                  UserId
                </label>
                <input
                  type="number"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  onChange={(e) =>
                    setInputValue({ ...inputValue, userId: e.target.value })
                  }
                  placeholder="Your Id"
                />
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  onChange={(e) =>
                    setInputValue({ ...inputValue, title: e.target.value })
                  }
                  placeholder="Your Title"
                />
              </div>

              <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                  Body
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  onChange={(e) =>
                    setInputValue({ ...inputValue, body: e.target.value })
                  }
                  placeholder="Your Body"
                />
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;

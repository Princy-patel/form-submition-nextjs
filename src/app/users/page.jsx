"use client";

import TableSkeleton from "@/skeletons/TableSkeleton";
import { deleteUserApi, getUsersApi } from "@/slice/userSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Users() {
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

  return (
    <div>
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
    </div>
  );
}

export default Users;

import React from "react";

function TableSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center animate-pulse">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="py-3 px-4 text-left">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </td>
              <td className="py-3 px-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSkeleton;

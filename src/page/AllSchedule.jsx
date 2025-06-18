import React from "react";

const AllSchedule = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <input
            type="text"
            placeholder="search"
            className="border border-gray-300 px-4 py-2 rounded w-full max-w-md mb-4 md:mb-0"
          />
          <p className="text-red-600 font-semibold">naimauddin23@gmail.com</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-2">Serial</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Day</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy Row (empty for now) */}
              <tr className="border-t">
                <td className="px-4 py-4 text-center" colSpan="6">
                  {/* You can show "No Data" message or leave it empty */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSchedule;

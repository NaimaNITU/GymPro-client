import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa"; // Import icons
import { Link } from "react-router";
import Swal from "sweetalert2";

const AllSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/schedule")
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, []);

  const handleDelete = (id) => {
    // Add  delete logic here
    fetch(`http://localhost:5000/schedule/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!");
          const remaining = schedules.filter((schedule) => schedule._id !== id);
          setSchedules(remaining);
        }
      });
  };

  const handleMarkDone = (id) => {
    console.log("Mark as done:", id);
    // Add your done logic here
  };

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
              {schedules.map((schedule, index) => (
                <tr key={schedule._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{schedule.title}</td>
                  <td className="border px-4 py-2">{schedule.dayName}</td>
                  <td className="border px-4 py-2">{schedule.date}</td>
                  <td className="border px-4 py-2">{schedule.time}</td>
                  <td className="border px-4 py-3 flex gap-2">
                    <Link
                      to={`/updateSchedule/${schedule._id}`}
                      className="text-blue-500 hover:text-blue-700"
                      title="Update"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(schedule._id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleMarkDone(schedule._id)}
                      className="text-green-500 hover:text-green-700"
                      title="Done"
                    >
                      <FaCheck />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSchedule;

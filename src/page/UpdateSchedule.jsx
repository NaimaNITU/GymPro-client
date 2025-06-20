import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const UpdateSchedule = () => {
  const schedule = useLoaderData();

  const [formData, setFormData] = useState({
    title: schedule.title,
    dayName: schedule.dayName,
    date: schedule.date,
    time: schedule.time,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/schedule/${schedule._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.modifiedCount > 0) {
      alert("Schedule updated successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Update Schedule</h1>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border px-4 py-2 rounded"
              placeholder="Title"
            />
            <input
              name="dayName"
              value={formData.dayName}
              onChange={handleChange}
              className="border px-4 py-2 rounded"
              placeholder="Day Name"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border px-4 py-2 rounded"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border px-4 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSchedule;

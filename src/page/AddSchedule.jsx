import React from "react";

const AddSchedule = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const schedule = {
      title: form.title.value,
      dayName: form.dayName.value,
      date: form.date.value,
      time: form.time.value,
    };
    console.log(schedule.date); // You were printing the date in your console
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Gym Schedule
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          {/* Day Name */}
          <div>
            <label className="block font-semibold mb-1">Day</label>
            <input
              type="text"
              name="dayName"
              placeholder="e.g. Thursday"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-semibold mb-1">Day</label>
            <input
              type="date"
              name="date"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block font-semibold mb-1">Time</label>
            <input
              type="time"
              name="time"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
            >
              Add Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;

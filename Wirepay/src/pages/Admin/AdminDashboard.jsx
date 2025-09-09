
import React from "react";
import { useNavigate } from "react-router-dom";

// Sample bookings data
const bookings = [
  { id: 1, name: "John Doe", date: "2025-09-10", status: "Confirmed" },
  { id: 2, name: "Jane Smith", date: "2025-09-11", status: "Pending" },
  { id: 3, name: "Michael Brown", date: "2025-09-12", status: "Cancelled" },
];

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-lime-300 hover:bg-lime-400 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="">
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">ID</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-gray-700 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="">
                  <td className="px-3 py-2">{booking.id}</td>
                  <td className="px-3 py-2">{booking.name}</td>
                  <td className="px-3 py-2">{booking.date}</td>
                  <td className="px-3 py-2">{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;


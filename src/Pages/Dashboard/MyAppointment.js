import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://ph-ex71-doctors-portal-server.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">My Appointments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{booking?.patientName}</td>
                <td>{booking?.treatment}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {booking?.price && !booking?.paid && (
                    <Link to={`/dashboard/payment/${booking?._id}`}>
                      <button className="btn btn-primary btn-sm text-white">
                        Pay ${booking?.price}
                      </button>
                    </Link>
                  )}
                  {booking?.price && booking?.paid && (
                    <span className="text-primary">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;

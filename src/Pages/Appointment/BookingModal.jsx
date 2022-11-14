import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = format(selectedDate, "PP");
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      slot,
      patientName,
      phone,
      email,
    };

    setTreatment(null);
    console.log(booking);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlhtmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-semibold">{name}</h3>
          <div className="card flex-shrink-0 w-full">
            <form onSubmit={handleBooking} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  className="input input-bordered bg-gray-300"
                  defaultValue={format(selectedDate, "PP")}
                  readOnly
                />
              </div>
              <select
                name="slot"
                className="select select-bordered bg-gray-300"
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

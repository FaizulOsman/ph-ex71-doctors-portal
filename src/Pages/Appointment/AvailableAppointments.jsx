import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <section className="mt-10">
      <p className="text-center text-primary font-semibold">
        Available Appointments on{" "}
        <span className="font-bold">{format(selectedDate, "PP")}</span>
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24">
        {appointmentOptions.map((appointmentOption) => (
          <div
            key={appointmentOption._id}
            className="rounded-lg shadow-lg text-center py-10"
          >
            <h4 className="text-2xl font-bold text-primary">
              {appointmentOption.name}
            </h4>
            <p className="mt-2">
              {appointmentOption.slots.length > 0
                ? appointmentOption.slots[0]
                : "Try another day"}
            </p>
            <p className="mt-2">
              {appointmentOption.slots.length}{" "}
              {appointmentOption.slots.length > 0 ? "spaces" : "space"}{" "}
              available
            </p>
            <label
              disabled={appointmentOption.slots.length === 0}
              onClick={() => setTreatment(appointmentOption)}
              htmlhtmlFor="booking-modal"
              className="mt-3 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
            >
              Book Appointment
            </label>
          </div>
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          treatment={treatment}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;

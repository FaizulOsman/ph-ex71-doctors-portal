import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Spinner from "../../components/Spinner";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(
        `https://ph-ex71-doctors-portal-server.vercel.app/appointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="mt-10">
      <p className="text-center text-primary font-semibold">
        Available Appointments on{" "}
        <span className="font-bold">{format(selectedDate, "PP")}</span>
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24">
        {appointmentOptions.map((appointmentOption) => (
          <div
            key={appointmentOption?._id}
            className="rounded-lg shadow-lg text-center py-10"
          >
            <h4 className="text-2xl font-bold text-primary">
              {appointmentOption.name}
            </h4>
            <p className="mt-2">
              {appointmentOption?.slots?.length > 0
                ? appointmentOption?.slots[0]
                : "Try another day"}
            </p>
            <p className="mt-2">
              {appointmentOption?.slots?.length}{" "}
              {appointmentOption?.slots?.length > 0 ? "spaces" : "space"}{" "}
              available
            </p>
            <p>Price: ${appointmentOption?.price}</p>
            <label
              disabled={appointmentOption?.slots?.length === 0}
              onClick={() => setTreatment(appointmentOption)}
              htmlFor="booking-modal"
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
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;

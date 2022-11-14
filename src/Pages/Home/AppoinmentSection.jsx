import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const AppoinmentSection = () => {
  return (
    <div>
      <div
        style={{ background: `url(${appointment})` }}
        className="hero text-white mt-20 md:mt-44 lg:mt-60"
      >
        <div className="hero-content flex-col lg:flex-row lg:p-0">
          <img
            src={doctor}
            className="hidden md:block lg:w-1/2 -mt-32 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="lg:py-16 lg:pr-5">
            <h4 className="text-xl font-semibold text-primary">Appointment</h4>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentSection;

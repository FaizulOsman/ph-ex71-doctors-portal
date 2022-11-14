import React from "react";
import appointment from "../../assets/images/appointment.png";

const ContactUsSection = () => {
  return (
    <div
      className="mt-32 p-16"
      style={{
        background: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="card flex-shrink-0 w-full mx-auto max-w-lg">
        <div className="text-center">
          <h4 className="mt-2 text-lg font-semibold text-primary">
            Contact Us
          </h4>
          <h2 className="text-4xl font-semibold text-white">
            Stay connected with us
          </h2>
        </div>
        <div className="card-body mt-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered bg-base-100"
            />
          </div>
          <div className="form-control mt-5">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered bg-base-100"
            />
          </div>
          <div className="mt-5">
            <textarea
              className="textarea w-full h-36"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="w-32 mx-auto">
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;

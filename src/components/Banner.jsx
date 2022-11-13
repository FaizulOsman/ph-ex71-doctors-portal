import React from "react";
import "./Banner.css";
import bannerImage from "../assets/images/chair.png";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";

const Banner = () => {
  const bannerCard = [
    {
      id: 1,
      icon: clock,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      class:
        "rounded-lg px-6 py-8 flex flex-col sm:flex-row items-center bg-gradient-to-r from-primary to-secondary text-white gap-4",
    },
    {
      id: 2,
      icon: marker,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      class:
        "rounded-lg px-6 py-8 flex flex-col sm:flex-row items-center bg-accent text-white gap-4",
    },
    {
      id: 3,
      icon: phone,
      name: "Contact us now",
      description: "+000 123 456789",
      class:
        "rounded-lg px-6 py-8 flex flex-col sm:flex-row items-center bg-gradient-to-r from-primary to-secondary text-white gap-4",
    },
  ];

  return (
    <div className="backgroundImage">
      <div className="hero pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImage}
            className="md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        {bannerCard.map((card) => (
          <div key={card.id} className={card.class}>
            <img src={card.icon} alt="" />
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-semibold">{card.name}</h4>
              <p className="mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

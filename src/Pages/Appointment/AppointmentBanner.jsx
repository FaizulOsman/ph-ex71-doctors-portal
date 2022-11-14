import React from "react";
import bannerImage from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="backgroundImage">
        <div className="hero pt-20 pb-20 lg:pb-48">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={bannerImage}
              className="md:w-1/2 rounded-lg shadow-2xl"
              alt=""
            />
            <div className="mr-10">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="bg-base-100 p-4 rounded-lg"
              ></DayPicker>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

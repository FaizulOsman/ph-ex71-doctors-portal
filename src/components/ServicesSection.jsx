import React from "react";
import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import treatment from "../assets/images/treatment.png";

const ServicesSection = () => {
  const servicesCard = [
    {
      id: 1,
      image: fluoride,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      image: cavity,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      image: whitening,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="mt-40">
      <div className="text-center">
        <h4 className="text-xl text-primary font-semibold">OUR SERVICES</h4>
        <h3 className="text-3xl font-semibold">Services We Provide</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {servicesCard.map((card) => (
          <div key={card.id} className="text-center shadow-xl rounded-xl p-6">
            <img className="w-24 mx-auto" src={card.image} alt="" />
            <h4 className="mt-6 mb-2 text-xl font-semibold">{card.name}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-36">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              className="w-full sm:max-w-sm lg:ml-20 rounded-lg shadow-2xl"
              alt=""
            />
            <div className="lg:ml-24">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

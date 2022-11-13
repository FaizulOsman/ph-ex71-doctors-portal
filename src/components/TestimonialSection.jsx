import React from "react";
import people1 from "../assets/images/people1.png";
import people2 from "../assets/images/people2.png";
import people3 from "../assets/images/people3.png";
import quote from "../assets/icons/quote.svg";

const TestimonialSection = () => {
  const testimonialCard = [
    {
      id: 1,
      image: people1,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      image: people2,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      image: people3,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <div className="mt-24">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-semibold text-primary">Testimonial</h4>
          <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-44" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {testimonialCard.map((card) => (
          <div key={card.id} className="shadow-xl rounded-lg p-8">
            <p>{card.description}</p>
            <div className="flex mt-8">
              <div className="avatar">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={card.image} alt="" />
                </div>
              </div>
              <div className="ml-5">
                <h4>{card.name}</h4>
                <p>
                  <small>{card.location}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;

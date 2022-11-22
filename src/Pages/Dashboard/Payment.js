import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();

  // // if (navigation) {
  // //   return <Spinner></Spinner>;
  // // }
  console.log(booking);
  return (
    <div>
      <h3 className="text-3xl">Payment for Pediatric dental</h3>
      <p>
        Please pay <span className="font-bold">${booking?.price}</span> for your
        appointment on{" "}
        <span className="font-bold">{booking?.appointmentDate}</span> at{" "}
        <span className="font-bold">{booking?.slot}</span>
      </p>
      <div className="w-96 mt-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        `https://ph-ex71-doctors-portal-server.vercel.app/appointmentSpecialty`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          fetch(`https://ph-ex71-doctors-portal-server.vercel.app/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(`${doctor.name} successfully added`);
                navigate("/dashboard/managedoctors");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-lg p-7 mx-auto">
      <h3 className="text-3xl">Add A Doctor</h3>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="input input-bordered"
          />
          {errors.name && (
            <p role="alert" className="text-red-600">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email address is required" })}
            placeholder="Email"
            className="input input-bordered"
          />
          {errors.email && (
            <p role="alert" className="text-red-600">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full"
          >
            {specialties?.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Photo is required" })}
            className="input input-bordered"
          />
          {errors.image && (
            <p role="alert" className="text-red-600">
              {errors.image?.message}
            </p>
          )}
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = { displayName: data.name };
        console.log(userInfo);

        updateUser(userInfo)
          .then(() => {
            toast.success("User name updated successfully");
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully signed in with google.");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg mt-20">
      <div className="card-body">
        <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password must be included ([A-Z], [a-z], [0-9], [#?!@$%^&*-])",
                },
                pattern: {
                  value:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
                  message: "Password must be strong",
                },
              })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            Please Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

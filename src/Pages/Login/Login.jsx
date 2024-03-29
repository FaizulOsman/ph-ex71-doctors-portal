import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { logIn, googleSignIn, resetPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [emailBlur, setEmailBlur] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((e) => {
        console.log(e);
        setLoginError(e.message);
      });
  };

  const handleEmailOnBlur = (e) => {
    setEmailBlur(e.target.value);
  };

  const handleResetPassword = () => {
    const email = emailBlur;
    resetPassword(email)
      .then(() => {
        toast.success(`Please check your email "${email}" to reset password.`);
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
        <h2 className="text-4xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email Address is required",
              })}
              type="email"
              placeholder="Email"
              onBlur={handleEmailOnBlur}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link
                onClick={handleResetPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <p className="text-red-600">{loginError}</p>
        </form>
        <p className="text-center mt-2">
          New to Doctor's Portal?{" "}
          <Link className="text-primary" to="/signup">
            Create new account
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

export default Login;

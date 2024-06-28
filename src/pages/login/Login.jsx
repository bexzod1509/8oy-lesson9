import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../context/api/userApi";
import { setToken, setUser } from "../../context/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const initial = {
  UserName: "john32",
  password: "12345678",
};
function Login() {
  const [signIn, { data, isLoading, isSuccess, isError }] = useSignInMutation();
  useEffect(() => {
    if (isError) {
      localStorage.removeItem("x-auth-token");
      navigate("/");
      toast.error("Username or Password wrong");
    }
  }, [isError]);
  const [formData, setFormData] = useState(initial);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      navigate("/admin");
    }
  }, [isSuccess]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };
  return (
    <div>
      <div className="f3">
        <form onSubmit={handleLogin} className="form" action="">
          <p>Username</p>
          <input
            value={formData.UserName}
            onChange={handleChange}
            required
            type="text"
            name="UserName"
            id=""
            placeholder="Your username"
          />
          <p>Password</p>
          <input
            value={formData.password}
            onChange={handleChange}
            required
            type="password"
            name="password"
            id=""
            placeholder="Your password"
          />

          <div className="f4">
            <button disabled={isLoading}>LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

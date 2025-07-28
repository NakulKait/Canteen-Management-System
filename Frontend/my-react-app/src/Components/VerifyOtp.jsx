import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp || !email) {
      toast.error("OTP or Email is missing");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/verify-otp", {
        email,
        otp,
      });

      toast.success("Registration complete!");
      navigate("/login");
    } catch (err) {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-3">Verify OTP</h4>
      <form onSubmit={handleVerify}>
        <div className="mb-3">
          <label htmlFor="otp">Enter OTP sent to {email}</label>
          <input
            type="text"
            className="form-control"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;

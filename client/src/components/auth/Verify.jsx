import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [status, setStatus] = useState("Verifying...");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/auth/verify-email?token=${token}`)
        .then((response) => {
          if (response.ok) {
            setStatus("Email verified successfully!");
          } else {
            setStatus("Verification failed or token expired.");
          }
        })
        .catch(() => setStatus("Verification failed or token expired."));
    } else {
      setStatus("Invalid verification link.");
    }
  }, [token]);

  return <div>{status}</div>;
};

export default VerifyEmail;

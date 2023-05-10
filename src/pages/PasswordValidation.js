import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
//import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  //const [passwordType, setPasswordType] = useState("password");
  //const [passwordErr, setPasswordErr] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  //   const togglePassword = (e) => {
  //     e.preventDefault();
  //     if (passwordType === "password") {
  //       setPasswordType("text");
  //       return;
  //     }
  //     setPasswordType("password");
  //   };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
    setIsVisible(newPassword.length > 0 && !isValid);
    //   if (e.target.value === "") setPasswordErr("please enter your password");
    // else {
    //   setPasswordErr("");
    // }
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const getPasswordRequirements = () => {
    return (
      <div style={{ color: "white" }}>
        <p>Password must contain:</p>
        <ul>
          <li>At least one lowercase letter</li>
          <li>At least one uppercase letter</li>
          <li>At least one digit</li>
          <li>At least one special character</li>
          <li>Minimum length of 8 characters</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <input
        type={isVisible ? "text" : "password"}
        value={password}
        className="form-control"
        onChange={handlePasswordChange}
        required
      />

      <PasswordStrengthBar password={password} />
      <FontAwesomeIcon
        icon={isVisible ? faEye : faEyeSlash}
        onClick={toggleVisibility}
        className="password-icon"
        style={{ color: "white" }}
      />
      {/* <button
              className="btn btn-outline-primary"
              onClick={togglePassword}
            >
              {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
            </button> */}
      <p style={{ color: "white" }}>
        {isValid ? "Valid password" : "Invalid password"}
      </p>
      {isValid ? null : getPasswordRequirements()}
    </div>
  );
};

export default PasswordValidation;

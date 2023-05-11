import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
    setIsVisible(newPassword.length > 0 && !isValid);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{}[\]|\\;:'",.<>/? ])[A-Za-z\d!@#$%^&*()-=_+{}[\]|\\;:'",.<>/? ]{8,}$/;
    return passwordPattern.test(password);
  };

  const getPasswordRequirements = () => {
    return (
      <div style={{ color: "yellow" }}>
        <p style={{ color: "red" }}>Password must contain:</p>
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

      <p style={{ color: "white" }}>
        {isValid ? "Valid password" : "Invalid password"}
      </p>
      {isValid ? null : getPasswordRequirements()}
    </div>
  );
};

export default PasswordValidation;

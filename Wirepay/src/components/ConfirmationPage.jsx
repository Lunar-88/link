
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(paste)) {
      paste.split("").forEach((char, i) => {
        if (inputsRef.current[i]) {
          inputsRef.current[i].value = char;
        }
      });
      inputsRef.current[5].focus();
    }
    e.preventDefault();
  };

  return (
    <div className="bg-black text-start pl-4 pt-20 min-h-screen">
      <button
      onClick={() => navigate(-1)} 
      className="text-gray-300 pb-4">
        Back
      </button>
      <h1 className="text-4xl text-gray-200 pb-4 font-semibold">
        Verification
      </h1>
      <p className="text-gray-400 text-sm pr-6">
        Enter the 6-digit code we sent to the authenticator associated with your
        account.
      </p>
      <form className="mt-5">
        <div className="mb-4 pr-6">
          <label className="block text-gray-400 text-md mb-2" htmlFor="code">
            Confirmation Code
          </label>
          <div className="flex pb-4 space-x-2" onPaste={handlePaste}>
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-16 text-center text-gray-400 text-xl font-bold bg-gray-950 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-300"
              />
            ))}
          </div>
        </div>
        <div className="text-center pr-6 mt-4">
          <button
            className="bg-lime-300 w-full hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConfirmationPage;

import "./Input.css";
import { InputProps } from "@/app/constants/type";
import React, { useState } from "react";

const Input: React.FC<InputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Input;

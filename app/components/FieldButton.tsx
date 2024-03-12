import React, { useState } from "react";

interface FieldButtonProps {
  label: string;
  name: string;
  value: string;
  errors: string;
  setValue: (value: string) => void;
}

export const FieldButton: React.FC<FieldButtonProps> = ({
  label,
  name,
  errors,
  value,
  setValue,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
        className={`p-2 border border-gray-300 rounded ${
          errors ? "border-red-500" : ""
        }`}
      />
      {errors && <p className="text-red-500 text-xs">{errors}</p>}
    </div>
  );
};

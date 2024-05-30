import React, { useState } from "react";
import "./select.css";

interface SelectProps {
  size?: "small" | "medium" | "large";
  placeholder?: string;
  optionArray: string[];
  selected?: string;
}
enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
export const Select = ({
  size = "medium",
  placeholder = size === Size.SMALL ? "Select" : "Select an option",
  optionArray,
  selected,
  ...props
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(selected || "");
  const handleOnChange = (e: any) => {
    setSelectedValue(e.target.value);
    console.log("onchange", e.target.value);
  };
  return (
    <select
      className={["storybook-select", `storybook-select--${size}`].join(" ")}
      {...props}
      value={selectedValue}
      onChange={(e) => handleOnChange(e)}
    >
      <option value="" disabled defaultValue={""}>
        {placeholder}
      </option>
      {optionArray.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

"use client";
import React from "react";

type CheckBoxProps = {
  text?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
};

const CheckBox: React.FC<CheckBoxProps> = ({ text, onChange}) => {



    const [isChecked, setIsChecked] = React.useState(false);
  return (
    <label className="inline-flex items-center cursor-pointer relative">
      {/* Real checkbox for accessibility */}
      <input
        type="checkbox"
        className="absolute opacity-0 w-5 h-5 peer"
        onChange={onChange}
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />

      {/* Custom styled box */}
      <div className={`w-5 h-5 rounded bg-[#141616]  border-[#228000] flex  items-center justify-center 
      
      ${isChecked && "after:content-['✔']"} text-white`}/>


      {/* Label text */}
      {text && <span className="ml-2 font-serif text-white">{text}</span>}
    </label>
  );
};

export default CheckBox;

"use client";
import React from "react";

type CheckBoxProps = {
  text: string;
  checked: boolean;
  onToggle: (tag: string) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ text, checked, onToggle }) => {
  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="absolute opacity-0 w-5 h-5 peer"
        checked={checked}
        onChange={() => onToggle(text)}
      />
      <div
        className={`w-5 h-5 rounded bg-[#141616] border border-[#228000] flex items-center justify-center 
        ${checked ? "after:content-['✔']" : ""} text-white`}
      />
      <span className="ml-2 font-serif text-white">{text}</span>
    </label>
  );
};

export default CheckBox;
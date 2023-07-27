import React from "react";

export default function RadioButton({ value, name, label , onClick}) {
    return (
      <div className="flex border-2 border-solid border-inherit rounded-3xl ml-10 mt-6 h-10 w-36">
        <input 
          type="radio" 
          value={value} 
          name={name} 
          className="flex relative border-solid border-2 border-inherit rounded-lg w-4 h-4 mt-3 ml-5 accent-primary-middle" 
          onClick={onClick}
        />
        <text className="flex text-neutral-700 font-mon font-medium text-sm ml-5 mt-2">
          {label}
        </text>
      </div>
    );
}
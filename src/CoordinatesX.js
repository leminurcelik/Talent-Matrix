import React from "react";

export default function Coordinates({ className, label }){
    return(
        <text className={`font-mon text-xs text-neutral-300 align-middle items-center ${className}`}>
            {label}
        </text>
    )
}
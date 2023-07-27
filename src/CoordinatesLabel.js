import React from "react";

export default function CoordinatesLabel({ className, label }){
    return(
        <text className={`text-neutral-700 font-medium font-mon text-xs ${className}`}>
            {label}
        </text>
    )
};
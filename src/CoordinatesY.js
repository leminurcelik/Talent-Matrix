import React from "react";

export default function CoordinatesY({ className, label}){
    return(
        <text className={`font-mon text-xs text-neutral-300 text-center ${className}`}>
            {label}
        </text>
    )
};
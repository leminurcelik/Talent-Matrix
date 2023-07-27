import React from "react";

export default function Navigation({ label }){
    return(
        <div className="overflow-x-auto">
            <div className="!min-w-full">
                <h1 className="text-3xl border-spacing-2 font-mon font-medium bg-primary-dark text-white p-4 rounded-lg h-16">
                    {label}
                </h1>
            </div>
        </div>
    )
};
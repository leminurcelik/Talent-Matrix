import React, {useState} from "react";
import RadioButton from "./RadioButton";
import Matrix from "./Matrix";

export default function MatrixType({ title }){

    const [selectedGridSize, setSelectedGridSize] = useState(null);

    function handleRadioButton(gridSize) {
        setSelectedGridSize(gridSize);
    }

    return(
        <div>
            <h2 className="font-mon font-medium text-lg text-neutral-700 ml-10 mt-5 h-5 w-24">
                {title}
            </h2>
            <div className="flex">
                {/* Shows 4 box matrix when clicked */}
                <div className="felx flex-col">
                    <RadioButton value="2" name="grid" label="2 x 2 Grid" onClick={() => handleRadioButton(2)}/>
                </div>
                {/* Shows 9 box matrix when clicked */}
                <div className="flex flex-col">
                    <RadioButton value="3" name="grid" label="3 x 3 Grid" onClick={() => handleRadioButton(3)}/>
                </div>
            </div>
            <h2 className="font-mon font-medium text-lg text-neutral-700 ml-10 mt-5">Matris Ayarları</h2>
            {selectedGridSize && <Matrix gridSize={selectedGridSize} />}
        </div>
    )
};
import React, {useState} from "react"
import CoordinatesX from "./CoordinatesX"
import CoordinatesY from "./CoordinatesY"
import CoordinatesLabel from "./CoordinatesLabel"
import ColorPicker from "./ColorPicker"
import MatrixGrid from "./MatrixGrid"

export default function Matrix({ gridSize }){
    const [color, setColor] = useState('');

    const handleColorChange = (color) => {
        setColor(color.hex);
    };

    if(gridSize === 3){
        return(
            <div className="flex flex-wrap"> 
                <div className="flex flex-col mt-10">
                    <div className="flex">
                    {/* Create label of y coordinates */}
                    <div className="flex transform -rotate-90">
                        <CoordinatesLabel className="mt-32" label="Potansiyel" />
                    </div>
                    {/* Create value of y coordinates */}
                    <div className="transform -rotate-90 mt-3 h-36">
                        <CoordinatesY className="-ml-20" label={"Düşük"}/>
                        <CoordinatesY className="ml-16" label={"Orta"}/>
                        <CoordinatesY className="ml-16" label={"Yüksek"}/>
                    </div>
                    {/* Create vertical line between label and values */}
                    <div className="flex h-72 transform border-solid border-2 border-inherit rounded-0.25x -ml-28"></div>
                </div>
                <MatrixGrid color={color} gridSize={gridSize} />
                <div className="flex w-80 border-solid border-2 border-inherit rounded-0.25x ml-20"></div>
                    {/* Create value of x coordinates */}
                    <div className="justify-between align-middle items-center ml-20">
                        <CoordinatesX className="ml-4" label="Düşük" />
                        <CoordinatesX className="ml-20" label="Orta" />
                        <CoordinatesX className="ml-22" label="Yüksek" />
                        </div>
                    {/* Create label of x coordinates */}
                    <div className="flex text-center ml-48">
                        <CoordinatesLabel label="Performans" />
                    </div>
                </div>
            <div className="flex flex-col ml-10 mt-6">
                <div className="flex justify-center items-center">
                    <div className="w-[17px] h-[17px] bg-primary-fon rounded-full"></div>
                    <div className="font-mon text-neutral-500 font-medium italic ml-2">Yetenek kutucuklarına isim ve renk vererek özelleştirebilirsiniz.</div>
                </div>
                {/* To enter the name of each box */}
                <div className="flex font-mon text-neutral-600 mt-4">Kutucuk Adı</div>
                <div className="flex">
                        <input type="text" 
                        className="font-mon text-neutral-600 border-solid border-inherit border-2 rounded-sm w-full p-1"
                        placeholder="Yetenek Kodu Giriniz"
                        />
                </div>
                {/* Pick a color of box in palette */}
                <div className="mt-4">
                    <text className="font-mon text-neutral-600">Renk</text>
                    <ColorPicker color={color} handleChange={handleColorChange} />
                </div>
                {/* To explain talent each box */}
                <div className="flex font-mon text-neutral-600 mt-4">Açıklama</div>
                <div className="flex">
                        <input
                        type="text"
                        className="font-mon text-neutral-600 border-solid border-inherit border-2 rounded-sm w-full p-1 mb-20"
                        placeholder="Yetenek Kodu Açıklaması Giriniz"
                        />
                </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="flex flex-wrap">
                    <div className="flex flex-col mt-16">
                        <div className="flex">
                            {/* Create label of y coordinates */}
                            <div className="flex transform -rotate-90 mt-[112px]">
                                <CoordinatesLabel label="Potansiyel" />
                            </div>
                            {/* Create values of y coordinates */}
                            <div className="flex transform -rotate-90 -translate-x-16 translate-y-20 h-4">
                                <CoordinatesY className={"ml-8 -mt-8"} label={"Düşük"}/>
                                <CoordinatesY className={"ml-24 -mt-8"} label={"Yüksek"}/>
                            </div>
                            <div className="flex transform -translate-x-80 border-solid border-2 border-inherit rounded-0.25x align-middle"></div>
                        </div>
                        <MatrixGrid color={color} gridSize={gridSize} />
                        {/* Create values of x coordinates */}
                        <div className="flex w-56 border-solid border-2 border-inherit rounded-0.25x align-middle ml-18"></div>
                        <div>
                            <CoordinatesX className={" ml-20"} label="Düşük" />
                            <CoordinatesX className={" ml-24"} label="Yüksek" />
                        </div>
                        {/* Create label of x coordinates */}
                        <div className='flex ml-36'>
                            <CoordinatesLabel label="Performans" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-10 mt-6">
                        <div className="flex justify-center items-center">
                            <div className="w-[17px] h-[17px] bg-primary-fon rounded-full"></div>
                            <div className="font-mon text-neutral-500 font-medium italic ml-2">Yetenek kutucuklarına isim ve renk vererek özelleştirebilirsiniz.</div>
                        </div>
                        {/* To enter the name of each box */}
                        <div className="flex font-mon text-neutral-600 mt-4">Kutucuk Adı</div>
                        <div className="flex">
                            <input
                            type="text"
                            className="font-mon text-neutral-600 border-solid border-inherit border-2 w-full p-1"
                            placeholder="Yetenek Kodu Giriniz"
                            />
                        </div>
                        {/* Pick a color of box in palette */}
                        <div className="mt-4">
                            <text className="font-mon text-neutral-600">Renk</text>
                            <ColorPicker color={color} handleChange={handleColorChange} />
                        </div>
                        {/* To explain talent each box */}
                        <div className="flex font-mon text-neutral-600 mt-4">Açıklama</div>
                        <div className="flex">
                            <input
                            type="text" 
                            className="font-mon text-neutral-600 border-solid border-inherit border-2 w-full p-1 mb-20"
                            placeholder="Yetenek Kodu Açıklaması Giriniz"
                            />
                        </div>
                    </div>
            </div>
        )
    } 
}
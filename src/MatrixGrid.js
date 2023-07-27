import React, {useState} from 'react';

export default function MatrixGrid({color, gridSize}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(index);
    };

    const gridElementsThree = [
      { backgroundColor: 'bg-primary-fon' },
      { backgroundColor: 'bg-primary-middle' },
      { backgroundColor: 'bg-primary-dark' },
      { backgroundColor: 'bg-secondary-light' },
      { backgroundColor: 'bg-primary-fon' },
      { backgroundColor: 'bg-primary-middle' },
      { backgroundColor: 'bg-secondary-main' },
      { backgroundColor: 'bg-secondary-light' },
      { backgroundColor: 'bg-primary-fon' },
    ];
    
    const gridElementsTwo = [
      { backgroundColor: 'bg-primary-fon' },
      { backgroundColor: 'bg-primary-dark' },
      { backgroundColor: 'bg-secondary-main' },
      { backgroundColor: 'bg-primary-fon' },
    ];

    if (gridSize === 3) {
      return (
        <div className="grid gap-0.5 grid-cols-3 grid-rows-3 w-80 h-72 -mt-72 ml-20">
        {/* Create 9 box matrix */}
          {gridElementsThree.map((grid, index) => (
            <div
              className={`flex justify-center items-center ${grid.backgroundColor} w-18.75 h-18.75 cursor-pointer`}
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: activeIndex === index ? color : grid.backgroundColor,
                borderStyle: activeIndex === index ? 'solid' : 'none',
                borderWidth: activeIndex === index ? '4px' : '0px',
                borderColor: activeIndex === index ? 'gainsboro' : 'white'
              }}
            ></div>
          ))}
        </div>
      )
    }
    else{
      return(
        <div className="grid gap-0.5 grid-cols-2 grid-rows-2 w-64 h-64 -mt-40 ml-20">
          {/* Create 4 box matrix */}
          {gridElementsTwo.map((grid, index) => (
          <div
            className={`flex justify-center items-center ${grid.backgroundColor} w-18.75 h-18.75 cursor-pointer`}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: activeIndex === index ? color : grid.backgroundColor,
              borderStyle: activeIndex === index ? 'solid' : 'none',
              borderWidth: activeIndex === index ? '4px' : '0px',
              borderColor: activeIndex === index ? 'gainsboro' : 'white'
            }}
          ></div>
        ))}
        </div>
      )
    }
}
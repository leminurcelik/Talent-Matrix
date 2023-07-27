import React from "react";
import { TwitterPicker } from 'react-color';

export default function ColorPicker({ color, handleChange }) {
    //Create color palette 
    const myColors = ['#8ED1FC', '#0693E3', '#F78DA7', '#9900EF', '#81c784', "#795548", '#FFEB3B'];
    
    return (
      <div className="mt-4">
        <TwitterPicker colors={myColors} color={color} onChangeComplete={handleChange} />
      </div>
    );
}
import React from 'react';
import Navigation from './Navigation';
import MatrixType from './MatrixType';

export default function App() {
  return (
    <div className="w-full">
      <Navigation label="Yetenek Matrisi" />
      <MatrixType title="Matris Tipi"/>
    </div>
  );
}
import React, { useState } from 'react';
import SmoothieForm from './SmoothieForm';
import Smoothie from './Smoothie';

const Smoothies = () => {
    const [smoothies, setSmoothies] = useState([]);
    const removeSmoothie = (id) => {
        setSmoothies(smoothies.filter(smoothie => {
          return smoothie.id !== id;
        }));
      };
    const renderSmoothies = smoothies.length ? smoothies.map(smoothie => {
        return (
          <Smoothie 
            smoothie={smoothie} 
            key={smoothie.id}
            removeSmoothie={removeSmoothie}
          />
        );
      }) : 'Smoothie Not added.';
      const addSmoothie = (smoothie) => {
        setSmoothies([
          ...smoothies,
          smoothie
        ]);
      };

    return (
        <>
            <h1>Smoothie List</h1>
            <SmoothieForm addSmoothie={addSmoothie} />
            {renderSmoothies}
        </>
    );
};

export default Smoothies;
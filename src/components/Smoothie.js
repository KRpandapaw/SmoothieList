import React from 'react';


const Smoothie = ({ smoothie, removeSmoothie }) => {
    return (
        <div className="smoothie">
            <div className="smoothie-title">
                {smoothie.title}
                <span className="smoothie-rate">
                    ({smoothie.rate})
                </span>
            </div>
            <div>
                <button onClick={() => removeSmoothie(smoothie.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Smoothie;
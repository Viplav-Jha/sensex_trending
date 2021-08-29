import React from 'react';
import "./Chip.css";

function Chip(abc) {
    return (
        <div className="Chip">
        <div className="chip__avatar">
            <img src={abc.image} width={10} height={10} />
        </div>
        <div className="chip__label">
        <span>{abc.lable}</span>

        </div>
            </div>
    );
}

export default Chip;
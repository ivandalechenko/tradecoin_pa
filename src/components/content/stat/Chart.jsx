import React from 'react';

const Chart = ({ prices, dots }) => {
    return (
        <svg width="1600" height="700" viewBox="0 0 1600 700" fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0 200,L100 200,L200 500,L300 100,L400 300" stroke="#2CBA65" stroke-width="3" />
            <path d="M0 700,L0 200,  L100 200,L200 500,L300 100,L400 300 L1600 700Z" fill="url(#fone)" />
            <defs>
                <linearGradient id="fone" x1="533.5" y1="0" x2="533.5" y2="700" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DBA65" stop-opacity="0.31" />
                    <stop offset="1" stop-color="#A7EC61" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default Chart
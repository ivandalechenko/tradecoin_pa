import React, { useState } from 'react';

const Images = () => {
    return (
        <div className="right transiton_show_hide" id="right">
            <div className="line free_image">
                <img src="img/login/line.png" alt='decor' />
            </div>
            <div className="eth free_image">
                <img src="img/login/eth.png" alt='decor' />
            </div>
            <div className="btc free_image">
                <img src="img/login/btc.png" alt='decor' />
            </div>
            <div className="shadow free_image">
                <img src="img/login/shadow.png" alt='decor' />
            </div>
            <div className="safe free_image">
                <img src="img/login/safe.png" alt="decor" />
            </div>
        </div>
    )
}

export default Images
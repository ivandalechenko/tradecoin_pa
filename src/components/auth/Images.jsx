import React, { useEffect, useState } from 'react';

const Images = ({ authType }) => {
    const [rotate, setRotate] = useState(false)
    const [imgType, setImgType] = useState("safe")
    useEffect(() => {
        setRotate(true)
        setTimeout(() => setRotate(false), 400)
        authType == 'login' ? setTimeout(() => setImgType('safe'), 100) : setTimeout(() => setImgType('usd'), 100)
    }, [authType])
    return (
        <div className="right transiton_show_hide" id="right">
            <div className="line free_image">
                <img src="/img/login/line.png" alt='decor' />
            </div>
            <div className="eth free_image">
                <img src="/img/login/eth.png" alt='decor' />
            </div>
            <div className="btc free_image">
                <img src="/img/login/btc.png" alt='decor' />
            </div>
            <div className="shadow free_image">
                <img src="/img/login/shadow.png" alt='decor' />
            </div>
            <div className="safe free_image">
                <img src={
                    imgType == 'safe'
                        ? "/img/login/safe.png"
                        : "/img/login/usd.png"} className={rotate ? "rotate" : ""} alt="decor" />
            </div>
        </div>
    )
}

export default Images
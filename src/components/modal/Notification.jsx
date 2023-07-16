import React, { useEffect } from 'react';

const Notification = ({ notificationShow, setNotificationShow, message }) => {

    useEffect(() => {
        setTimeout(() => {
            setNotificationShow(false)
        }, 5000)
    }, [notificationShow])
    return (
        <>
            {
                notificationShow
                    ? <>
                        <div className="notification">
                            <div className="inner">
                                <div className="info">
                                    <img src="img/pa/modal/info.svg" alt="info" />
                                    <div className="text">
                                        {message}
                                    </div>
                                </div>
                                <img className="closer" src="img/pa/modal/cross.svg" alt="cross" onClick={() => setNotificationShow(false)} />
                            </div>
                        </div>
                    </>
                    : <></>
            }
        </>
    )
}

export default Notification
import React, { useEffect, useState } from 'react';

const Times = ({ period, timesCount }) => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const mounth = day * 30
    const year = day * 365
    const [times, setTimes] = useState([])
    const monthNames = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec',
    }
    useEffect(() => {
        var timesArr = []
        for (let i = timesCount - 1; i >= 0; i--) {
            var timeStamp = Date.now() - i * period
            var date = new Date(timeStamp);
            if (period >= mounth && period < 2 * mounth) {
                timesArr.push(monthNames[date.getMonth() + 1])
            } else if (period >= mounth * 2) {
                timesArr.push(date.getFullYear())
            } else {
                timesArr.push(date.getDate() + ' ' + monthNames[date.getMonth() + 1])
            }
        }
        setTimes(timesArr)
    }, [period, timesCount])


    return (
        <div className="times_and_zero">
            <div className="zero"></div>
            <div className="times">
                {
                    times.map((time, index) => {
                        return <div className="time" key={index}>
                            {time}
                            <div className="details">
                                <div className="details_inner">

                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Times
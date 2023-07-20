import React from 'react';
import Chart from './Chart';
import Prices from './Prices';

const ChartBlock = (props) => {
    return (
        <div className="section" id="chart">
            <div className="header">
                Detailed statistics
            </div>
            <div className="chart_wrapper">
                <div className="chart">
                    <Chart />
                </div>
            </div>
            <Prices prices={{ maxPrice: 10000, minPrice: 0, steps: 7 }} />
            <div className="times_and_zero">
                <div className="zero"></div>
                <div className="times">
                    <div className="time">00:00</div>
                    <div className="time">01:00</div>
                    <div className="time">02:00</div>
                    <div className="time">03:00</div>
                    <div className="time">04:00</div>
                    <div className="time">05:00</div>
                    <div className="time">06:00</div>
                    <div className="time">07:00</div>
                    <div className="time">08:00</div>
                    <div className="time">09:00</div>
                    <div className="time">10:00</div>
                    <div className="time">11:00</div>
                    <div className="time">12:00</div>
                    <div className="time">13:00</div>
                    <div className="time">14:00</div>
                    <div className="time">15:00</div>
                </div>
            </div>
        </div>
    )
}

export default ChartBlock
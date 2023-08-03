import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chart = ({ props }) => {
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }
    var pricesArr = props.prices.slice(0)
    var maxPrice = getMaxOfArray(pricesArr)
    var minPrice = getMinOfArray(pricesArr)


    const chartWidth = Math.round(document.documentElement.clientWidth / 3) * 2

    const chartHeight = 54 * (props.steps - 1)

    // Подгонка нижней границы под ноль
    var delta = Math.abs(minPrice)
    if (minPrice < 0) {
        pricesArr.map((price, index) => {
            pricesArr[index] += delta
        })
        maxPrice += delta
    } else {
        pricesArr.map((price, index) => {
            pricesArr[index] -= delta
        })
        maxPrice -= delta
    }
    minPrice = 0
    // Подгонка верхней границы под char
    if (maxPrice > chartHeight) {
        var k = maxPrice / chartHeight
        pricesArr.map((price, index) => {
            pricesArr[index] /= k
        })
    } else {
        var k = chartHeight / maxPrice
        pricesArr.map((price, index) => {
            pricesArr[index] *= k
        })
    }
    // Переворот графика
    pricesArr.map((price, index) => {
        pricesArr[index] = Math.abs(pricesArr[index] - chartHeight)
    })
    // Отображение графика
    var path = ''
    pricesArr.map((price, index) => {
        if (index != 0) { path += 'L' }
        path += (Math.round(chartWidth / (pricesArr.length - 1)) * index) + ' ' + price + ','
    })
    // Круги
    var circles = []
    pricesArr.map((price, index) => {
        circles.push({ x: (Math.round(chartWidth / (pricesArr.length - 1)) * index), y: price })
    })

    const [show, setShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false])

    const showRound = (index) => {
        var showList = [false, false, false, false, false, false, false, false, false, false, false, false]
        showList[index] = true
        setShow(showList)
        console.log(showList)
    }

    return (
        // <motion.svg
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }} width={chartWidth} height={chartHeight} viewBox={"0 -3 " + (chartWidth + 3) + ' ' + (chartHeight + 6)} fill="none" xmlns="http://www.w3.org/2000/svg"
        //     preserveAspectRatio="none">
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} width={chartWidth} height={chartHeight} viewBox={"-20 -20 " + (chartWidth + 42) + ' ' + (chartHeight + 40)} fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">

            <path d={'M' + path} stroke="#2CBA65" strokeWidth="3" />
            <path d={"M0 " + chartHeight + "," + path + "L" + chartWidth + " " + chartHeight + "Z"} fill="url(#fone)" />
            {
                circles.map((circle, index) => {
                    return <>
                        <g className={show[index] && 'show'}>
                            {/* <g > */}
                            <rect className="bg" x={circle.x - 20} rx="20" ry="20" y="-20" width="40" height={chartHeight + 40} fill="#2DBA65" />
                            <circle cx={circle.x} cy={circle.y} r="12" fill="white" />
                            <circle cx={circle.x} cy={circle.y} r="8.5" stroke="#2CBA65" stroke-width="7" />
                            {/* <text x={circle.x - 20} y={circle.y + 200} fill="red">Мой</text> */}
                            <rect className='bg_info'
                                x={circle.x > 70 ? circle.x < chartWidth - 70 ? circle.x - 70 : circle.x - 125 : circle.x - 15}
                                y={circle.y > 120 ? circle.y - 80 : circle.y + 20}
                                height={60}
                                width={140}
                                fill='#454545' />
                        </g >
                        <rect onMouseEnter={() => { showRound(index) }} className='activator' x={circle.x - 40} rx="20" ry="20" y="-20" width="80" height={chartHeight + 40} fill='black' />
                    </>
                })
            }
            <defs>
                <linearGradient id="fone" x1="533.5" y1="0" x2="533.5" y2={chartHeight} gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DBA65" stop-opacity="0.31" />
                    <stop offset="1" stop-color="#A7EC61" stop-opacity="0" />
                </linearGradient>
            </defs>
        </motion.svg >

    )
}

export default Chart
import React from 'react';

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

    const chartHeight = 50 * (props.steps - 1)

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



    var path = ''
    pricesArr.map((price, index) => {
        if (index != 0) { path += 'L' }
        path += (Math.round(chartWidth / (pricesArr.length - 1)) * index) + ' ' + price + ','
    })


    return (
        <svg width={chartWidth} height={chartHeight} viewBox={"0 0 " + chartWidth + ' ' + chartHeight} fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">

            <path d={'M' + path} stroke="#2CBA65" strokeWidth="3" />
            <path d={"M0 " + chartHeight + "," + path + "L" + chartWidth + " " + chartHeight + "Z"} fill="url(#fone)" />
            <defs>
                <linearGradient id="fone" x1="533.5" y1="0" x2="533.5" y2={chartHeight} gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DBA65" stop-opacity="0.31" />
                    <stop offset="1" stop-color="#A7EC61" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default Chart
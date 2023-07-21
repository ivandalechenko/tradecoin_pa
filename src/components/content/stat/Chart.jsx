import React from 'react';

const Chart = ({ prices }) => {
    const chartWidth = 1600
    const chartHeight = 700
    // "M0 200,L100 200,L200 500,L300 100,L400 300"

    // Подгонка нижней границы под ноль
    var delta = Math.abs(prices.minPrice)
    if (prices.minPrice < 0) {
        prices.prices.map((price, index) => {
            prices.prices[index] += delta
        })
        prices.maxPrice += delta
    } else {
        prices.prices.map((price, index) => {
            prices.prices[index] -= delta
        })
        prices.maxPrice -= delta
    }
    prices.minPrice = 0
    // Подгонка верхней границы под char
    if (prices.maxPrice > chartHeight) {
        var k = prices.maxPrice / chartHeight
        prices.prices.map((price, index) => {
            prices.prices[index] /= k
        })
    } else {
        var k = chartHeight / prices.maxPrice
        prices.prices.map((price, index) => {
            prices.prices[index] *= k
        })
    }
    // Переворот графика
    prices.prices.map((price, index) => {
        prices.prices[index] = Math.abs(prices.prices[index] - chartHeight)
    })



    var path = ''
    prices.prices.map((price, index) => {
        if (index != 0) { path += 'L' }
        path += (Math.round(chartWidth / (prices.prices.length - 1)) * index) + ' ' + price + ','
    })


    return (
        <svg width={chartWidth} height={chartHeight} viewBox={"0 0 " + chartWidth + ' ' + chartHeight} fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">

            <path d={'M' + path} stroke="#2CBA65" strokeWidth="3" />
            <path d={"M0 700," + path + "L" + chartWidth + " " + chartHeight + "Z"} fill="url(#fone)" />
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
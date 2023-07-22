import React from 'react';

const Prices = ({ props }) => {
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }
    var prices = props.prices.slice(0)
    var steps = props.steps
    var maxPrice = getMaxOfArray(prices)
    var minPrice = getMinOfArray(prices)
    console.log(prices)

    var priceArray = []
    priceArray.push(maxPrice)

    for (let i = 1; i < steps - 1; i++) {
        var price = maxPrice - ((maxPrice - minPrice) / (steps - 1)) * i
        for (let j = -5; j < 5; j++) {
            if (Math.abs(price) >= Math.pow(10, j + 2)) {
                price = Math.round(price / Math.pow(10, j)) * Math.pow(10, j)
                if (j < 0) {
                    price = Math.round(price * Math.pow(10, Math.abs(j))) / Math.pow(10, Math.abs(j))
                }

            }
        }
        priceArray.push(price)
    }
    priceArray.push(minPrice)
    return (
        <div className="lines_and_prices">
            {
                priceArray.map((el, index) => {
                    return <div key={index} className="line_and_price">
                        <div className="price">
                            ${el}
                        </div>
                        <div className="line"></div>
                    </div>
                })
            }
        </div>
    )
}

export default Prices
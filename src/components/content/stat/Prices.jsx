import React from 'react';

const Prices = ({ prices }) => {
    var priceArray = []
    priceArray.push(prices.minPrice)
    for (let i = 1; i < prices.steps - 1; i++) {
        priceArray.push(Math.round(((prices.maxPrice - prices.minPrice) / prices.steps) * i))
    }
    priceArray.push(prices.maxPrice)
    console.log(priceArray)
    return (
        <div className="lines_and_prices">
            {
                priceArray.map((el) => {
                    <div className="line_and_price">
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
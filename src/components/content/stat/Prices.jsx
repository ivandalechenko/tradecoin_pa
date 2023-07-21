import React from 'react';

const Prices = ({ prices }) => {
    var priceArray = []
    priceArray.push(prices.maxPrice)

    for (let i = 1; i < prices.steps - 1; i++) {
        var price = prices.maxPrice - ((prices.maxPrice - prices.minPrice) / (prices.steps - 1)) * i
        for (let j = -5; j < 5; j++) {
            if (price >= Math.pow(10, j + 2)) {
                price = Math.round(price / Math.pow(10, j)) * Math.pow(10, j)
                if (j < 0) {
                    price = Math.round(price * Math.pow(10, Math.abs(j))) / Math.pow(10, Math.abs(j))
                }
            }
        }
        priceArray.push(price)
    }
    priceArray.push(prices.minPrice)
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
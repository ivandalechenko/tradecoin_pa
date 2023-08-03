import React from 'react';
import { motion } from 'framer-motion';

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

    var priceArray = []

    for (let i = 0; i < steps; i++) {
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
    return (
        <div className="lines_and_prices">
            {
                priceArray.map((el, index) => {
                    return <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} key={index} className="line_and_price">
                        <div className="price">
                            ${el}
                        </div>
                        <div className="line"></div>
                    </motion.div>
                })
            }
        </div>
    )
}

export default Prices
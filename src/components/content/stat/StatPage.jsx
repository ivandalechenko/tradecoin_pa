import React, { useEffect, useState } from 'react';
import Balance from './Balance';
import ChartBlock from './ChartBlock';
import { motion } from 'framer-motion';
import Transactions from './Transactions';

const StatPage = () => {
    useEffect(() => {
        document.title = "Statistics - TradeCoinAI";
    }, []);
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const [period, setPeriod] = useState(day * 3)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id='content'
        >
            <div id="ref_page">
                <Balance setPeriod={setPeriod} period={period} />
                <ChartBlock period={period} />
                <Transactions />
            </div>
        </motion.div>
    )
}

export default StatPage
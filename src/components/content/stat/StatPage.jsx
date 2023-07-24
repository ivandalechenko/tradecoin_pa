import React, { useEffect } from 'react';
import Balance from './Balance';
import ChartBlock from './ChartBlock';
import { motion } from 'framer-motion';
import Transactions from './Transactions';

const StatPage = () => {
    useEffect(() => {
        document.title = "Statistics - TradeCoinAI";
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id='content'
        >
            <div id="ref_page">
                <Balance />
                <ChartBlock />
                <Transactions />
            </div>
        </motion.div>
    )
}

export default StatPage
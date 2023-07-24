import React, { useEffect } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import HorizontalLine from '../../UI/HorizontalLine';
import Balance from './Balance';
import ChartBlock from './ChartBlock';
import { motion } from 'framer-motion';

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
                {/* <Balance />
                    <ChartBlock /> */}
                <div className='section'>
                    Coming soon :)
                </div>
            </div>
        </motion.div>
    )
}

export default StatPage
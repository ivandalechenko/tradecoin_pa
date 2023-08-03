import React from 'react';
import { motion } from 'framer-motion';

const Balance = ({ balance, refEarned, balanceLoading }) => {
    return (
        <div className="info">
            <div className="name">
                <img src="img/pa/rounds_green.svg" alt='rounds green' />
                <div className="text">
                    Your referal balance
                </div>
            </div>
            <div className="count">
                <div className="num">
                    {balanceLoading ? <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} src='/img/pa/mini_loader2.svg' width='60' height='55' /> : <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>{"$" + balance}</motion.div>}
                </div>
                {/* {!isBalanceLoading && <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} className="percent">
                                    +0%
                                </motion.div>
                            </>} */}
            </div>
            <div className="earned">
                {!balanceLoading && <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} className="text">
                        Referals earned
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} className="num">
                        {Math.round(refEarned * 100) / 100}$
                    </motion.div>
                </>}
            </div>
        </div>
    )
}

export default Balance
import React, { useEffect, useState } from 'react';
import ChangeTarifCheckStatus from '../../UI/ChangeTarifCheckStatus';
import { useDispatch, useSelector } from 'react-redux';
import { getBalanceAction } from '../../../redux/userActions';
import { warningNotification } from '../../../redux/notificationActions';
import { motion } from 'framer-motion';

const Balance = ({ setPeriod, period }) => {
    const { money } = useSelector(state => state.userReducer)
    const [isBalanceLoading, setIsBalanceLoading] = useState(true)
    const dispatch = useDispatch()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const mounth = day * 30
    const year = day * 365

    const getBalance = () => {
        setIsBalanceLoading(true)
        dispatch(getBalanceAction())
            .then(() => {
                setIsBalanceLoading(false)
            })
            .catch(function (error) {
                warningNotification("Invalid API keys")
                setIsBalanceLoading(false)
                dispatch({ type: 'UPDATE_BALANCE', payload: { balance: 0, profit: 0 } })
            });
    }
    useEffect(() => {
        getBalance();
    }, [])


    return (
        <div className="section" id="balance">
            <div className="header ">
                <div className="name h5">
                    Your balance
                </div>
                <div className="period">
                    <div className="text">
                        Select period
                    </div>
                    <div className="elements">
                        <div className={period == day * 3 ? "active" : ""} onClick={() => setPeriod(day * 3)}>
                            3d
                        </div>
                        <div className={period == week ? "active" : ""} onClick={() => setPeriod(week)}>
                            7d
                        </div>
                        <div className={period == week * 2 ? "active" : ""} onClick={() => setPeriod(week * 2)}>
                            2w
                        </div>
                        <div className={period == mounth ? "active" : ""} onClick={() => setPeriod(mounth)}>
                            1m
                        </div>
                        <div className={period == year ? "active" : ""} onClick={() => setPeriod(year)}>
                            1y
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr">
            </div>
            <div className="content">
                <div className="balance">
                    <div className="info">
                        <div className="name">
                            <img src="img/pa/rounds_green.svg" alt='rounds green' />
                            <div className="text">
                                Your balance
                            </div>
                        </div>
                        <div className="count">
                            <div className="num">
                                {isBalanceLoading ? <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} src='/img/pa/mini_loader2.svg' width='60' height='55' /> : <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}>{"$" + money.balance}</motion.div>}
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
                            {!isBalanceLoading && <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} className="text">
                                    Earned
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} className="num">
                                    {Math.round(money.profit * 100) / 100}$
                                </motion.div>
                            </>}
                        </div>
                    </div>
                </div>
                <ChangeTarifCheckStatus type={'stat'} />
            </div>
        </div>
    )
}

export default Balance
import React, { useEffect, useState } from 'react';
import ChangeTarifCheckStatus from '../../UI/ChangeTarifCheckStatus';
import { getBalanceAction } from '../../../redux/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { warningNotification } from '../../../redux/notificationActions';
import { motion } from 'framer-motion';


const Balance = (props) => {
    const { money } = useSelector(state => state.userReducer)
    const [isBalanceLoading, setIsBalanceLoading] = useState(true)
    const dispatch = useDispatch()

    const getBalance = () => {
        setIsBalanceLoading(true)
        dispatch(getBalanceAction())
            .then(() => {
                setIsBalanceLoading(false)
            })
            .catch(function (error) {
                console.log(error)
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
            <div className="header h5">
                Your balance
            </div>
            <div className="hr">
            </div>
            <div className="content">
                <div className="balance">
                    <div className="round">
                        <img src="img/pa/balance_round.svg" alt='balance round' />
                        <div className="text">
                            +0%
                        </div>
                    </div>
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
                <ChangeTarifCheckStatus type={'profile'} />
            </div>
        </div >
    )
}

export default Balance
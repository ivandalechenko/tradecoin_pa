import React, { useEffect, useState } from 'react';
import TransactionElement from './TransactionElement';
import Secure from '../Secure';
import { getHistoryOfTradesAction, getPaymentsAction, getStatisticAction } from '../../../redux/userActions';
import { useDispatch } from 'react-redux';
import HorizontalLine from '../../UI/HorizontalLine';
import { motion } from 'framer-motion';

const Transactions = (props) => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [category, setCategory] = useState('ai_pro')
    // const [category, setCategory] = useState('basic')
    // const [category, setCategory] = useState('ai_premium')

    const [totalTransactions, setTotalTransactions] = useState(limit)
    const [totalPages, setTotaPages] = useState(1)
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTotaPages(Math.ceil(totalTransactions / limit))
    }, [totalTransactions])

    const dispatch = useDispatch()
    const loadMore = (limit) => {
        getPayments(limit + 6, 1, category)
        setLimit(limit + 6)
    }

    const getPayments = (limitP, pageP, categotyP) => {
        var paymentsArr = []
        setLoading(true)
        setPage(pageP)
        const data = {
            limit: limitP,
            page: pageP,
            category: categotyP,
        }
        // Билд
        dispatch(getHistoryOfTradesAction(data))
            .then((data) => {
                setLoading(false)
                setTotalTransactions(data.total)
                setPayments(data.transactions)
                console.log(data)
            })
            .catch(function (error) {
                setLoading(false)
            });
    }

    useEffect(() => {
        getPayments(6, 1, category)
    }, [category])
    return (
        <div className="section" id="stat_table">
            <div className="header_large">
                Transaction History of Our Users
            </div>
            <div className="header_small">
                Our ByBit trading bot from TradeCoinAI boosts the rate of your successful trades!
            </div>
            <div className="transactions_navigation">
                <div className={category == 'basic' ? 'transactions_navigation_active' : "transactions_navigation_element"} onClick={() => { setCategory('basic') }}>
                    Basic
                </div>
                <div className={category == 'ai_pro' ? 'transactions_navigation_active' : "transactions_navigation_element"} onClick={() => { setCategory('ai_pro') }}>
                    AI Pro
                </div>
                <div className={category == 'ai_premium' ? 'transactions_navigation_active' : "transactions_navigation_element"} onClick={() => { setCategory('ai_premium') }}>
                    AI Premium
                </div>
            </div>
            <>
                {
                    loading
                        ? <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} className="loader" style={{ height: 547 }}>
                            <img src='img/pa/loader.svg' />
                        </motion.div>
                        : <>
                            {payments.length > 0
                                ? <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    <div className="table">
                                        <div className="element">
                                            <div className="num">
                                                #
                                            </div>
                                            <div className="type">
                                                Type
                                            </div>
                                            <div className="pair">
                                                Pair
                                            </div>
                                            <div className="date">
                                                Date
                                            </div>
                                            <div className="count">
                                                Count
                                            </div>
                                            <div className="price">
                                                Price
                                            </div>
                                            <div className="profit">
                                                Profit
                                            </div>
                                        </div>
                                        {
                                            payments.map((payment, index) => {
                                                payment = { ...payment, num: (index + 1) + (page - 1) * 6 }
                                                return <TransactionElement key={index} props={payment} />
                                            })
                                        }
                                        <button className="send_info_button" onClick={() => { loadMore(limit) }}>
                                            {loading
                                                ? <>Loading...</>
                                                : <>Load more</>}

                                        </button>
                                    </div>
                                    <div className="security_and_pages">
                                        <Secure />
                                        <div className="pages">
                                            {
                                                page != 1
                                                    ?
                                                    <button onClick={() => { getPayments(limit, page - 1, category) }}>
                                                        <img src="img/pa/left_arr.svg" alt="left arrow" width="8" height="14" />
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page > 2
                                                    ? <button onClick={() => { getPayments(limit, 1, category) }}>
                                                        1
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page > 3
                                                    ? <button>
                                                        ...
                                                    </button>
                                                    : <></>
                                            }

                                            {
                                                page > 1
                                                    ? <button onClick={() => { getPayments(limit, page - 1, category) }}>
                                                        {page - 1}
                                                    </button>
                                                    : <></>
                                            }

                                            {
                                                totalPages > 1
                                                    ?
                                                    <button className="active">
                                                        {page}
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page < totalPages
                                                    ? <button onClick={() => { getPayments(limit, page + 1, category) }}>
                                                        {page + 1}
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page < totalPages - 2
                                                    ? <button>
                                                        ...
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page < totalPages - 1
                                                    ? <button onClick={() => { getPayments(limit, totalPages, category) }}>
                                                        {totalPages}
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page != totalPages
                                                    ?
                                                    <button onClick={() => { getPayments(limit, page + 1, category) }}>
                                                        <img src="img/pa/right_arr.svg" alt="right arrow" width="8" height="14" />
                                                    </button>
                                                    : <></>
                                            }
                                        </div>
                                    </div>
                                </motion.div>
                                : <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }} className='no_transactions'>No trades have been made yet</motion.div>}
                        </>
                }
            </>
        </div >
    )
}

export default Transactions
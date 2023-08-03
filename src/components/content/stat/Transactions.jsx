import React, { useEffect, useState } from 'react';
import TransactionElement from './TransactionElement';
import Secure from '../Secure';
import { getPaymentsAction, getStatisticAction } from '../../../redux/userActions';
import { useDispatch } from 'react-redux';
import HorizontalLine from '../../UI/HorizontalLine';
import { motion } from 'framer-motion';

const Transaction = (props) => {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [totalTransactions, setTotalTransactions] = useState(limit)
    const [totalPages, setTotaPages] = useState(1)
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTotaPages(Math.ceil(totalTransactions / limit))
    }, [totalTransactions])

    const dispatch = useDispatch()
    const loadMore = (limit) => {
        getPayments(limit + 6, 1)
        setLimit(limit + 6)
    }

    const getPayments = (limitP, pageP) => {
        var paymentsArr = []
        setLoading(true)
        setPage(pageP)
        const data = {
            limit: limitP,
            page: pageP,
        }
        // Билд
        dispatch(getStatisticAction(data))
            .then((data) => {
                setLoading(false)
                setTotalTransactions(data.total)
                setPayments(data.statistics)
            })
            .catch(function (error) {
                setLoading(false)
            });

        // Тест
        // setTimeout(() => { setLoading(false) }, 1000)
        // for (let i = 0; i < limitP; i++) {
        //     paymentsArr.push({ id: 1234 * pageP + i, type: 'short', shoulder: 'x10', pair: "BNB/USDT", date: '11 Sep, 2001', count: '10', price: '23400', volume: '20', profit: { num: 10, percent: 2 } })
        // }
        // var total = 50
        // setTotalTransactions(total)
        // setPayments(paymentsArr)
    }

    useEffect(() => {
        getPayments(6, 1)
    }, [])
    return (
        <div className="section" id="stat_table">
            <div className="header h5">
                History of trades
            </div>
            <HorizontalLine />
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
                                                Пара
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
                                            <div className="volume">
                                                Volume
                                            </div>
                                            <div className="profit">
                                                Your profit
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
                                                    <button onClick={() => { getPayments(limit, page - 1) }}>
                                                        <img src="img/pa/left_arr.svg" alt="left arrow" width="8" height="14" />
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page > 2
                                                    ? <button onClick={() => { getPayments(limit, 1) }}>
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
                                                    ? <button onClick={() => { getPayments(limit, page - 1) }}>
                                                        {page - 1}
                                                    </button>
                                                    : <></>
                                            }

                                            <button className="active">
                                                {page}
                                            </button>
                                            {
                                                page < totalPages
                                                    ? <button onClick={() => { getPayments(limit, page + 1) }}>
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
                                                    ? <button onClick={() => { getPayments(limit, totalPages) }}>
                                                        {totalPages}
                                                    </button>
                                                    : <></>
                                            }
                                            {
                                                page != totalPages
                                                    ?
                                                    <button onClick={() => { getPayments(limit, page + 1) }}>
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
                                    exit={{ opacity: 0 }} className='no_transactions'>So far no transactions have been made</motion.div>}
                        </>
                }
            </>
        </div >
    )
}

export default Transaction
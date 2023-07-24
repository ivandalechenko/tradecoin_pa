import React, { useEffect, useState } from 'react';
import TransactionElement from './TransactionElement';
import Secure from '../Secure';
import { getPaymentsAction } from '../../../redux/userActions';
import { useDispatch } from 'react-redux';
import HorizontalLine from '../../UI/HorizontalLine';

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

        // const data = {
        //     limit: limitP,
        //     page: pageP,
        // }
        // dispatch(getPaymentsAction(data))
        //     .then((data) => {
        //         console.log(data)
        //         setLoading(false)
        //         setTotalTransactions(data.total)
        //         setPayments(data.payments)
        //     })
        //     .catch(function (error) {
        //         setLoading(false)
        //     });

        setTimeout(() => { setLoading(false) }, 1000)
        for (let i = 0; i < limitP; i++) {
            paymentsArr.push({ user: { id: 1234 * pageP + i, name: 'trader' + pageP * limitP + i }, tariff: 'basic', fullPrice: 100, earned: 5, percent: 5, payed: true })
        }
        var total = 50
        setTotalTransactions(total)
        setPayments(paymentsArr)
    }

    useEffect(() => {
        getPayments(6, 1)
    }, [])
    return (
        <>
            <div className="section" id="ref">
                <div className="header h5">
                    Your balance
                </div>
                <HorizontalLine />
                {
                    loading
                        ? <div className="loader">
                            <img src='img/pa/loader.svg' />
                        </div>
                        : <>
                            {payments.length > 0
                                ? <>
                                    <div className="table">
                                        <div className="element">
                                            <div className="num">
                                                #
                                            </div>
                                            <div className="type">
                                                Nickname
                                            </div>
                                            <div className="date">
                                                Date
                                            </div>
                                            <div className="earned">
                                                Earned
                                            </div>
                                            <div className="sum">
                                                Your profit
                                            </div>
                                        </div>
                                        {
                                            payments.map((payment, index) => {
                                                return <TransactionElement key="index" props={{ id: (page - 1) * limit + index + 1, user: payment.user.username, tariff: payment.tariff, fullPrice: payment.fullPrice, earned: payment.earned, percent: payment.percent, date: payment.updatedAt }} />
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
                                </>
                                : <div className='no_transactions'>Your referrals have not made any transactions yet</div>}
                        </>
                }
            </div>
        </>
    )
}

export default Transaction
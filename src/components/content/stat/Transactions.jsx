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
            <div className="section" id="stat_table">
                <div className="header h5">
                    History of trades
                </div>
                <div className="notransactions">So far no transactions have been made</div>
            </div>
        </>
    )
}

export default Transaction
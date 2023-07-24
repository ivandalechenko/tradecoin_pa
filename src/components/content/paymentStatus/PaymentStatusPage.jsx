import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const PaymentStatusPage = (props) => {
    const { status } = useParams()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id='content'
        >
            <div id="profile_page" className="page">
                <div className="section paymentStatus">
                    <div className="text_img">
                        <img src={status == 'success' ? "/img/pa/success.svg" : "/img/pa/fail.svg"} alt="" />
                        <div className="text">
                            {status == 'success' ? 'Payment was successful' : 'Payment failed'}
                        </div>
                        <Link to="/manage_tarif">
                            <img src='/img/pa/left_arr.svg' />Back to tarifs
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default PaymentStatusPage
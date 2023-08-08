import React, { useEffect, useState } from 'react';
import Secure from '../Secure';
import Pagination from '../../UI/Pagination';
import PreviousPaymentsTable from './PreviousPaymentsTable';
import Offers from './Offers';
import CurrentTarif from './CurrentTarif';
import Modal from '../../modal/Modal';
import { motion } from 'framer-motion';
import HaveProblems from '../HaveProblems';
import Transaction from '../manageTarif/Transactions';

const ManageTarifPage = () => {
    useEffect(() => {
        document.title = "Manage tarifs - TradeCoinAI";
    }, []);
    const [modalType, setModalType] = useState('hidden')
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id='content'
            >
                <div id="manage_tarif_page">
                    <Modal modalType={modalType} setModalType={setModalType} />
                    <CurrentTarif />
                    <div className="section" id="select_other_tarif">
                        <div className="header h5">
                            Select other tarif
                        </div>
                        <Offers />
                    </div>
                    <Transaction />
                </div>
                <HaveProblems />
            </motion.div>
        </>

    )
}

export default ManageTarifPage
import React, { useEffect, useState } from 'react';
import Secure from '../Secure';
import Pagination from '../../UI/Pagination';
import PreviousPaymentsTable from './PreviousPaymentsTable';
import Offers from './Offers';
import CurrentTarif from './CurrentTarif';
import Sidebar from '../../sidebar/Sidebar';
import Modal from '../../modal/Modal';

const ManageTarifPage = () => {
    useEffect(() => {
        document.title = "Manage tarifs - TradeCoinAI";
    }, []);
    const [modalType, setModalType] = useState('hidden')
    return (
        <>
            <Modal modalType={modalType} setModalType={setModalType} />
            <div id='content'>
                <div id="manage_tarif_page">
                    <CurrentTarif />
                    <div className="section" id="select_other_tarif">
                        <div className="header h5">
                            Select other tarif
                        </div>
                        <Offers />
                    </div>
                    {/* <div className="section" id="previous_payments">
                        <div className="header h5">
                            Previous payments
                        </div>
                        <PreviousPaymentsTable />
                        <div className="security_and_pages">
                            <Secure />
                            <Pagination />
                        </div>
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default ManageTarifPage
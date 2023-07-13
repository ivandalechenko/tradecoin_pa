import React from 'react';
import Secure from './Secure';
import Pagination from './Pagination';
import PreviousPaymentsTable from './PreviousPaymentsTable';
import Offers from './Offers';
import CurrentTarif from './CurrentTarif';
import Sidebar from '../sidebar/Sidebar';

const ManageTarifPage = ({ setModalType }) => {
    return (
        <div className="container">
            <Sidebar setModalType={setModalType} />
            <div id='content'>
                <div id="manage_tarif_page">
                    <CurrentTarif />
                    <div className="section" id="select_other_tarif">
                        <div className="header h5">
                            Select other tarif
                        </div>
                        <Offers />
                    </div>
                    <div className="section" id="previous_payments">
                        <div className="header h5">
                            Previous payments
                        </div>
                        <PreviousPaymentsTable />
                        <div className="security_and_pages">
                            <Secure />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageTarifPage
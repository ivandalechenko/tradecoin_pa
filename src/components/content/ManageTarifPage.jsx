import React from 'react';
import Secure from './Secure';
import Pagination from './Pagination';
import PreviousPaymentsTable from './PreviousPaymentsTable';
import Offers from './Offers';
import CurrentTarif from './CurrentTarif';
import Sidebar from '../sidebar/Sidebar';

const ManageTarifPage = (props) => {
    return (
        <div className="container">
            <Sidebar />
            <div id='content'>
                <div id="manage_tarif_page">
                    <CurrentTarif />
                    <div class="section" id="select_other_tarif">
                        <div class="header h5">
                            Select other tarif
                        </div>
                        <Offers />
                    </div>
                    <div class="section" id="previous_payments">
                        <div class="header h5">
                            Previous payments
                        </div>
                        <PreviousPaymentsTable />
                        <div class="security_and_pages">
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
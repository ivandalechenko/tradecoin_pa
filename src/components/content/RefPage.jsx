import React from 'react';
import HorizontalLine from '../UI/HorizontalLine';
import HaveProblems from './HaveProblems';
import Secure from './Secure';
import Pagination from './Pagination';
import RefTable from './RefTable';
import Balance from '../UI/Balance';
import InviteLink from '../UI/InviteLink';

const RefPage = (props) => {
    return (
        <div id="ref_page">
            <div class="section" id="ref">
                <div class="header h5">
                    Your balance
                </div>
                <HorizontalLine />
                <div class="content">
                    <div class="balance">
                        <img src="img/pa/peoples.png" alt='peoples' />
                        <Balance />
                    </div>
                    <InviteLink />
                </div>
                <HorizontalLine />
                <div class="referals">
                    <RefTable />
                    <div class="security_and_pages">
                        <Secure />
                        <Pagination />
                    </div>
                </div>
            </div>
            <HaveProblems />
        </div>

    )
}

export default RefPage
import React from 'react';

const ModalTemporarilyUnavailable = ({ setModalType }) => {
    return (
        <div id="inner_add_api" className="modal_inner">
            <div className="header">
                <div className="name">
                    <div className="text">
                        Temporarily unavailable
                    </div>
                </div>
                <img className="modal_closer" src="img/pa/modal/cross.svg" alt="cross" onClick={() => setModalType("hidden")} />
            </div>
        </div>
    )
}

export default ModalTemporarilyUnavailable
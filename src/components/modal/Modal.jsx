import React from 'react';
import ModalAddApi from './ModalAddApi';

const Modal = ({ modalType, setModalType }) => {
    const rootClasses = ['modal']
    if (modalType !== 'hidden') {
        rootClasses.push('modal_show')
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setModalType("hidden")}>
            <div onClick={(e) => e.stopPropagation()}>
                <ModalAddApi setModalType={setModalType} />
            </div>
        </div>
    )
}

export default Modal
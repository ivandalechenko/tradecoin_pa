import React from 'react';
import ModalAddApi from './ModalAddApi';
import ModalLoader from './ModalLoader';

const Modal = ({ modalType, setModalType }) => {
    const rootClasses = ['modal']
    if (modalType !== 'hidden') {
        rootClasses.push('modal_show')
    }

    return (
        <>
            {modalType == 'loader'
                ? <ModalLoader />
                : <div className={rootClasses.join(' ')} onClick={() => setModalType("hidden")}>
                    <div onClick={(e) => e.stopPropagation()}>
                        {modalType == 'add_api'
                            ? <ModalAddApi setModalType={setModalType} />
                            : <></>
                        }
                    </div>
                </div>
            }

        </>
    )
}

export default Modal
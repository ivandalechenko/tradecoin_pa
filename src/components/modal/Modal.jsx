import React from 'react';
import ModalAddApi from './ModalAddApi';
import ModalLoader from './ModalLoader';
import ModalSelectYourWallet from './ModalSelectYourWallet';

const Modal = ({ modalType, setModalType, props }) => {
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
                        {modalType == 'select_your_wallet'
                            ? <ModalSelectYourWallet setModalType={setModalType} props={props} />
                            : <></>
                        }
                    </div>
                </div>
            }

        </>
    )
}

export default Modal
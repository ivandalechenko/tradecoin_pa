import React, { useEffect, useRef, useState } from 'react';
import ModalAddApi from './ModalAddApi';
import ModalLoader from './ModalLoader';
import ModalSelectYourWallet from './ModalSelectYourWallet';
import { AnimatePresence, motion } from 'framer-motion';
const Modal = ({ modalType, setModalType, props }) => {
    return (
        <AnimatePresence>
            {modalType == 'loader' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ModalLoader />
                </motion.div>)}

            {modalType == 'add_api' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ModalAddApi setModalType={setModalType} />
                </motion.div>
            )}

            {modalType == 'select_your_wallet' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ModalSelectYourWallet setModalType={setModalType} props={props} />

                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default Modal
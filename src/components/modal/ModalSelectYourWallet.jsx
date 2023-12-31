import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const ModalSelectYourWallet = ({ setModalType, props }) => {

    const [activePayType, setActivePayType] = useState('cc')

    // useEffect(() => {
    //     if (activePayType == 'mm') {
    //     }
    //     if (activePayType == 'wc') {
    //     }
    //     if (activePayType == 'tw') {
    //     }
    //     if (activePayType == 'card') {
    //     }
    // }, [activePayType]);

    const pay = () => {
        setModalType('loader')
        api.post('/payment/create-invoice', { tariff: props.tariff })
            .then((res) => {
                setModalType('hidden')
                window.open(res.data.response.result.url, '_blank');
            })
            .catch(() => {
                setModalType('hidden')
            })
    }

    return (
        <div className='modal modal_show' onClick={() => setModalType("hidden")}>
            <div onClick={(e) => e.stopPropagation()}>

                <div id="inner_select_your_wallet" className="modal_inner">
                    <div className="header">
                        <div className="name">
                            <div className="text">
                                Select your wallet
                            </div>
                        </div>
                        <img className="modal_closer" src="/img/pa/modal/cross.svg" alt="cross" onClick={() => setModalType("hidden")} />
                    </div>
                    <div className="content">
                        <div className="description">
                            Select wallet you would like to make transaction with
                        </div>
                        <div className={activePayType === 'cc' ? "wallet_type wallet_type_first selected" : "wallet_type wallet_type_first"} onClick={() => setActivePayType('cc')}>
                            <div className="border">
                            </div>
                            <img src="/img/pa/modal/platforms/cwallet.png" width={32} height={32} alt="" />
                            <div className="text">
                                Pay By Crypto
                            </div>
                        </div>

                        {/* <div className={activePayType === 'mm' ? "wallet_type wallet_type_first selected" : "wallet_type wallet_type_first"} onClick={() => setActivePayType('mm')}>
                            <div className="border">
                            </div>
                            <img src="/img/pa/modal/platforms/metamask.svg" alt="" />
                            <div className="text">
                                Metamask
                            </div>
                        </div>

                        
                        <div className={activePayType === 'wc' ? "wallet_type selected" : "wallet_type "} onClick={() => setActivePayType('wc')}>
                            <div className="border">
                            </div>
                            <img src="/img/pa/modal/platforms/wc.svg" alt="" />
                            <div className="text">
                                WalletConnect
                            </div>
                        </div>
                        <div className={activePayType === 'tw' ? "wallet_type selected" : "wallet_type "} onClick={() => setActivePayType('tw')}>
                            <div className="border">
                            </div>
                            <img src="/img/pa/modal/platforms/tw.svg" alt="" />
                            <div className="text">
                                Trust Wallet
                            </div>
                        </div> */}
                        <div className="or">
                            <div className="line">
                            </div>
                            <div className="text">
                                or
                            </div>
                            <div className="line">
                            </div>
                        </div>
                        {/* <div className={activePayType === 'card' ? "wallet_type wallet_type_first selected" : "wallet_type wallet_type_first "} onClick={() => setActivePayType('card')}> */}
                        <div className="wallet_type wallet_type_first selected">
                            {/* <div className="border"> */}
                            {/* </div> */}
                            <img src="/img/pa/modal/platforms/lock.svg" />
                            <img src="/img/pa/modal/platforms/wallet.svg" alt="" />
                            <div className="text">
                                Pay by card
                            </div>
                        </div>
                        <button className='accept_btn' onClick={pay}>Pay {props.price} & Subscribe</button>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default ModalSelectYourWallet
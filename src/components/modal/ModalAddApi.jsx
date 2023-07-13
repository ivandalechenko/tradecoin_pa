import React from 'react';

const ModalAddApi = ({ setModalType }) => {
    return (
        <div id="inner_add_api" className="modal_inner">
            <div className="header">
                <div className="name">
                    <img src="img/pa/modal/key.svg" alt="key" />
                    <div className="text">
                        Add crypto-key API
                    </div>
                </div>
                <img className="modal_closer" src="img/pa/modal/cross.svg" alt="cross" onClick={() => setModalType("hidden")} />
            </div>
            <div className="content">
                <div className="platforms">
                    <div className="platform">
                        <div className="border">
                        </div>
                        <div className="img">
                            <img src="img/pa/modal/platforms/binance.svg" alt="binance" />
                        </div>
                    </div>
                    <div className="platform selected">
                        <div className="border">
                        </div>
                        <div className="img">
                            <img src="img/pa/modal/platforms/bybit.svg" alt="bybit" />
                        </div>
                    </div>
                    <div className="platform">
                        <div className="border">
                        </div>
                        <div className="img">
                            <img src="img/pa/modal/platforms/bitget.png" alt="bitget" />
                        </div>
                    </div>
                </div>
                <div className="input_block input_block_first" id="email">
                    <img src="img/pa/modal/form_key.svg" alt="key" />
                    <div className="label_and_input">
                        <div className="label">
                            API key
                        </div>
                        <input type="text" placeholder="Enter API key" />
                    </div>
                </div>
                <div className="input_block" id="email">
                    <img src="img/pa/modal/form_lock.svg" alt="lock" />
                    <div className="label_and_input">
                        <div className="label">
                            Secret key
                        </div>
                        <input type="text" placeholder="Enter secret key" />
                    </div>
                </div>
                <div className="button_and_check">
                    <button className="send_info_button input_block_first">
                        Add API key
                    </button>
                    <div className="checkbox">
                        <div className="checkbox_wrapper checked">
                            <img src="img/pa/check.svg" alt="check" />
                        </div>
                        <div className="text">
                            I understang how to use API keys
                        </div>
                    </div>
                </div>
                <div className="steps_and_notice">
                    <div className="steps_and_bg">
                        <div className="bg">
                        </div>
                        <div className="steps">
                            <div className="step">
                                <button className="num">
                                    1
                                </button>
                                <div className="text">
                                    <div className="head">
                                        Step 1
                                    </div>
                                    <div className="info">
                                        Перейдите на сайт биржи
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <button className="num">
                                    2
                                </button>
                                <div className="text">
                                    <div className="head">
                                        Step 2
                                    </div>
                                    <div className="info">
                                        Create key “only for reading”
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <button className="num">
                                    3
                                </button>
                                <div className="text">
                                    <div className="head">
                                        Step 3
                                    </div>
                                    <div className="info">
                                        Enter the key
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notice">
                        <div className="wrapper">

                            <img src="img/pa/notice.svg" alt="notice" />
                            <div className="text">
                                <div className="head">
                                    Important!
                                </div>
                                <div className="info">
                                    Always use API keys “only for reading. Dairy book available only for features
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAddApi
import React from 'react';

const ModalAddApi = ({ setModalType }) => {
    return (
        <div id="inner_add_api" class="modal_inner">
            <div class="header">
                <div class="name">
                    <img src="img/pa/modal/key.svg" alt="key" />
                    <div class="text">
                        Add crypto-key API
                    </div>
                </div>
                <img class="modal_closer" src="img/pa/modal/cross.svg" alt="cross" onClick={() => setModalType("hidden")} />
            </div>
            <div class="content">
                <div class="platforms">
                    <div class="platform">
                        <div class="border">
                        </div>
                        <div class="img">
                            <img src="img/pa/modal/platforms/binance.svg" alt="binance" />
                        </div>
                    </div>
                    <div class="platform selected">
                        <div class="border">
                        </div>
                        <div class="img">
                            <img src="img/pa/modal/platforms/bybit.svg" alt="bybit" />
                        </div>
                    </div>
                    <div class="platform">
                        <div class="border">
                        </div>
                        <div class="img">
                            <img src="img/pa/modal/platforms/bitget.png" alt="bitget" />
                        </div>
                    </div>
                </div>
                <div class="input_block input_block_first" id="email">
                    <img src="img/pa/modal/form_key.svg" alt="key" />
                    <div class="label_and_input">
                        <div class="label">
                            API key
                        </div>
                        <input type="text" placeholder="Enter API key" />
                    </div>
                </div>
                <div class="input_block" id="email">
                    <img src="img/pa/modal/form_lock.svg" alt="lock" />
                    <div class="label_and_input">
                        <div class="label">
                            Secret key
                        </div>
                        <input type="text" placeholder="Enter secret key" />
                    </div>
                </div>
                <div class="button_and_check">
                    <button class="send_info_button input_block_first">
                        Add API key
                    </button>
                    <div class="checkbox">
                        <div class="checkbox_wrapper checked">
                            <img src="img/pa/check.svg" alt="check" />
                        </div>
                        <div class="text">
                            I understang how to use API keys
                        </div>
                    </div>
                </div>
                <div class="steps_and_notice">
                    <div class="steps_and_bg">
                        <div class="bg">
                        </div>
                        <div class="steps">
                            <div class="step">
                                <button class="num">
                                    1
                                </button>
                                <div class="text">
                                    <div class="head">
                                        Step 1
                                    </div>
                                    <div class="info">
                                        Перейдите на сайт биржи
                                    </div>
                                </div>
                            </div>
                            <div class="step">
                                <button class="num">
                                    2
                                </button>
                                <div class="text">
                                    <div class="head">
                                        Step 2
                                    </div>
                                    <div class="info">
                                        Create key “only for reading”
                                    </div>
                                </div>
                            </div>
                            <div class="step">
                                <button class="num">
                                    3
                                </button>
                                <div class="text">
                                    <div class="head">
                                        Step 3
                                    </div>
                                    <div class="info">
                                        Enter the key
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="notice">
                        <div class="wrapper">

                            <img src="img/pa/notice.svg" alt="notice" />
                            <div class="text">
                                <div class="head">
                                    Important!
                                </div>
                                <div class="info">
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
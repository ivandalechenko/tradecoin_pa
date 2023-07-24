import React from 'react';

const HaveProblems = (props) => {
    return (
        <div className="section" id="have_problems">
            <div className="chance">
                YOUR CHANCE
            </div>
            <div className="header">
                Have problems? Contact us
            </div>
            <p className="body">
                Professional platform for algorithmic and manual trading of cryptocurrencies
            </p>
            <div className="contancts">
                <div className="contact">
                    <img src="img/pa/mail.svg" alt='mail' />
                    <div className="text">
                        <div className="regular14">
                            Our mail
                        </div>
                        <div className="btn">
                            support@tradecoinai.com
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <img src="img/pa/telegram.svg" alt='telegram' />
                    <div className="text">
                        <div className="regular14">
                            Our mail
                        </div>
                        <div className="btn">
                            Tradecoinai@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="images">
                <div className="fone_mail free_image">
                    <img src="img/pa/mail.png" alt='mail' />
                </div>
            </div>
        </div>
    )
}

export default HaveProblems
import React from 'react';

const InviteLink = (props) => {
    return (
        <div className="invite_link">
            <div className="header">
                <img src="img/pa/arrow_out.svg" alt='arrow' />
                <div className="text">
                    Your invite link
                </div>
            </div>
            <div className="link_with_button">
                <div className="link">
                    Tradecoinai.com/invite/ref48392
                </div>
                <button id="copy_invite_link">
                    <div className="text">
                        Copy
                    </div>
                    <img src="img/pa/copy.svg" alt='copy' />
                </button>
            </div>
        </div>
    )
}

export default InviteLink
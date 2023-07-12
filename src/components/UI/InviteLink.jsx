import React from 'react';

const InviteLink = (props) => {
    return (
        <div class="invite_link">
            <div class="header">
                <img src="img/pa/arrow_out.svg" alt='arrow' />
                <div class="text">
                    Your invite link
                </div>
            </div>
            <div class="link_with_button">
                <div class="link">
                    Tradecoinai.com/invite/ref48392
                </div>
                <button id="copy_invite_link">
                    <div class="text">
                        Copy
                    </div>
                    <img src="img/pa/copy.svg" alt='copy' />
                </button>
            </div>
        </div>
    )
}

export default InviteLink
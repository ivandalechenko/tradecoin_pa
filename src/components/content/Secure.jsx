import React from 'react';

const Secure = (props) => {
    return (
        <div className="secure">
            <img alt="secure" className="lozad secure_img" src="img/pa/shield_check.svg" width="24"
                height="24" />
            <div className="medium15 secure_medium15">
                Ваши данные верифицированы по API платформы ByBit и надежно защищены!
            </div>

            <img alt="bybit" className="lozad secure_img" src="img/pa/bybit.svg" width="47" height="17" />
        </div>
    )
}

export default Secure
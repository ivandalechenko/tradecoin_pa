import React from 'react';

const Checkbox = ({ checked, setChecked, label }) => {

    const checkClick = () => {
        checked ? setChecked(false) : setChecked(true)
    }

    return (
        <div className="checkbox">
            <div className={checked ? "checkbox_wrapper checked" : "checkbox_wrapper"} onClick={checkClick}>
                {
                    checked
                        ? <img src="/img/pa/check.svg" alt="check" />
                        : <></>
                }

            </div>
            <div className="text">
                {label}
            </div>
        </div>
    )
}

export default Checkbox
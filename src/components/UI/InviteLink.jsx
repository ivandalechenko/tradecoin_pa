import React, { useEffect, useRef, useState } from 'react';
import useInput from '../../validation/useInput';
import Notification from '../modal/Notification';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import { updateRefCodeAction } from '../../redux/userActions';

const InviteLink = (props) => {
    const { user } = useSelector(state => state.userReducer)
    const [isRefCode, setIsRefCode] = useState(false)
    useEffect(() => {
        user.refCode ? setIsRefCode(true) : setIsRefCode(false)
    }, [])
    const host = 'https://app.tradecoinai.com/invite/'
    const [edited, setEdited] = useState(false)
    const referal = useInput(host + user.refCode, { minLength: host.length + 4, maxLength: host.length + 20 })
    referal.onChange = (e) => {
        referal.setValue(e.target.value)
        setIsRefCode(true)
        setEdited(true)
    }
    const [modalType, setModalType] = useState('hidden')

    const [notificationShow, setNotificationShow] = useState(false)
    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setServerError('')
    }, [referal.value])

    useEffect(() => {
        if (referal.value.slice(0, host.length) != host) {
            referal.setValue(host + referal.value.slice(host.length + 1))
        }
    }, [referal.value])
    const input = useRef(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const savecopy = () => {
        if (referal.isDirty) {
            if (referal.isValid) {
                setModalType('loader')
                const data = {
                    refCode: referal.value.slice(host.length),
                }
                dispatch(updateRefCodeAction(data))
                    .then(() => {
                        setModalType('hidden')
                        setNotificationShow(true)
                        referal.setIsDirty(false)
                        setEdited(false)
                    })
                    .catch(function (error) {
                        setModalType('hidden')
                        setServerError(error)
                    });
            }
        } else {
            navigator.clipboard.writeText(referal.value)
        }
    }

    return (
        <div className="invite_link">
            <Modal setModalType={setModalType} modalType={modalType} />
            <Notification notificationShow={notificationShow} setNotificationShow={setNotificationShow} message={"Invite link changed"} />
            <div className="header">
                <img src="img/pa/arrow_out.svg" alt='arrow' />
                <div className="text">
                    {
                        isRefCode
                            ? <>Your invite link</>
                            : <>Enter your referral code in the field below</>
                    }

                </div>
            </div>
            <div className="link_with_button">
                <div className="link">
                    <input type='text' value={referal.value} onChange={referal.onChange} onBlur={referal.onBlur} ref={input} />

                </div>
                {
                    isRefCode
                        ? <button id="copy_invite_link" className={edited
                            ? "save"
                            : "copy"
                        } onClick={savecopy}>
                            <div className="text">
                                {edited
                                    ? <>Save</>
                                    : <>Copy</>
                                }
                            </div>
                            <img src={edited
                                ? "img/pa/save.svg"
                                : "img/pa/copy.svg"
                            } alt='copy' />
                        </button>
                        : <></>
                }

            </div>

            <div className="errors">
                {
                    serverError
                        ? <div className='error'>{serverError}</div>
                        : <></>
                }
                {
                    referal.isDirty
                        ?
                        <>
                            {referal.minLength ? <div className='error'>Referral code must be at least 4 characters long</div> : <></>}
                            {referal.maxLength ? <div className='error'>The length of the referral code must be no more than 20 characters</div> : <></>}
                        </>
                        : <></>
                }
            </div>
        </div>
    )
}

export default InviteLink
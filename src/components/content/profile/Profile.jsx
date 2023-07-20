import React, { useState, useEffect } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button';
import HorizontalLine from '../../UI/HorizontalLine';
import { useDispatch, useSelector } from "react-redux";
import Notification from '../../modal/Notification';
import useInput from '../../../validation/useInput';
import { updateUsernameAction } from '../../../redux/userActions';
import Modal from '../../modal/Modal';

const Profile = (props) => {
    const { user } = useSelector(state => state.userReducer)
    const email = user.email
    const username = useInput(user.username, { isEmpty: true, minLength: 6, maxLength: 32, isNotEquals: user.username })

    const [serverError, setServerError] = useState('')
    const [modalType, setModalType] = useState('hidden')

    const [notificationShow, setNotificationShow] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        console.log(user)
    }, []);
    useEffect(() => {
        setServerError('')
    }, [username.value]);

    const changeUsername = () => {
        if (username.isDirty && username.isValid && !serverError) {
            setModalType('loader')
            const data = {
                username: username.value,
            }
            dispatch(updateUsernameAction(data))
                .then(() => {
                    setModalType('hidden')
                    setNotificationShow(true)
                })
                .catch(function (error) {
                    setModalType('hidden')
                    setServerError(error)
                });
        }
    }



    return (
        <div className="section" id="profile">
            <Notification notificationShow={notificationShow} setNotificationShow={setNotificationShow} message="Username successfully changed" />
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="section_header h5">
                Profile
            </div>
            <HorizontalLine />
            <div className="content">
                <div className="img">
                    <img src="img/pa/empty_profile_photo.png" alt='profile_photo' />
                </div>
                <div className="info">
                    <div className="greetings">
                        Welcome back!
                    </div>
                    <div className="name">
                        @{user.username}
                    </div>
                    <div className="form">
                        <Input props={{
                            imageName: 'mail.svg',
                            label: "Your e-mail",
                            value: email,
                            readonly: true
                        }} />
                        <Input props={{
                            imageName: 'user.svg',
                            label: "Your username",
                            placeholder: "Enter your username",
                            username: true,
                            value: username.value,
                            onChange: username.onChange,
                            onBlur: username.onBlur,
                        }} />
                    </div>
                    <button className={username.isValid && !serverError ? "accept_btn_form accept_btn_valid" : "accept_btn_form"} onClick={changeUsername}>Save changes</button>

                    <div className="errors">
                        {
                            serverError
                                ? <div className='error'>{serverError}</div>
                                : <></>
                        }
                        {
                            username.isDirty
                                ?
                                <>
                                    {username.isEmpty ? <div className='error'>Enter username</div> : <>
                                        {username.maxLength ? <div className='error'>Username length must be no more than 32 characters</div> : <></>}
                                        {username.minLength ? <div className='error'>Username length must be at least 6 characters</div> : <></>}
                                        {!username.isNotEquals ? <div className='error'>The new username must be different from the previous one</div> : <></>}
                                    </>}
                                </>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
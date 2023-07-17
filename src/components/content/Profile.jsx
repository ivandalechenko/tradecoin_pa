import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import HorizontalLine from '../UI/HorizontalLine';
import { useSelector } from "react-redux";
import Notification from '../modal/Notification';

const Profile = (props) => {

    const { user } = useSelector(state => state.userReducer)
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [notificationShow, setNotificationShow] = useState(true)

    useEffect(() => {
        console.log(user)
        setEmail(user.email)
        setNickname(user.username)
    }, []);




    return (
        <div className="section" id="profile">
            {/* <Notification notificationShow={notificationShow} setNotificationShow={setNotificationShow} /> */}
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
                            placeholder: "Enter your e-mail",
                            value: email,
                            onChange: (e) => setEmail(e.target.value),
                            readonly: true
                        }} />
                        <Input props={{
                            imageName: 'user.svg',
                            label: "Your nickname",
                            placeholder: "Enter your nickname",
                            value: nickname,
                            onChange: (e) => setNickname(e.target.value)
                        }} />
                    </div>
                    <button className="send_info_button">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
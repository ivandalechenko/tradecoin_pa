import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import HorizontalLine from '../UI/HorizontalLine';

const Profile = (props) => {
    return (
        <div class="section" id="profile">
            <div class="section_header h5">
                Profile
            </div>
            <HorizontalLine />
            <div class="content">
                <div class="img">
                    <img src="img/pa/empty_profile_photo.png" alt='profile_photo' />
                </div>
                <div class="info">
                    <div class="greetings">
                        Welcome back!
                    </div>
                    <div class="name">
                        @trader_best
                    </div>
                    <div class="form">
                        <Input props={{
                            imageName: 'mail.svg',
                            label: "Your e-mail",
                            placeholder: "Enter your e-mail"
                        }} />
                        <Input props={{
                            imageName: 'user.svg',
                            label: "Your nickname",
                            placeholder: "Enter your nickname"
                        }} />
                    </div>
                    <Button props={{ text: 'Save changes' }} />
                </div>
            </div>
        </div>
    )
}

export default Profile
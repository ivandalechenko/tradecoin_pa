import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

const ChangePassword = (props) => {
    return (
        <div class="section" id="password">
            <div class="section_header h5">
                Change password
            </div>
            <div class="hr">
            </div>
            <div class="content">
                <div class="img">
                    <img src="img/pa/change_password_lock.png" alt='change password' />
                </div>
                <div class="info">
                    <div class="btn">
                        Old password
                    </div>
                    <div class="form">
                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password"
                        }} />
                    </div>
                    <div class="btn">
                        New password
                    </div>
                    <div class="form">
                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password"
                        }} />

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Repeat password",
                            placeholder: "Repeat your password"
                        }} />
                    </div>
                    <Button props={{ text: "Save changes" }} />
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
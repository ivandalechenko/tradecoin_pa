import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

const ChangePassword = (props) => {
    return (
        <div className="section" id="password">
            <div className="section_header h5">
                Change password
            </div>
            <div className="hr">
            </div>
            <div className="content">
                <div className="img">
                    <img src="img/pa/change_password_lock.png" alt='change password' />
                </div>
                <div className="info">
                    <div className="btn">
                        Old password
                    </div>
                    <div className="form">
                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password"
                        }} />
                    </div>
                    <div className="btn">
                        New password
                    </div>
                    <div className="form">
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
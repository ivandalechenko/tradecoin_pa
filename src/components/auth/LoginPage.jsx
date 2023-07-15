import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Images from './Images';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/userActions";


const LoginPage = () => {
    const [modalType, setModalType] = useState('hidden')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailChange = (event) => { setEmail(event.target.value); };
    const passwordChange = (event) => { setPassword(event.target.value); };

    const [printedError, setPrintedError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = () => {
        setModalType('loader')
        const data = {
            email: email,
            password: password,
        }
        dispatch(loginAction(data))
            .then(() => {
                setModalType('hidden')
                navigate("/profile")
            })
            .catch(function (error) {
                setModalType('hidden')
                setPrintedError(error.response.data.message)
            });
    }

    const { isLoggedIn } = useSelector(state => state.userReducer)
    if (isLoggedIn) return <Navigate to="/profile" replace />

    return (
        <div className="elements">
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="left transiton_show_hide" id="left">
                <div className="container" id="left_container">
                    <div className="logo">
                        <img src="img/login/logo.svg" alt='logo' />
                        <div className="text">
                            TradeCoinAi
                        </div>
                    </div>
                    <h1>
                        Login to TradeCoinAi
                    </h1>
                    <h2>
                        Please, login or sign up to your account
                    </h2>
                    <div className="log_reg_switcher_buttons">
                        <Link to={"/login"} className="active" id="login_switcher">Log in</Link>
                        <Link to={"/signup"}>Sign up</Link >
                    </div>


                    <Input props={{
                        imageName: 'mail.svg',
                        label: 'Your e-mail',
                        placeholder: 'Enter your e-mail',
                        onChange: emailChange,
                        value: email,
                    }} />
                    <Input props={{
                        imageName: 'dots.svg',
                        label: 'Your password',
                        placeholder: 'Enter your password',
                        onChange: passwordChange,
                        value: password,
                        password: true
                    }} />
                    <div className="errors">
                        <div className="error">
                            {printedError}
                        </div>
                    </div>
                    <button className="accept_btn" onClick={login}>Log in</button>
                    <div className="forgot_password" id="forgot_password">
                        <div className="text">
                            Forgot your password
                        </div>
                        <Link to={"/forgot_password"} id="recovery_password">Recovery password</Link>
                    </div>
                </div>
            </div>
            <Images />
        </div>
    )
}

export default LoginPage
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Modal from '../modal/Modal';
import { updatePasswordFromEmailAction } from '../../redux/userActions';

const NewPassword = () => {
    useEffect(() => {
        document.title = "New password - TradeCoinAI";
    }, []);


    const [printedError, setPrintedError] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const passwordChange = (event) => { setPassword(event.target.value); };
    const repeatPasswordChange = (event) => { setRepeatPassword(event.target.value); };
    const [canChange, setCanChange] = useState(false)

    const validatePasswords = () => {
        if (password.length == 0) {
            setPrintedError('Please enter password')
            setCanChange(false)
        } else if (repeatPassword.length == 0) {
            setPrintedError('Please repeat password')
            setCanChange(false)
        } else if (password.length < 6) {
            setPrintedError('Password length must be more than 5 characters')
            setCanChange(false)
        } else if (password == repeatPassword) {
            setPrintedError('Passwords must mutch')
            setCanChange(false)
        } else {
            setPrintedError('')
            setCanChange(true)
        }
    }

    const [modalType, setModalType] = useState('hidden')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updatePassword = () => {
        setModalType('loader')
        const data = {
            password: password,
        }
        dispatch(updatePasswordFromEmailAction(data))
            .then(() => {
                setModalType('hidden')
                navigate("/profile")
            })
            .catch(function (error) {
                setModalType('hidden')
                setPrintedError(error)
            });
    }

    // const { isLoggedIn } = useSelector(state => state.userReducer)
    // if (isLoggedIn) return <Navigate to="/profile" replace />
    return (
        <div className="elements">
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="modal_auth transiton_show_hide" id="modal_auth">
                <div className="modal_auth_inner">
                    <div className="back">
                        <Link to="/login">
                            <img src="img/login/left_arr.svg" />
                            Back to login
                        </Link>
                    </div>
                    <div className="form">
                        <h2 id="modal_h2">
                            Create new password
                        </h2>

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password",
                            password: true,
                            value: password,
                            onChange: setPassword,
                            onBlur: validatePasswords

                        }} />

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Repeat password",
                            placeholder: "Repeat your password",
                            password: true,
                            value: repeatPassword,
                            onChange: setRepeatPassword,
                            onBlur: validatePasswords
                        }} />
                        <div className="errors">
                            <div className="error">
                                {printedError}
                            </div>
                        </div>
                        <button className="send_code_btn" id="send_a_code" onClick={updatePassword}>
                            Change password
                        </button>
                    </div>
                </div>
                <div className="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default NewPassword
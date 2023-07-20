import { useEffect, useState } from "react";

const useValidation = (value, validations, setIsValid) => {
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const [isEmail, setIsEmail] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLength, setMinLength] = useState(false)
    const [maxLength, setMaxLength] = useState(false)
    const [length, setLength] = useState(false)
    const [isEquals, setIsEquals] = useState(true)
    const [isNotEquals, setIsNotEquals] = useState(true)
    useEffect(() => {
        setIsValid(true)
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    if (value) {
                        setIsEmpty(false)
                    } else {
                        setIsEmpty(true)
                        setIsValid(false)
                    }
                    break
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLength(true)
                        setIsValid(false)
                    } else {
                        setMinLength(false)
                    }
                    break
                case 'maxLength':
                    if (value.length > validations[validation]) {
                        setMaxLength(true)
                        setIsValid(false)
                    } else {
                        setMaxLength(false)
                    }
                    break
                case 'isEmail':
                    if (validateEmail(value)) {
                        setIsEmail(true)
                    } else {
                        setIsEmail(false)
                        setIsValid(false)
                    }
                    break
                case 'isEquals':
                    if (value != validations[validation]) {
                        setIsEquals(false)
                        setIsValid(false)
                    } else {
                        setIsEquals(true)
                    }
                    break
                case 'isNotEquals':
                    if (value != validations[validation]) {
                        setIsNotEquals(true)
                    } else {
                        setIsValid(false)
                        setIsNotEquals(false)
                    }
                    break
                case 'length':
                    if (value.length != validations[validation]) {
                        setLength(false)
                        setIsValid(false)
                    } else {
                        setLength(true)
                    }
                    break


            }
        }
    }, [value])

    return {
        isEmpty,
        minLength,
        maxLength,
        isEmail,
        isEquals,
        isNotEquals,
        length,
    }

}

export default useValidation;

import { useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const valid = useValidation(value, validations, setIsValid)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setIsDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        isValid,
        ...valid
    }
}

export default useInput;
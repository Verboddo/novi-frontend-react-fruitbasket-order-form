function NameLabel ({maxLenghtMessage, maxLengthValue, ageValue, ageMessage, id, errors, type, register, minLengthValue, minLengthMessage, labelName, children, registerName, patternValue, patternMessage}) {
    return (
        <label htmlFor={labelName}>
            {children}
            <input type={type}
                   {...register(registerName, {
                       pattern: {
                           value: patternValue,
                           message: patternMessage
                       },
                       minLength: {
                           value: minLengthValue,
                           message: minLengthMessage
                       },
                       maxLength: {
                           value: maxLengthValue,
                           message: maxLenghtMessage
                       },
                       min: {
                           value: ageValue,
                           message: ageMessage
                       },
                   })}
            />
            {errors[id] && <p>{errors[id].message}</p>}
        </label>
    )
}

export default NameLabel
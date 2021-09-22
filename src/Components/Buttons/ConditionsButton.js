function ConditionsButton({requiredMessage, errors, id, isRequired, type, inputId, name, labelName, children, register, registerName}) {
    return (
        <label htmlFor={labelName}>
            {children}
            <input
                {...register(registerName, {
                    required: {
                        value: isRequired,
                        message: requiredMessage
                    }
                })}
                type={type}
                id={inputId}
                name={name}
            />
            {errors[id] && <p>{errors[id].message}</p>}
        </label>
    )
}

export default ConditionsButton
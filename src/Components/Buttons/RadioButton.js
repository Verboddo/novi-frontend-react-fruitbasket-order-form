function RadioButton({registerName, value, isRequired, type, labelName, children, register, required}) {
    return (
        <div>
            <label htmlFor={labelName}>
                {children}
                <input
                    type={type}
                    value={value}
                    {...register(registerName, {
                        required: isRequired
                    })}
                />
            </label>
        </div>
    )
}

export default RadioButton
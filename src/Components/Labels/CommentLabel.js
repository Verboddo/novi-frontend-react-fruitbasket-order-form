function CommentLabel({labelName, registerName, colsAmount, rowsAmount, children, register}) {
    return (
        <label htmlFor={labelName}>
            <textarea
                {...register(registerName)}
                cols={colsAmount}
                rows={rowsAmount}>
            </textarea>
            {children}
        </label>
    )
}

export default CommentLabel
function Pharagraph({children, register, fruitValue, fruitName}) {

    return (
        <p{...register(fruitName, {value: {fruitValue}})}>{children}</p>
    )
}

export default Pharagraph

import React from "react";

function Minusbutton({className, children, minusOne}) {
    return (
        <button
            className={className}
            type="button"
            onClick={minusOne}
        >{children}
        </button>
    )
}

export default Minusbutton
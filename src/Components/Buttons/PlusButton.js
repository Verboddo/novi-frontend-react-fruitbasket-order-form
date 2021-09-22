import React from "react";

function PlusButton({className, children, plusOne}) {
    return (
        <button
            className={className}
            type="button"
            onClick={plusOne}
        >{children}
        </button>
    )
}

export default PlusButton
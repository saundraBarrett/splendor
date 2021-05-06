import React from 'react';

// Display token
const Token = (props) => {
    return (
        <div className="token-container" onClick={(t) => props.onClickFunction(props.token.id)}>
            <div className={"token token-"+props.token.gem}>
            <div className={"count-"+props.token.qty}>{props.token.qty}</div>
            </div>
        </div>
    )
}

export default Token;
import React from 'react';

// Display token
const Token = (props) => {
    return (
        <div className="token-container" onClick={props.onClickFunction ? () => props.onClickFunction(props.token.id) : null }>
            <div className={"token token-"+props.token.gem}>
            <div className={"count-"+props.token.qty}>{props.token.qty}</div>
            </div>
        </div>
    )
}

export default Token;
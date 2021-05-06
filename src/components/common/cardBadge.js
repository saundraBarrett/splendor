import React from 'react';

// card badge to show card color with points overlay
// expecting 2 properties {gem, qty}
const CardBadge = (props) => {
    return <div className={"card-badge "+props.gem}>{props.qty}</div>
}

export default CardBadge;
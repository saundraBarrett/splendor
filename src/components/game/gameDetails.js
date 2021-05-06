import React, { useEffect } from 'react';

function GameDetails() {
    
    useEffect(() => {
        fetch('https://api.boardgameatlas.com/api/search?ids=O0G8z5Wgz1&client_id=lSESTfkllX')
        .then(response => console.log(response))
        .then(error => console.log(error))
    })

    return (<div></div>)
}

export default GameDetails;
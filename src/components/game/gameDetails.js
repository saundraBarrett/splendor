import React, { useEffect } from 'react';

function GameDetails() {
    
    useEffect(() => {
        fetch('https://api.boardgameatlas.com/api/search?ids=O0G8z5Wgz1&client_id=lSESTfkllX')
        .then(response => console.log(response))
        .then(error => console.log(error))
    })
    
//const bggResponse = parseBggXmlApi2ThingResponse(response);
//const thing = bggResponse.item;
//console.log(thing)

    return (<div>He</div>)
}

export default GameDetails;
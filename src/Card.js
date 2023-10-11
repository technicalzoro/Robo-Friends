import React from "react";

const Card =({ name,email,id }) => {
   
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;
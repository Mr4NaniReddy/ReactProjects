import React from "react";

function MemberCard({name, id, image})
{
    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Role: {id}</h2>
            <img src={image} alt="" width="30px"/>
        </>
    )
}

export default MemberCard
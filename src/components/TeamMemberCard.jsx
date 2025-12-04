import React from "react";

function MemberCard({name, role})
{
    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Role: {role}</h2>
        </>
    )
}

export default MemberCard
import React from "react";


function AlreadyCompleted({tasks})
{
    return(
        <>
            <li className='task d-flex justify-content-between'>
            {tasks}
            </li>
        </>
    )
}   
export default AlreadyCompleted
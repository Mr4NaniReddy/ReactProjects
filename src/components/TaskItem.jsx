import React from "react";


function TaskItem({tasks, deleteFunction, completeFunction})
{
    return(
    <>
    <li className='task d-flex justify-content-between'>
        {tasks}
        <div className='task-buttons w-50 d-flex justify-content-end'>
            <button className='btn btn-sm btn-success'onClick={()=>{completeFunction(tasks)}}>Complete</button>
            <button className='btn btn-sm btn-danger' onClick={()=>{deleteFunction(tasks)}}>Delete</button>
        </div>
    </li>
    </>
    )
}

export default TaskItem
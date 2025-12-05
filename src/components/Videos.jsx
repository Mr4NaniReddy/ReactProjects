import React from "react";

function MyChannelVideos() 
{
    let videos = [
        "Village lo cooking",
        "bike maintaince",
        "Work from home remote"
    ]
    return (
        <>
            {
                videos.map((video,j)=>{
                    return <li>{video} - {j}</li>
                })
            }
        </>
    )
}

export default MyChannelVideos
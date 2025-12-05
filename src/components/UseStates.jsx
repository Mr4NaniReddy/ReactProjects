import React from "react";
import { useState, useEffect } from "react";

function useStates({messeage})
{
    const [videoname, setvideoname] = useState("Village");
    const [videolikes, setvideolikes] = useState(95);
    const [videoCompliment, setVideoCompliment] = useState("");

    useEffect(()=>{
        console.log("Components rendered")
    },[])

    useEffect(()=>{
        console.log("video likes updated")
    },[videolikes])

    return(
        <>
        <h1>Hi this is Use states</h1>
        <h5>Video name: {videoname}</h5>
        <h6>video likes: {videolikes}</h6>
        <button onClick={()=> {setvideolikes(videolikes + 1)}}>Like Video </button>
        <button onClick={()=> {setvideolikes(videolikes - 1)}}>Dislike Video </button>
        {
            videolikes < 100?
            <p>you got less likes</p>
            :<p>you crossed 100 likes hip hip hurry</p>
        }
        <form action="">
            <lable htmlfor="Video-compliment">VideoComplement</lable>
            <input type="text" name="Video-compliment" value={videoCompliment}
            onChange={(e)=>{
                setVideoCompliment(e.target.value);
            }} 
            />
        </form>
        <ChildComponent messeage={messeage}/>
        </>
    )
}

function ChildComponent({messeage})
{   
    return(
        <>
        <h6>ChildComponent</h6>
        {messeage}
        </>
    )
}

export default useStates
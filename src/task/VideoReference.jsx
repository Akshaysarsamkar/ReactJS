import React, { useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { IoReloadCircle } from "react-icons/io5";
import Style from "../task/Videoreference.module.css"

const VideoReference = () => {

    let videoRef = useRef()
    console.log(videoRef);



    return (
        <>
            <section>
                <aside className={Style.videoSection}>
                    <video src="/src/video/vi.mp4" height="300px" width="450px" ref={videoRef}></video>
                </aside>
                <aside className={Style.btns}>
                    <button onClick={() => videoRef.current.play()} className={Style}><FaPlay/></button>
                    <button onClick={() => videoRef.current.pause()} className={Style}><FaPauseCircle/></button>
                    <button onClick={() => videoRef.current.load()} className={Style}><IoReloadCircle/></button>
                </aside>
            </section>
        </>
    )
}

export default VideoReference


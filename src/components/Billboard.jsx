import { useEffect, useRef } from "react";
import { throttle } from "../libs/utils";

const Billboard = () => {
    const videoWrapper = useRef(null);
    const video = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', throttle(() => {
            video.current.currentTime = window.pageYOffset / 50;
        }, 100));
    }, [video]);

    return (
        <div ref={videoWrapper} className={`billboard bg-pink-light h-[85vh] flex items-center justify-center`}>
            <video ref={video} muted>
                <source src="./7525329-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Billboard
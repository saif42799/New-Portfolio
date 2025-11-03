import { useState } from "react";
function ConnectPage(){


    const slides = [
        {src: '/images/ED-screenshot-1.png', title: "image-1"},
        {src: '/images/ED-screenshot-2.png', title: "image-1"},
        {src: '/images/ED-screenshot-3.png', title: "image-1"},
        {src: '/images/ED-screenshot-4.png', title: "image-1"}
    ]; 

    const [currentIndex, setCurrentIndex] = useState(0);


    return(
        <div>
            <h1 className="page-title">CONNECT</h1>
           
            
        </div>
    )
}

export default ConnectPage;
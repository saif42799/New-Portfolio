import { useEffect, useState } from 'react';

function ProjectPage() {
   

    const projectSlides = {
        1:[
            { src: '/images/project-1-screenshot-7.webp', title: "image-1" },
            { src: '/images/project-1-screenshot-1.webp', title: "image-2" },
            { src: '/images/project-1-screenshot-2.webp', title: "image-3" },
            { src: '/images/project-1-screenshot-3.webp', title: "image-4" },
            { src: '/images/project-1-screenshot-4.webp', title: "image-5" },
            { src: '/images/project-1-screenshot-5.webp', title: "image-6" },
            { src: '/images/project-1-screenshot-6.webp', title: "image-7" }
        ], 
        2:[
            { src: 'https://i.gifer.com/2hk9.gif', title: "image-1" }
        ], 
        3:[
            { src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHo2Y3hodWI4dXBtbzAwOHV1dHMyc3JyaHE2dXF1YTcyOXRoeGl3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9K6CebIaqQmAMxJcJQ/giphy.gif', title: "image-1" }
        ], 
        4:[
            { src: 'https://i.gifer.com/Y3in.gif', title: "image-1" }
        ], 
        5:[
            { src: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aHYwYTc4Njk0MjRldWtqaGI3ZHF5YmJlcjZoYzk1OTYwOG9nZG1ieiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xRxLI1qWApeIlzkS9R/giphy.gif', title: "image-1" }
        ], 
        6:[
            { src: 'https://i.gifer.com/ZiaV.gif', title: "image-1" }
        ]
    };

    const [activeProject, setActiveProject] = useState(1);

    const slides = projectSlides[activeProject] || [];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };



    return (
        <div id="ProjectPage">
            <h1 className="page-title">PROJECTS</h1>

            <div className="multi-project-container">
                <div className="contained-project">

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            setActiveProject(1)
                        }>
                            <div className="half-circle-1"></div>
                            <h1>PHOTOGRAPHY <br></br> PORTFOLIO</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            setActiveProject(2)
                        }>
                            <div className="half-circle-3"></div>
                            <div className="inner-circle-1"></div>
                            <h1>PROJECT 2</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            setActiveProject(3)
                        }>
                            <div className="half-circle-1"></div>
                            <div className="inner-circle-2"></div>
                            <h1>PROJECT 3</h1>
                        </button>
                    </div>
                </div>

                <div className="contained-project">
                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            setActiveProject(4)
                        }>
                            <div className="half-circle-2"></div>
                            <h1>PROJECT 4</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            setActiveProject(5)
                        }>
                            <div className="half-circle-4"></div>
                            <div className="inner-circle-3"></div>
                            <h1>PROJECT 5</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            setActiveProject(6)
                        }>
                            <div className="half-circle-2"></div>
                            <div className="inner-circle-4"></div>
                            <h1>PROJECT 6</h1>
                        </button>
                    </div>
                </div>


            </div>


















            {activeProject === 1 && (

                <div className="single-project-container" id='display-container-1'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{   
                            backgroundImage: `url(${slides[currentIndex]?.src})`, loading: 'lazy' }}></div>

                    </div>

                    <div className="circle-ani" id="ran-ani-1"></div>
                    <div className="circle"></div>
                    

                    <div className="project-des">
                        <h1>CLIENT WORK</h1>
                        <p>A sleek, modern photography portfolio created for a client to showcase their stunning work. Check out the live website below!</p>

                        <div className="ex-links">
                            <a href="https://7b6a2249.emadswebsite.pages.dev/" target="blank"><img className="p-link" style={{ height: "20px" }} src="/images/external-link.png"></img></a>

                            <a href="https://github.com/saif42799/EmadsWebsite" target="blank"><img className="p-link" src="/images/github.png"></img></a>

                        </div>

                    </div>

                    <div className="tech-des">
                        <h1>TECH USED</h1>

                        <div className="tech-icons">
                            <img className="pg-icons" src="/images/html.png"></img>
                            <img className="pg-icons" src="/images/css-3(1).png"></img>
                            <img className="pg-icons" src="/images/java-script.png"></img>
                            <img className="pg-icons" src="/images/physics.png"></img>
                            <img className="pg-icons" src="/images/cloudflare.png"></img>
                        </div>

                    </div>

                </div>

            )}



















            {activeProject === 2 && (
                <div className="single-project-container" id='display-container-2'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex]?.src})` }}></div>

                    </div>

                    <div className="circle-ani" id="ran-ani-2"></div>
                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>JOB TRACKER</h1>
                        <p>Coming soon</p>

                        <div className="ex-links">
                            <a href="" target="blank"><img className="p-link" style={{ height: "20px" }} src="/images/external-link.png"></img></a>

                            <a href="" target="blank"><img className="p-link" src="/images/github.png"></img></a>

                        </div>

                    </div>

                    <div className="tech-des">
                        <h1>TECH USED</h1>

                        <div className="tech-icons">
                            <img className="pg-icons" src="/images/html.png"></img>
                            <img className="pg-icons" src="/images/css-3(1).png"></img>
                            <img className="pg-icons" src="/images/java-script.png"></img>
                            <img className="pg-icons" src="/images/physics.png"></img>
                            <img className="pg-icons" src="/images/cloudflare.png"></img>
                        </div>

                    </div>

                </div>
            )}






















            {activeProject === 3 && (

                <div className="single-project-container" id='display-container-3'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex]?.src})` }}></div>

                    </div>

                    <div className="circle-ani" id="ran-ani-3"></div>
                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>JDM STORE</h1>
                        <p>Coming soon</p>

                        <div className="ex-links">
                            <a href="" target="blank"><img className="p-link" style={{ height: "20px" }} src="/images/external-link.png"></img></a>

                            <a href="" target="blank"><img className="p-link" src="/images/github.png"></img></a>

                        </div>

                    </div>

                    <div className="tech-des">
                        <h1>TECH USED</h1>

                        <div className="tech-icons">
                            <img className="pg-icons" src="/images/html.png"></img>
                            <img className="pg-icons" src="/images/css-3(1).png"></img>
                            <img className="pg-icons" src="/images/java-script.png"></img>
                            <img className="pg-icons" src="/images/physics.png"></img>
                            <img className="pg-icons" src="/images/cloudflare.png"></img>
                        </div>

                    </div>

                </div>

            )}


























            {activeProject === 4 && (

                <div className="single-project-container" id='display-container-4'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex]?.src})` }}></div>

                    </div>

                    <div className="circle-ani" id="ran-ani-4"></div>
                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>FASHION WEBSITE</h1>
                        <p>Coming soon</p>

                        <div className="ex-links">
                            <a href="" target="blank"><img className="p-link" style={{ height: "20px" }} src="/images/external-link.png"></img></a>

                            <a href="" target="blank"><img className="p-link" src="/images/github.png"></img></a>

                        </div>

                    </div>

                    <div className="tech-des">
                        <h1>TECH USED</h1>

                        <div className="tech-icons">
                            <img className="pg-icons" src="/images/html.png"></img>
                            <img className="pg-icons" src="/images/css-3(1).png"></img>
                            <img className="pg-icons" src="/images/java-script.png"></img>
                            <img className="pg-icons" src="/images/physics.png"></img>
                            <img className="pg-icons" src="/images/cloudflare.png"></img>
                        </div>

                    </div>

                </div>

            )}



























            {activeProject === 5 && (

                <div className="single-project-container" id='display-container-5'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex]?.src})` }}></div>

                    </div>

                    <div className="circle-ani" id="ran-ani-5"></div>
                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 5</h1>
                        <p>Coming soon</p>

                        <div className="ex-links">
                            <a href="" target="blank"><img className="p-link" style={{ height: "20px" }} src="/images/external-link.png"></img></a>

                            <a href="" target="blank"><img className="p-link" src="/images/github.png"></img></a>

                        </div>

                    </div>

                    <div className="tech-des">
                        <h1>TECH USED</h1>

                        <div className="tech-icons">
                            <img className="pg-icons" src="/images/html.png"></img>
                            <img className="pg-icons" src="/images/css-3(1).png"></img>
                            <img className="pg-icons" src="/images/java-script.png"></img>
                            <img className="pg-icons" src="/images/physics.png"></img>
                            <img className="pg-icons" src="/images/cloudflare.png"></img>
                        </div>

                    </div>

                </div>
            )}



























            {activeProject === 6 && (
                <div className="single-project-container" id='display-container-6'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex]?.src})` }}></div>

                    </div>

                    <div className="circle-ani" id="ran-ani-6"></div>
                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 6</h1>
                        <p>Coming soon</p>

                        <div className="ex-links">
                            <a href="" target="blank"><img className="p-link" style={{ height: "20px" }} src="/images/external-link.png"></img></a>

                            <a href="" target="blank"><img className="p-link" src="/images/github.png"></img></a>

                        </div>

                    </div>

                    <div className="tech-des">
                        <h1>TECH USED</h1>

                        <div className="tech-icons">
                            <img className="pg-icons" src="/images/html.png"></img>
                            <img className="pg-icons" src="/images/css-3(1).png"></img>
                            <img className="pg-icons" src="/images/java-script.png"></img>
                            <img className="pg-icons" src="/images/physics.png"></img>
                            <img className="pg-icons" src="/images/cloudflare.png"></img>
                        </div>

                    </div>

                </div>
            )}









        </div>
    )
}

export default ProjectPage;



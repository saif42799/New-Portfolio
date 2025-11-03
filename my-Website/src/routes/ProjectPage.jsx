import { useEffect, useState } from 'react';

function ProjectPage() {
    const [slideIndex, setSlideIndex] = useState(1);

    // const handleThemeChange = (color) => {
    //     document.documentElement.style.setProperty('--main-bg-color', color);
    //     localStorage.setItem('theme', color);
    // };


    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('theme');
    //     if (savedTheme) {
    //         document.documentElement.style.setProperty('--main-bg-color', savedTheme);
    //     }
    // }, []);

    // const handleThemeChange = (pageIndex) => {
    //     document.documentElement.style.setProperty();
    // };


    const slides = [
        { src: '/images/ED-screenshot-1.png', title: "image-1" },
        { src: '/images/ED-screenshot-2.png', title: "image-1" },
        { src: '/images/ED-screenshot-3.png', title: "image-1" },
        { src: '/images/ED-screenshot-4.png', title: "image-1" }
    ];

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


    const [activeProject, setActiveProject] = useState(1);


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

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex].src})` }}></div>

                    </div>

                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 1</h1>
                        <p>I love creating cool things, solving problems, and building clean, intuitive interfaces that just feel right.</p>

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

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex].src})` }}></div>

                    </div>

                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 2</h1>
                        <p>I love creating cool things, solving problems, and building clean, intuitive interfaces that just feel right.</p>

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







            {activeProject === 3 && (

                <div className="single-project-container" id='display-container-3'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex].src})` }}></div>

                    </div>

                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 3</h1>
                        <p>I love creating cool things, solving problems, and building clean, intuitive interfaces that just feel right.</p>

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










            {activeProject === 4 && (

                <div className="single-project-container" id='display-container-4'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex].src})` }}></div>

                    </div>

                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 4</h1>
                        <p>I love creating cool things, solving problems, and building clean, intuitive interfaces that just feel right.</p>

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






            {activeProject === 5 && (

                <div className="single-project-container" id='display-container-5'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex].src})` }}></div>

                    </div>

                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 5</h1>
                        <p>I love creating cool things, solving problems, and building clean, intuitive interfaces that just feel right.</p>

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







            {activeProject === 6 && (
                <div className="single-project-container" id='display-container-6'>

                    <div className="btns">
                        <span className="btn-1" onClick={goToPrevious}>&#10094;</span>
                        <span className="btn-2" onClick={goToNext}>&#10095;</span>
                    </div>
                    <div className="box">

                        <div className="display-image" style={{ backgroundImage: `url(${slides[currentIndex].src})` }}></div>

                    </div>

                    <div className="circle"></div>

                    <div className="project-des">
                        <h1>PROJECT 6</h1>
                        <p>I love creating cool things, solving problems, and building clean, intuitive interfaces that just feel right.</p>

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









        </div>
    )
}

export default ProjectPage;




function ProjectPage() {

    const handleThemeChange = (color) => {
        document.documentElement.style.setProperty('--main-bg-color', color);
        localStorage.setItem('theme', gradient);
    };


    return (
        <div id="ProjectPage">
            <h1 className="page-title">PROJECTS</h1>

            <div className="multi-project-container">
                <div className="contained-project">

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            handleThemeChange('linear-gradient(to bottom, #ea3900, #ed5300, #ef6800, #f17b08, #f28c17)')
                        }>
                            <div className="half-circle-1"></div>
                            <h1>PHOTOGRAPHY <br></br> PORTFOLIO</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            handleThemeChange('linear-gradient(to bottom right, #FDE74C, #F9A602)')
                        }>
                            <div className="half-circle-3"></div>
                            <div className="inner-circle-1"></div>
                            <h1>PROJECT 2</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            handleThemeChange('linear-gradient(to bottom right, #9BC53D, #5A7D24)')
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
                            handleThemeChange('linear-gradient(to bottom right, #C19BF5, #8B5CF6)')
                        }>
                            <div className="half-circle-2"></div>
                            <h1>PROJECT 4</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            handleThemeChange('linear-gradient(to bottom right, #FF6B6B, #C44536)')
                        }>
                            <div className="half-circle-4"></div>
                            <div className="inner-circle-3"></div>
                            <h1>PROJECT 5</h1>
                        </button>
                    </div>

                    <div className="project-holder">
                        <button className="theme-button" onClick={() =>
                            handleThemeChange('linear-gradient(to bottom right, #EA3900, #F28C17)')
                        }>
                            <div className="half-circle-2"></div>
                            <div className="inner-circle-4"></div>
                            <h1>PROJECT 6</h1>
                        </button>
                    </div>
                </div>


            </div>

            <div className="single-project-container">
                <div className="box">
                    <img className="display-image" src="/images/idea 5.png"></img>
                </div>
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default ProjectPage;
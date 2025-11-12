
function AboutPage() {
    return (
        <div>

            <div className="text-container">
                <div className="text-box">
                    <h1>ME</h1>
                    <p>Based in <span>Atlanta, USA.</span></p>
                    <p>Graduated form <span>Georgia Gwinnett College</span></p>
                    <p>UI/UX Designer and Web Developer with 2 years of experience turning ideas into smooth, functional designs.</p>
                </div>

                <div className="text-box">
                    <h1>DRIVE</h1>
                    <p>I love creating cool things, solving <br></br>problems, and building clean, intuitive <br></br>interfaces that just feel right.</p>
                </div>

                <div className="text-box">
                    <h1>OBJECTIVE</h1>
                    <p>Keep building, keep improving, and keep<br></br> having fun doing it.</p>
                </div>
            </div>


            <div className="skills-container">
                <h2 className="hover"><img></img><span>&#8595;</span> HOVER</h2>

                <h1>SKILLS</h1>
                <div className="boxes">
                    <div className="skill-box">
                        <img src="/images/physics.png"></img>
                        <p>REACT</p>
                    </div>

                    <div className="skill-box">
                        <img src="/images/html.png"></img>
                        <p>HTML</p>
                    </div>

                    <div className="skill-box">
                        <img src="/images/css-3(1).png"></img>
                        <p>CSS</p>
                    </div>
                    <div className="skill-box-extend">
                        <img src="/images/java-script.png"></img>
                        <p>JAVASCRIPT</p>
                    </div>

                    <div className="skill-box-extend">
                        <img src="/images/typescript(1).png"></img>
                        <p>TYPESCRIPT</p>
                    </div>
                </div>

                <div className="boxes">
                    <div className="skill-box">
                        <img src="/images/java(1).png"></img>
                        <p>JAVA</p>
                    </div><div className="skill-box">
                        <img src="/images/figma.png"></img>
                        <p>FIGMA</p>
                    </div>

                    <div className="skill-box">
                        <img src="/images/developer.png"></img>
                        <p>NODE.JS</p>
                    </div>

                    <div className="skill-box">
                        <img src="/images/aws.png"></img>
                        <p>CLOUD</p>
                    </div>
                    <div className="skill-box">
                        <img src="/images/github.png"></img>
                        <p>GITHUB</p>
                    </div>
                </div>
            </div>


            <h1 className="page-title">ABOUT</h1>

            <img className="circle-img" src="/images/circle.png"></img>

        </div>
    )
}

export default AboutPage;
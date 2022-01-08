const Resume = () => {
    return (
        <>
            <br />
            <br />
            <h5 className="sectionHead">About</h5>
            <p className="introduction">
                I am a power system researcher specialized in high voltage power transmission.
                I am a life learner and at present proudly being a student of GT's OMSCS program specialized in computer systems. I living in Hangzhou, China with my family.
                I have abundant experience in scientific computing and engineering simulation and enjoy solving real world problems through coding.
            </p>
            <h5 className="sectionHead">Skill Set</h5>
            <ul className="introduction">
                <li>Python, JavaScript, C/C++, Java</li>
                <li>CSS, HTML, React, Node.js, Express, Redux</li>
                <li>SQLite, MongoDB</li>
                <li>gRPC, Pthread, IPC</li>
                <li>Numpy, Pandas, Matplotlib, Geopandas</li>
            </ul>
            <h5 className="sectionHead"> Education</h5>
            <ul className="introduction">
                <li>Georgia Institute of Technology
                    <ul>
                        <li>Master of Science in Computer Science (Expected May 2023)</li>
                    </ul>
                </li>
                <li> North China Electric Power University
                    <ul>
                        <li>Doctor of Engineering in Electrical Engineering (March 2013)</li>
                        <li>Bachelor of Engineering in Electrical Engineering (July 2008)</li>
                    </ul>
                </li>
            </ul>
            <h5 className="sectionHead">Experience</h5>
            <ul>
                <li className="introduction">State Grid Zhejiang Electric Power Research Institute
                    <ul>
                        <li>Tech Director, August 2020 to present</li>
                        <li>Senior Engineer, December 2016 to August 2020</li>
                        <li>Engineer, August 2013 to Dec 2016</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Resume
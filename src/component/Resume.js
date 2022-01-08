import { Container, Col, Row } from "react-bootstrap"
import { FaDatabase, FaLinux, FaReact, FaPython } from 'react-icons/fa';
import { SiNumpy } from 'react-icons/si';
const Resume = () => {
    return (
        <Container>
            <Row>
                <Col >
                </Col>
                <Col sm={11}>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</h5>
                    <p className="introduction">
                        I am a <a href="https://scholar.google.com/citations?user=jEqFraUAAAAJ&hl=en">power system researcher</a> specialized in high voltage power transmission.
                        I am a life learner and at present proudly being a student of GT's <a href="https://omscs.gatech.edu/">OMSCS program</a> specialized in computer systems.
                        I living in Hangzhou, China with my family.
                        I have broad experience in scientific computing and engineering simulation and enjoy solving real world problems through coding.
                    </p>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skill Set</h5>
                    <ul className="introduction">
                        <li><b><FaPython /> Languages: </b>Python, JavaScript, C/C++, Java</li>
                        <li><b><FaReact /> Web dev: </b>CSS, HTML, React, Node.js, Express, Redux</li>
                        <li><b><FaDatabase /> Database: </b>SQLite, MongoDB</li>
                        <li><b><FaLinux /> System Programming: </b>gRPC, Pthread, IPC</li>
                        <li><b><SiNumpy /> Data Science: </b>Numpy, Pandas, Matplotlib, Geopandas, sciKit-learn</li>
                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education</h5>
                    <ul className="introduction">
                        <li><b><a href="https://www.gatech.edu/">Georgia Institute of Technology</a></b>
                            <ul>
                                <li><b>Master of Science in Computer Science</b> </li>
                                <ul>
                                    <li>
                                        From January 2021 to May 2023 (Expected)
                                    </li>
                                    <li>
                                        Completed Courses:
                                        <ul>
                                            <li><a href="https://omscs.gatech.edu/cs-6035-introduction-to-information-security">Introduction to Information Security</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6200-introduction-operating-systems">Introduction to Operating Systems</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6601-artificial-intelligence">Artificial Intelligence</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        Ongoing Courses:
                                        <ul>
                                            <li><a href="https://omscs.gatech.edu/cs-6210-advanced-operating-systems">Advanced Operation Systems</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6250-computer-networks">Computer Networks</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <br />
                        <li> <b><a href="https://english.ncepu.edu.cn/">North China Electric Power University</a></b>
                            <ul>
                                <li><b>Doctor of Engineering in Electrical Theory and New Technology</b>
                                    <ul>
                                        <li>
                                            From Sepetember 2008 to March 2013
                                        </li>
                                        <li>
                                            Thesis Title: <a href="https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CDFD&dbname=CDFD1214&filename=1013315726.nh&uniplatform=NZKPT&v=zPqcfeMc0oXcbSZFYUFwbcqAMvRQGP2snGbhAg0ln9nZgZ2K8K54BdBhb5CYj-yI">
                                                Calculation Methods for Ion Flow Field from HVDC Transmission lines parallel with HVAC Transmission Lines and Its Applications</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><b>Bachelor of Engineering in Electrical Engineering </b></li>
                                <ul>
                                    <li>
                                        From Sepetember 2004 to July 2008
                                    </li>
                                    <li>
                                        Thesis Title: "Equivalent Circuit of the Impedance in the Hybrid Model of Transformer Windings"
                                    </li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience</h5>
                    <ul>
                        <li className="introduction"><b>State Grid Zhejiang Electric Power Research Institute</b>
                            <ul>
                                <li><b>Tech Director: </b>From August 2020 to present</li>
                                <li><b>Senior Engineer: </b>From December 2016 to August 2020</li>
                                <li><b>Engineer: </b>From August 2013 to Dec 2016</li>
                            </ul>
                        </li>
                    </ul>
                </Col>
                <Col >
                </Col>
            </Row>
        </Container>
    )
}

export default Resume
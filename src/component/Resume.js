import { Container, Col, Row } from "react-bootstrap"
import { FaDatabase, FaLinux, FaReact, FaPython, FaTools } from 'react-icons/fa';
import { FcElectroDevices, FcDataEncryption, FcCapacitor, FcDam } from 'react-icons/fc';
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
                        I am a student of GT's <a href="https://omscs.gatech.edu/">OMSCS program</a> specialized in computer systems.
                        I am expected to graduate with a MSCS degree in May 2023.
                        I have broad experience in scientific computing and engineering simulation and enjoy solving real world problems through coding.
                        I living in Milpitas, CA with my family and I like hiking and cooking.
                    </p>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skill Set</h5>
                    <ul className="introduction">
                        <li><b><FaPython /> Languages: </b>Python, C/C++,JavaScript, Java, SQL</li>
                        <li><b><FaReact /> Web dev: </b>CSS, HTML, React, Node.js, Express, Redux, Bootstrap UI</li>
                        <li><b><FaDatabase /> Database: </b>SQLite, MongoDB</li>
                        <li><b><FaTools /> Tools:</b> Shell, SSH, Git, Linux, vscode, Docker, Virtualbox, WSL</li>
                        <li><b><FaLinux /> System Programming: </b>gRPC, CUDA, openMP, MPI, pthreads, libvirt</li>
                        <li><b><SiNumpy /> Data Science: </b>Numpy, Pandas, Matplotlib, Geopandas, sciKit-learn</li>
                    </ul>
                    <br />
                    {/* <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research Interests</h5>
                    <ul className="introduction">
                        <li><FcElectroDevices /> Power System <b>Electromagnetic Compatibility</b></li>
                        <li><FcCapacitor /> Large-Scale Power System Simulation based on <b>High Performance Computing</b></li>
                        <li><FcDataEncryption /> Power System <b>Big Data</b> Analysis</li>
                        <li><FcDam /> <b>Artificial Intelligence</b> based Power System <b>Climate Disaster</b> Warning & Mitigation</li>
                    </ul>
                    <br /> */}
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education</h5>
                    <ul className="introduction">
                        <li><b><a href="https://www.gatech.edu/">Georgia Institute of Technology</a></b>&nbsp;&nbsp; Altlanta, GA
                            <ul>
                                <li><b>Master of Science in Computer Science</b> </li>
                                <ul>
                                    <li>
                                        From January 2021 to May 2023 (Expected)
                                    </li>
                                    <li>
                                        Track: Computer Systems
                                    </li>
                                    <li>
                                        Completed Courses (GPA: 4.0):
                                        <ul>
                                            <li><a href="https://omscs.gatech.edu/cs-6035-introduction-to-information-security">Introduction to Information Security</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6200-introduction-operating-systems">Introduction to Operating Systems</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6601-artificial-intelligence">Artificial Intelligence</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6210-advanced-operating-systems">Advanced Operating Systems</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-6250-computer-networks">Computer Networks</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        Ongoing Courses:
                                        <ul>
                                            <li><a href="https://omscs.gatech.edu/cse-6220-intro-hpc">Intro to High-Performance Computing</a></li>
                                            <li><a href="https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics">Artificial Intelligence for Robotics</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <br />
                        <li> <b><a href="https://english.ncepu.edu.cn/">North China Electric Power University</a></b>&nbsp;&nbsp;Beijing&Baoding, China
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
                                    <li>
                                        CS Courses:
                                        <ul>
                                            <li>Programming in C Language</li>
                                            <li>Computer Theory and Interface Technology</li>
                                            <li>Database Principles and Application</li>
                                            <li>Fundamentals of Web Applications</li>
                                            {/* <li>Matlab Programming</li> */}
                                        </ul>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learnings</h5>
                    <ul className="introduction">
                        <li> <b>MOOCs</b>
                            <ul>
                                <li><a href="https://sp21.datastructur.es/">CS61b Data Structure </a>&nbsp;&nbsp; UC Berkeley,&nbsp;2020</li>
                                <li><a href="https://csapp.cs.cmu.edu/">Computer Systems: A Programmer's Perspective</a>&nbsp;&nbsp;CMU,&nbsp;2020</li>
                                <li><a href="https://online.stanford.edu/courses/soe-ydatabases-databases">Databases</a>&nbsp;&nbsp;Stanford,&nbsp;2020</li>
                                <li><a href="https://missing.csail.mit.edu/2020/">Missing semester in CS</a>&nbsp;&nbsp;MIT,&nbsp;2021</li>
                                <li><a href="https://fullstackopen.com/en/">Deep Dive Into Modern Web Development</a>&nbsp;&nbsp;University of Helsinki
                                    ,&nbsp;2022 </li>
                            </ul>
                        </li>
                        <br />
                        <li> <b><a href="https://www.cfainstitute.org/en/">CFA Institute</a></b>
                            <ul>
                                <li>Passed <b>CFA level II</b> Exam,&nbsp;2019</li>
                                <li>Passed <b>CFA level I</b> Exam,&nbsp;2018</li>
                            </ul>
                        </li>

                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience</h5>
                    <ul>
                        <li className="introduction"><b>State Grid Zhejiang Electric Power Research Institute</b>&nbsp;&nbsp; Hangzhou, China
                            <ul>
                                <li><b>Tech Director</b> of Power Transmission Technology Unit
                                    <ul>
                                        <li>From August 2020 to Feburary 2022</li>
                                        <li>Job description:
                                            <ul>
                                                <li>Leading a small but elite research engineer team</li>
                                                <li>Propose, conduct and manage research projects</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><b>Senior Engineer</b>
                                    <ul>
                                        <li>From December 2016 to August 2020</li>
                                        <li>Job description:
                                            <ul>
                                                <li>Conduct power transmission technology research</li>
                                                <li>Design and development of power system disaster warning systems</li>
                                                <li>Investigation and analysis of power system faults </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><b>Engineer</b>
                                    <ul>
                                        <li>From August 2013 to Dec 2016</li>
                                        <li>Job description:
                                            <ul>
                                                <li>Conduct power transmission technology research</li>
                                                <li>Substations and transmission lines commission and diagnosis tests</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
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
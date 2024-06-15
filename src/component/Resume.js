import { Container, Col, Row } from "react-bootstrap"
import { FaDatabase, FaLinux, FaReact, FaPython, FaTools } from 'react-icons/fa';
import { FcElectroDevices, FcDataEncryption, FcCircuit, FcCapacitor, FcDam } from 'react-icons/fc';
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
                        I work in power market software design and development.
                        I have broad experience in scientific computing and engineering simulation and enjoy solving real world problems through coding.
                        I living happily in Raleigh, NC with my family and I like hiking, kayaking and cooking.
                    </p>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skill Set</h5>
                    <ul className="introduction">
                        <li><b><FaPython /> Languages: </b>Python, C/C++, JavaScript, SQL, Julia, Golang, Matlab, VB6</li>
                        <li><b><FaReact /> App dev: </b>Electron, Flask, React, D3.js, Node.js, Restful API, CSS, HTML, Bootstrap UI</li>
                        <li><b><FaDatabase /> Database: </b>AWS S3, SQLite, MongoDB, MS Access</li>
                        <li><b><FaTools /> Tools:</b> Shell script, SSH, Git,Kubernetes, AWS EKS, Linux, vscode, Docker, Virtualbox, WSL</li>
                        <li><b><FaLinux /> System Programming: </b>gRPC, CUDA, openMP, MPI, pthreads, libvirt</li>
                        <li><b><SiNumpy /> Data Science: </b>Numpy, Pandas, Matplotlib, Geopandas, sciKit-learn</li>
                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Research Interests</h5>
                    <ul className="introduction">
                        <li><FcCircuit /> Power System <b>Economic Optimization</b></li>
                        <li><FcCapacitor /> Large-Scale Power System Simulation based on <b>High Performance Computing</b></li>
                        <li><FcDataEncryption /> Power System <b>Big Data</b> Analysis</li>
                        <li><FcDam /> <b>Artificial Intelligence</b> based Power System <b>Climate Disaster</b> Warning & Mitigation</li>
                        <li><FcElectroDevices /> Power System <b>Electromagnetic Compatibility</b></li>
                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education</h5>
                    <ul className="introduction">
                        <li><b><a href="https://www.gatech.edu/">Georgia Institute of Technology</a></b>&nbsp;&nbsp; Altlanta, GA
                            <ul>
                                <li><b>Master of Science in Computer Science</b> &nbsp;(Jan 2021 to May 2023)
                                    <ul>
                                        <li>
                                            Track: Computer Systems
                                        </li>
                                        <li>
                                            Completed Courses:
                                            <ul>
                                                <li><a href="https://omscs.gatech.edu/cs-6035-introduction-to-information-security">Intro to Information Security</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-6200-introduction-operating-systems">Graduate Intro to Operating Systems</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-6601-artificial-intelligence">Artificial Intelligence</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-6210-advanced-operating-systems">Advanced Operating Systems</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-6250-computer-networks">Computer Networks</a></li>
                                                <li><a href="https://omscs.gatech.edu/cse-6220-intro-hpc">Intro to High-Performance Computing</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics">Artificial Intelligence for Robotics</a></li>
                                                <li><a href="https://drive.google.com/file/d/1CmAA1pinmbaOIjIojjs3vCLsYVzTzLo_/view">Deterministic Optimization</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-7646-machine-learning-trading">Machine Learning for Trading</a></li>
                                                <li><a href="https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms">Intro to Graduate Algorithms</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li> <b><a href="https://english.ncepu.edu.cn/">North China Electric Power University</a></b>&nbsp;&nbsp;Beijing&Baoding, China
                            <ul>
                                <li><b>Doctor of Engineering in Electrical Theory and New Technology</b>&nbsp;(Sep 2008 to Mar 2013)
                                    <ul>
                                        <li>
                                            Thesis Title: <a href="https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CDFD&dbname=CDFD1214&filename=1013315726.nh&uniplatform=NZKPT&v=zPqcfeMc0oXcbSZFYUFwbcqAMvRQGP2snGbhAg0ln9nZgZ2K8K54BdBhb5CYj-yI">
                                                Calculation Methods for Ion Flow Field from HVDC Transmission lines parallel with HVAC Transmission Lines and Its Applications</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><b>Bachelor of Engineering in Electrical Engineering </b>&nbsp;(Sep 2004 to Jul 2008)
                                    <ul>

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
                                                <li>Matlab Programming</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learnings</h5>
                    <ul className="introduction">
                        <li> <b>MOOCs</b><br />
                            Completed Courses:
                            <ul>
                                <li><a href="https://sp21.datastructur.es/">CS61b Data Structure </a>&nbsp;&nbsp; UC Berkeley,&nbsp;2020</li>
                                <li><a href="https://csapp.cs.cmu.edu/">Computer Systems: A Programmer's Perspective</a>&nbsp;&nbsp;CMU,&nbsp;2020</li>
                                <li><a href="https://online.stanford.edu/courses/soe-ydatabases-databases">Databases</a>&nbsp;&nbsp;Stanford,&nbsp;2020</li>
                                <li><a href="https://missing.csail.mit.edu/2020/">Missing semester in CS</a>&nbsp;&nbsp;MIT,&nbsp;2021</li>
                                <li><a href="https://fullstackopen.com/en/">Deep Dive Into Modern Web Development</a>&nbsp;&nbsp;University of Helsinki
                                    ,&nbsp;2022 </li>
                                <li><a href="https://devopswithkubernetes.com/">DevOps with Kubernetes</a>&nbsp;&nbsp; University of Helsinki,&nbsp;2024</li>
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
                        <li className="introduction"><b>Enverus</b>&nbsp;&nbsp; Remote
                            <ul>
                                <b>Senior Electricity Market Optimization Engineer</b>&nbsp;(Aug 2022 to Jun 2024)
                                <ul>
                                    <li>Power Market Software development.</li>
                                </ul>
                            </ul>
                        </li>
                        <li className="introduction"><b>Hitachi Energy</b>&nbsp;&nbsp; Raleigh, NC
                            <ul>
                                <b>Senior Engineer</b>&nbsp;(Aug 2022 to Jun 2024)
                                <ul>
                                    <li>Production cost simulation software development.</li>
                                    <li>Power market planning consulting.</li>
                                </ul>
                            </ul>
                        </li>
                        <li className="introduction"><b>State Grid Zhejiang Electric Power Research Institute</b>&nbsp;&nbsp; Hangzhou, China
                            <ul>
                                <li><b>Research Engineer</b>&nbsp;(Aug 2013 to Feb 2022)
                                    <ul>
                                        <li>Conduct power transmission technology research, published over 40 research papers and 10 patents. </li>
                                        <li>Design and development of power system disaster warning systems and engineering software. </li>
                                        <li>Conduct power system operation data analysis and visualization.</li>
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
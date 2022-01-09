import { Container, Col, Row, Table } from "react-bootstrap"
import { FaDatabase, FaReact, FaJava, FaMemory } from 'react-icons/fa';
import { FiGitBranch, FiCpu } from 'react-icons/fi';
const Blogs = () => {
    return (
        <Container>
            <Row>
                <Col >
                </Col>
                <Col sm={11}>
                    <br />
                    <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suggestions for self-learners on the CS MOOCs</h5>
                    <p className="introduction">
                        I am from EE background so I need to fill the gap of my CS knowledge by myself. Funtunately there are plenty of high quality MOOCs on the internet.
                        I list here the courses I have taken and my suggestions to fellow CS self-learners. Hopefully this will be helpful!
                    </p>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course Name</th>
                                <th>Category</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td> <a href="https://sp21.datastructur.es/">CS61b Data Structure </a></td>
                                <td><p className="introduction"><FaJava /> DS&A</p></td>
                                <td ><p className="introduction">UCB's CS61b is a very popular course among self-teaching programmers. The lecture video and projects are all publicly available and
                                    they are with very high quality. I can finish all the projects by my self and certainly learned a lot about DS&A.
                                    I also learned Java in this course. By the way, UCB's <a href="https://cs61a.org/">CS61a</a>, CS61b and
                                    <a href="https://cs61c.org/sp22/">CS61c</a> are all with very high quality, I suggest fellow self-learners who have no previous knowledge in
                                    CS start from this series.</p></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><a href="https://csapp.cs.cmu.edu/">Computer Systems: A Programmer's Perspective</a></td>
                                <td><p className="introduction"><FiCpu /> OS& Architecture</p></td>
                                <td><p className="introduction">CSAPP is a highly regarded classic textbook published by CMU. The <a href="https://csapp.cs.cmu.edu/">book website</a> provide the projects and you can find the leacture videos on Youtube.
                                    CSAPP covers wide topics like assembly language, memory management and CPU scheduling. The projects of this book are very difficult for self-learner.
                                    I would suggest self-learners who are interested in computer systems start from another great online free
                                    textbook <a href="https://pages.cs.wisc.edu/~remzi/OSTEP/">OSTEP</a>. </p></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><a href="https://online.stanford.edu/courses/soe-ydatabases-databases">Databases</a></td>
                                <td><p className="introduction"><FaDatabase /> DB</p></td>
                                <td><p className="introduction">This course is a mini-course series provided by Standford. This course covers the basics of relational databases and
                                    also briefly touched some NoSQL databases. The SQL practices provided by this course is good material for fellow self-learners who want to
                                    get familiar with SQL.</p> </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><a href="https://missing.csail.mit.edu/2020/">Missing semester in CS</a></td>
                                <td><p className="introduction"><FiGitBranch /> Logistics</p></td>
                                <td><p className="introduction">As show in the name of this course, it covers the neccessary basic skills for CS. I didn't go through the
                                    whole course but selected the parts, like <a href="https://missing.csail.mit.edu/2020/version-control/">Git</a> and
                                    <a href="https://missing.csail.mit.edu/2020/shell-tools/"> Shell</a>, that I needed. I believe the <a href="https://code.visualstudio.com/">VSCode </a>
                                    is more popular than the Vim editor introduced in this course for the self-learners.</p> </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><a href="http://2016-aalto-c.mooc.fi/en/home/index.html">C-MOOC</a></td>
                                <td><p className="introduction"><FaMemory /> C</p></td>
                                <td><p className="introduction">A good C refresh course for those who studied C in the school like all the EE students. I studied it to prepare
                                    OMSCS's <a href="https://omscs.gatech.edu/cs-6200-introduction-operating-systems">GIOS</a> course.</p> </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><a href="https://fullstackopen.com/en/">Deep Dive Into Modern Web Development</a></td>
                                <td><p className="introduction"><FaReact /> Web dev</p></td>
                                <td><p className="introduction">The best course I ever took. This course have no leacture video but teach you how to build a modern fullstack web app
                                    step by step. I learned tons of knowledge about React, Redux, Express, Axios, Typescript and on and on. The center topics of CS is to develop the
                                    technologies that can support scalable web apps. So I suggest every self-learner who don't know web development to take this course because it is hard
                                    to understand why the hot topics like distributed computing are so important if you know nothing about how web app works.</p> </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col >
                </Col>
            </Row>
        </Container>
    )
}

export default Blogs
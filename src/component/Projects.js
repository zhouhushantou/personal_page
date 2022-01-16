import temperal_strength from "../resource/Typhoon_project/temperal_strength.png"
import corridor_flash from "../resource/Surge_arrester_project/corridor_flash.png"
import temp_dist from "../resource/Ampacity_project/temp_dist.png"
import FEM_project from "../resource/FEM_project/FEM.png"
import wave_dem from "../resource/Wave_project/wave_dem.mp4"
import ef_line from "../resource/Hybrid_field_project/ef_line.PNG"
import cable from "../resource/Ampacity_rating_project/cable.PNG"
import lineSag from "../resource/Line_sag_project/main.PNG"
import lightning from "../resource/Lighting_calculation_project/main3.png"
import letterSound from "../resource/Letter_sound_project/main_page.PNG"
import chargeflower from "../resource/corona/charge_flower.jpg"
import ionflow from "../resource/corona/ion_flow.jpg"
import squalineFig from "../resource/squaline.png"
import { Container, Col, Row } from "react-bootstrap"

const Projects = ({ projectType }) => {
    if (projectType === "datascience") {
        return (
            <Container>
                <Row>
                    <Col >
                    </Col>
                    <Col sm={11}>
                        <br />
                        <h5 className="sectionHead">&nbsp;&nbsp;Power Grid Typhoon Risk Analysis</h5>
                        <p>
                            <a href="https://digital-library.theiet.org/content/conferences/10.1049/icp.2020.0041">
                                <img src="https://img.shields.io/badge/PDF-Open_Research_Paper-blue?logo=adobe-acrobat-reader&amp;logoColor=white" alt="Open Research Paper" /></a>
                        </p>
                        <p className="introduction">Typhoon is one of the most severe natural disasters that can heavily damage the high voltage power transmission network.
                            This work using geopandas and matplotlib module to analyze and visualize typhoon tracks, landfall, and power grid faults data.
                            Multiple findings in this work, like  most of the faults were highly concentrated in the close vicinity to the coastline,
                            are useful in data-driven power grid typhoon disaster fast restoration.</p>
                        <img src={temperal_strength} width={800} />

                        <br />  <br />
                        <h5 className="sectionHead">&nbsp;&nbsp;Evaluation of Lightning Performance of Transmission Lines</h5>
                        <p>
                            <a href="https://ieeexplore.ieee.org/document/9347140">
                                <img src="https://img.shields.io/badge/PDF-Open_Research_Paper-blue?logo=adobe-acrobat-reader&amp;logoColor=white" alt="Open Research Paper" /></a>
                        </p>
                        <p className="introduction">Lightning causes about 60% of all the high voltage transmission line trip-outs which threats the stability of the power grid.
                            To reduce the lightning trip-out rate, an utility company started large-scale surge arrester installation from 2016.
                            This work first collected operation data and surge arrester data from the 220kV and above overhead transmission lines,
                            then the influence of the surge arresters to the lightning performance of the transmission lines is evaluated.
                            The results presented in this work can provide experience to the future installation of surge arresters.</p>
                        <img src={corridor_flash} width={800} />

                        <br />  <br />
                        <h5 className="sectionHead">Enhance the Efficiency of Power Transmission Network</h5>
                        <p>
                            <a href="https://ieeexplore.ieee.org/abstract/document/8596438">
                                <img src="https://img.shields.io/badge/PDF-Open_Research_Paper-blue?logo=adobe-acrobat-reader&amp;logoColor=white" alt="Open Research Paper" /></a>
                        </p>
                        <p className="introduction">&nbsp;&nbsp;To avoid the curtialment of the renewable energy, it is an urgent demand to enhance the ampacity of existing transmission lines.
                            This work applied the probabilistic ampacity rating method to 20 circuits of 500kV transmission lines.
                            The weather conditions in the transmission lines corridors are first analyzed and typical meteorological year (TMY) is generated. Secondly,
                            the hourly ampacity distributions of the transmission line are calculated. Finally, the ampacity of transmission lines are determined at different acceptable risk levels.
                            Significant ampacity enhancement was achieved by the application of probabilistic ampacity rating method.</p>
                        <img src={temp_dist} width={650} />

                    </Col>
                    <Col >
                    </Col>
                </Row>
            </Container>
        )
    }

    if (projectType === "science") {
        return (
            <Container>
                <Row>
                    <Col >
                    </Col>
                    <Col sm={11}>
                        <br />
                        <h5 className="sectionHead">Numerical Simulation of Hybrid AC-DC Corona Discharge</h5>
                        <p>
                            <a href="https://ieeexplore.ieee.org/document/6136509">
                                <img src="https://img.shields.io/badge/PDF-Open_Research_Paper-blue?logo=adobe-acrobat-reader&amp;logoColor=white" alt="Open Research Paper" /></a>
                        </p>
                        <p className="introduction">Accurate modeling and simulation of corona discharge are essential in designing environment-friendly power transmission corridors.
                            I proposed a FEM/FVM based simulation method for ion flow field from corona discharge. I implemented the proposed simulation method with C++ to
                            achieve high performance. The triangular mesh and polygon mesh have been used to discretize and solve the FEM and FVM control equations respectively.
                            The proposed simulation method has proved to be highly efficient and robust, and multiple papers have been published in IEEE journals.</p>
                        <img src={chargeflower} width={400} />
                        <img src={ionflow} width={400} />

                        <br /><br />
                        <h5 className="sectionHead">Solving Electric Field by using Finite Element Method</h5>
                        <p>
                            <a href="https://github.com/zhouhushantou/FEM">
                                <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub" /></a>
                        </p>
                        <p className="introduction">I developed this Finite Element Method program to solve static electric field problems.
                            The discretization of the computation space is not included in this program. The example show in this program is about solving the two
                            electrodes electric field problem. This program can be execute by Octave.</p>
                        <img src={FEM_project} width={800} />

                        <br /><br />
                        <h5 className="sectionHead">Transmission Line Electromagnetic Wave Propagation Demonstration</h5>
                        <p>
                            <a href="https://github.com/zhouhushantou/Wave_propagation_demonstration">
                                <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub" /></a>
                        </p>
                        <p className="introduction">I developed this .NET application to help people understand how the electromagnetic wave are propagate along the
                            transmission lines. The wave reflection and and refraction in different load and source conditions can be demonstrated in this application.</p>

                        <video width="475" height="442" autoPlay muted src={wave_dem} type="video/mp4"></video>

                    </Col>
                    <Col >
                    </Col>
                </Row>
            </Container>
        )
    }


    if (projectType === "engineer") {
        return (
            <Container>
                <Row>
                    <Col >
                    </Col>
                    <Col sm={11}>
                        <br />
                        <h5 className="sectionHead">Hybrid Corridor Ground Level Electric Field Calculation Software</h5>
                        <p>
                            <a href="https://github.com/zhouhushantou/personal_page/tree/master/src/resource/Hybrid_field_project">
                                <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub" /></a>
                        </p>
                        <p className="introduction">Put HVAC and HVDC on the same tower or same corrior is called hybrid corridor, which is a effective way to
                            enhance the power transmission capability of certain corridor. However, prediction of ground level electric field of hybrid
                            corridor is quite challenging. I developed this application in the .NET framework and used C# language to simplify the hybrid corridor ground
                            level electric field calculation.</p>
                        <img src={ef_line} width={800} />

                        <br /><br />
                        <h5 className="sectionHead">Transmission Line Sag Calculation Software</h5>
                        <p>
                            <a href="https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CJFD&dbname=CJFDLAST2016&filename=ZJDL201604001&v=YKcCfLWSey%25mmd2FlXjCbhBxbEm0O6gEkxYCfjFff6V%25mmd2F585AbAQdbXR80enYQbG6HuV%25mmd2FV">
                                <img src="https://img.shields.io/badge/PDF-Open_Research_Paper-blue?logo=adobe-acrobat-reader&amp;logoColor=white" alt="Open Research Paper" /></a>
                            <a href="https://github.com/zhouhushantou/personal_page/tree/master/src/resource/Line_sag_project">
                                <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub" /></a>
                        </p>
                        <p className="introduction">Calulation of the line sag of HV transmission lines is a frequently encountered engineering problem, which is usually used
                            to determine if the transmission line will have enough clearance to the ground. I developed this software to simplify the line sag calcualtion process. </p>
                        <img src={lineSag} width={800} />

                        <br /><br />
                        <h5 className="sectionHead">Tower Lightning Performance Calculation Software</h5>
                        <p>
                            <a href="https://github.com/zhouhushantou/personal_page/tree/master/src/resource/Lighting_calculation_project">
                                <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub" /></a>
                        </p>
                        <p className="introduction">After each time the transmission line tower stroke by lightning and caused lightning trip, the ligtrning performance of the
                            tower need to be calculated to help the fault analysis and to determine what measure should be taken to reduce lightning trip rate. I developed this software
                            to help the tower ligtning performance calculation. This software can perform both sheilding failure and back flashover calculation.</p>
                        <img src={lightning} width={800} />

                        <br /><br />
                        <h5 className="sectionHead">Transmission Line Ampacity Rating Software</h5>
                        <p>
                            <a href="https://nxgp.cnki.net/kcms/detail?v=3uoqIhG8C44YLTlOAiTRKgchrJ08w1e7i6NNuNFj4FaBns1tLyvff5saQ8ZM7b5_gqUniQNyWbmVwfyjDVdg8_rbE5aAvlqD&uniplatform=NZKPT&uid=WEEvREcwSlJHSldTTEYzVTFPU25OU1ZWc2ZjQmVMSjB3Q2VHYURydTJpND0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4IQMovwHtwkF4VYPoHbKxJw!!">
                                <img src="https://img.shields.io/badge/PDF-Open_Research_Paper-blue?logo=adobe-acrobat-reader&amp;logoColor=white" alt="Open Research Paper" /></a>
                            <a href="https://github.com/zhouhushantou/personal_page/tree/master/src/resource/Ampacity_rating_project">
                                <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub" alt="View on GitHub" /></a>
                        </p>
                        <p className="introduction">Ampacity rating is one of the important work in power grid design and operation. Correct ampacity rating can release the
                            potential of the power transmission network while keep overheat risk at very low level. I developed the static and dynamic ampacity rating software
                            for overhead transmission lines and static ampacity rating software for power cables. These software are with simple interface which is user friendly.</p>
                        <img src={cable} width={800} />

                    </Col>
                    <Col >
                    </Col>
                </Row>
            </Container>
        )
    }
    if (projectType === "webapp") {
        return (
            <Container>
                <Row>
                    <Col >
                    </Col>
                    <Col sm={11}>
                        <br />
                        <h5 className="sectionHead"> Development of Disaster Warning Backend System</h5>
                        < p className="introduction"> Squaline can bring strong wind and intense lightning, which pose risk to the power system. I developed a system that downloads the radar reflection
                            data and numerical weather forecasting data from a remote server and detects if there is strong radar reflection and wind close to the power transmission
                            lines. If detected, the system will compile a report by using the Docx module in Python and send out the report through SFTP. The data are stored in an
                            SQLite database and the data are processed with pandas module in Python</p>
                        < img src={squalineFig} width={700} />
                        <br />  <br />
                        <h5 className="sectionHead"> Learning Letters and Numbers on Keyboard for Kids</h5>
                        < p className="introduction"> I want to teach my daughter the pronounciation of the letters and numbers on the keyboard but didn't found any existing web
                            page that can serve this purpose. So I built this very simple webpage.I downloaded the sound and picture of the letters from internet
                            and forget the source address. If anyone known the source, please tell me and I will add reference to it.</p>
                        < img src={letterSound} width={800} />
                    </Col>
                    <Col >
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects
import { Container } from "react-bootstrap"
import logo from "../resource/logo.png"
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si'

const Personinfo = () => {
    return (
        <Container display="flex">
            <img src={logo} width="240" align="middle" />
            <br />
            <br />
            <h1 className="myname">
                Xiangxian Zhou
            </h1>
            <p className="introduction">
                D. Eng on Electrical Engineering<br />
                MSCS student
            </p>
            <a href="mailto:xzhou411@gatech.edu" className="mylinks"> <AiOutlineMail /> Email</a>
            <br />
            <a href="https://linkedin.com/in/xiangxian-zhou-088246a6" className="mylinks"><AiFillLinkedin /> LinkedIn</a>
            <br />
            <a href="https://github.com/zhouhushantou" className="mylinks" ><AiFillGithub /> GitHub</a>
            <br />
            <a href="https://scholar.google.com/citations?user=jEqFraUAAAAJ&hl=en" className="mylinks" > <SiGooglescholar /> Google Scholar</a>
        </Container>
    )
}

export default Personinfo
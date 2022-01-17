import { Container } from "react-bootstrap"
import logo from "../resource/logo.png"
import name_cn from "../resource/name_cn.png"
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si'
import { FiMapPin } from 'react-icons/fi'

const Personinfo = () => {
    return (
        <Container display="flex">
            <img src={logo} width="240" align="middle" />
            <br />
            <br />
            <h1 className="myname"> Xiangxian Zhou</h1>
            <img src={name_cn} width="120" align="middle" />
            <p className="introduction">
                D. Eng in EE<br />
                Power System Researcher<br />
                MSCS student
            </p >

            <a href="mailto:xzhou411@gatech.edu" className="mylinks"> <AiOutlineMail /> Email</a>
            <br />
            <a href="https://linkedin.com/in/xiangxian-zhou-088246a6" className="mylinks"><AiFillLinkedin /> LinkedIn</a>
            <br />
            <a href="https://github.com/zhouhushantou" className="mylinks" ><AiFillGithub /> GitHub</a>
            <br />
            <a href="https://scholar.google.com/citations?user=jEqFraUAAAAJ&hl=en" className="mylinks" > <SiGooglescholar /> Google Scholar</a>
            <br />

            <br />
            {/* <p className="introduction">
                <FiMapPin /> Hangzhou, China</p> */}
            <p className="introduction"> Favorite Quote:</p>
            <p className="introduction">"In the face of power, I would always be at a disadvantage, I knew, but I was a born contrarian, and there’s no other way for me to
                live except by taking an oppositional stance.”</p>
            <p className="introduction">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Ai Weiwei </p>

        </Container >
    )
}

export default Personinfo
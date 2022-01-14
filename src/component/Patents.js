import patents from "../resource/patents.json"
import Patent from "./Patent"
import { ListGroup } from 'react-bootstrap'
import { Container, Col, Row } from "react-bootstrap"

const Patents = () => {
    return (<Container>
        <Row>
            <Col >
            </Col>
            <Col sm={11}>
                <br />
                <h5 className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;Licensed Invention Patents&nbsp;&nbsp;&nbsp;Total: {patents.filter(item => item.Type == "invention").length}</h5>
                <ListGroup>{
                    patents.filter(item => item.Type == "invention").map(item => {
                        return (
                            <Patent patent={item} />
                        )
                    }
                    )
                }
                </ListGroup>
            </Col>
            <Col >
            </Col>
        </Row>
    </Container>
    )
}

export default Patents
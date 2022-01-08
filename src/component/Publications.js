import papers from "../resource/publications.json"
import Paper from "./Paper"
import { ListGroup } from 'react-bootstrap'
import { Container, Col, Row } from "react-bootstrap"

const Publications = () => {
    const groupBy = function (xs) {
        return xs.reduce(function (rv, x) {
            rv.add(x.Year);
            return rv;
        }, new Set());
    }

    const Years = [...groupBy(papers)].sort((a, b) => b - a)
    // console.log([...groupBy(papers)]);
    return (<Container>
        <Row>
            <Col >
            </Col>
            <Col sm={11}>{
                Years.map(publishYear => {
                    return (
                        <>
                            <br />
                            <h5 key={publishYear} className="sectionHead">&nbsp;&nbsp;&nbsp;&nbsp;Year:&nbsp;{publishYear}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total:&nbsp;
                                {papers.filter(paper => paper.Year === Number(publishYear)).length}</h5>
                            <ListGroup>
                                {papers.filter(paper => paper.Year === Number(publishYear))
                                    .map(paper => {
                                        return (
                                            <>
                                                <Paper paper={paper} />
                                            </>
                                        )
                                    }
                                    )}
                            </ListGroup>

                        </>
                    )
                })}
            </Col>
            <Col >
            </Col>
        </Row>
    </Container>
    )
}

export default Publications
import { ListGroup } from 'react-bootstrap'
const Paper = ({ paper }) => {
    const authorEmphasize = (name) => {
        const splitArray = name.split(";")
        return splitArray.map(author => {
            if (author.includes("周象贤") || author.includes("Xiangxian") || author.includes("XX") || author.includes("Xiang-xian") || author.includes("Steven")) {
                return <b id="authorZhou">{author}</b>
            }
            return (
                author
            )
        })
    }
    return (
        <>
            <ListGroup.Item key={paper.Title} className="papertitle">
                {paper.Title}
                <br />
                <p className="paperauthor">{authorEmphasize(paper.Authors)}</p>
                <i className="paperpublication">{paper.Publication}{paper.Volume ? `, vol:${paper.Volume}` : ''}{paper.Pages ? `, pp:${paper.Pages}` : ''}</i>
            </ListGroup.Item>
        </>
    )
}

export default Paper
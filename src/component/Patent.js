import { ListGroup } from 'react-bootstrap'
const Patent = ({ patent }) => {
    const authorEmphasize = (name) => {
        const splitArray = name.split(";")
        return splitArray.map(author => {
            if (author.includes("周象贤") || author.includes("Xiangxian") || author.includes("XX") || author.includes("Xiang-xian")) {
                return <b id="authorZhou">{author}&nbsp;</b>
            }
            return (
                <>{author}&nbsp;</>
            )
        })
    }
    return (
        <>
            <ListGroup.Item key={patent.Title} className="papertitle">
                {patent.Title}
                <br />
                <i className="paperpublication">Application No. {patent["Application no"]}, </i>
                <i className="paperpublication">Lisensed on {patent["License date"]}</i>
                <br />
                <p className="paperauthor">{authorEmphasize(patent.Inventors)}</p>
                <i className="paperpublication">{patent["Patent assignee"]}</i>

            </ListGroup.Item>
        </>
    )
}

export default Patent
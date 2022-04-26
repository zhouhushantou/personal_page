
import mapreduce from "../resource/MapReduce.png"
import distributed_file from "../resource/distributed_file.png"
import web_proxy from "../resource/web_proxy.png"
import { Container, Col, Row } from "react-bootstrap"

const Projects = ({ projectType }) => {
    return (
        <Container>
            <Row>
                <Col >
                </Col>
                <Col sm={11}>
                    <br />
                    <h5 className="sectionHead">MapReduce Framework</h5>
                    <p className="introduction"><a href="https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/mapreduce-osdi04.pdf">
                        MapReduce framework</a> is proposed by Google and is widely used in big data processing. I implemented the MapReduce framework
                        as a course project of OMSCS in C++. I chose the producer-consumer multi-threading model for the master process.
                        One thread will be initiated for communication with each worker process. The communication between the master process
                        and worker processes are based on <a href="https://grpc.io/docs/languages/cpp/async/">async gRPC</a>. The mechanism I chose to handle failure worker is to check if the worker set the response message status
                        to success. he mechanism I chose to handle slow worker is to add back up mapper or reducer tasks when 80% of the tasks have been accomplished.</p>
                    <img src={mapreduce} width={600} />

                    <br /> <br />
                    <h5 className="sectionHead">Distributed File System</h5>
                    <p className="introduction">As a course project of OMSCS, I developed a distributed file system based on the gRPC.The system is consist of multiple clients
                        and one server. On the server side, there is a sync thread and multiple async threads. The sync thread is in charge of handle the Store, Delete, List,Fetch,
                        Stat requests from the clients while the async threads are in charge of handle the callbacklist requests from the clients. The server maintain a file lock
                        list which controls which client can have write access to a certain file. The async threads won't work if the file lock list is not empty which means
                        there is at least one write access is happening.</p>
                    <img src={distributed_file} width={800} />

                    <br /> <br />
                    <h5 className="sectionHead">Proxy and Cache Servers</h5>
                    <p className="introduction">I designed a proxy and cache server in a OMSCS's course project. The proxy server will listening to the incoming
                        requests from clients and then pass the file names to cache server through message queue. The files requested by clients are passed from
                        cache server to proxy server though system V shared memory. A special data structure is designed for the shared memory which will coordinate
                        the access to the shared memory between the proxy server and cache server.</p>
                    <img src={web_proxy} width={700} />

                </Col>
                <Col >
                </Col>
            </Row>
        </Container>
    )

}

export default Projects
import { Badge, ListGroup, Toast } from "react-bootstrap";

const ConnectedUsers = ({users}) => {
    return (
        <div className="user-list">
            <h4>Users in Group</h4>

            <ListGroup as="ol">

            { users.map( (user, i) => {
                return (
                    // <div className="user-container">
                        
                    //     <h6 key={i}>{user}</h6>

                    
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto px-5 mb-2">
                                <div className="fw-bold">{user}</div>
                            </div>
                            <Badge bg="primary" pill>
                                {i+1}
                            </Badge>
                    </ListGroup.Item>
                    

                    // <Toast className="d-inline-block m-3" bg="dark">
                    //     <Toast.Header bg="dark">
                    //         {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
                    //         <strong className="rounded me-auto">{user}</strong>
                    //         <small>11 mins ago</small>
                    //     </Toast.Header>
                    //     <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    // </Toast>
                    // </div>
                )
            } )}

            </ListGroup>
        </div>
    )
}

export default ConnectedUsers;
import { Badge, ListGroup, Toast } from "react-bootstrap";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

const ConnectedUsers = ({users}) => {
    return (
        <div className="user-list">
            <h4>Users</h4>

            <List className="mt-5 user-items" sx={{ width: '90%', maxWidth: 360, bgcolor: 'rgb(43, 47, 60)' }}>
            {/* <ListGroup className="mt-5 user-items" as="ol"> */}

            { users.map( (user, i) => {
                return (
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary={user} />
                        </ListItemButton>
                    </ListItem>
                )
            } )}

            </List>
        </div>
    )
}

export default ConnectedUsers;
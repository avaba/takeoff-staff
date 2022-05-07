import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {useActions} from "../../../hooks/useActions";
import {Link} from 'react-router-dom';

const Header = () => {
    const {logOut} = useActions()

    return (
        <Box sx={{flexGrow: 1, marginBottom: 4}}>
            <AppBar position="static">
                <Container style={{padding: 0}}>
                    <Toolbar>

                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <Link to="/">Takeoff Staff</Link>
                        </Typography>

                        <Button
                            onClick={() => logOut()}
                            startIcon={<LogoutIcon/>}
                        >
                            Log out
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = [
    {
        title: 'Sign Up',
        link: '/'
}, {
        title: 'Profile',
        link: '/profile'
}
];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const deleteData = () => localStorage.removeItem("userData")

    return (
        <AppBar style={{ background: '#A633FF' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page.title} to={page.link} style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                                </Link>
                        ))}
                    </Box>
                    <Button onClick={deleteData} variant="contained" color="error"> Clear data
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
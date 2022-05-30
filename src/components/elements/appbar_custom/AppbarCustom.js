import * as React from 'react';
import Button from '@mui/material/Button';
import {
    AppBar,
    Avatar,
    CssBaseline, Divider,
    IconButton, Menu, MenuItem,
    Slide,
    ThemeProvider,
    Toolbar,
    Tooltip,
    useScrollTrigger
} from "@mui/material";
import logo from '../../../images/logo.png';
import "./AppbarCustom.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PendingIcon from "@mui/icons-material/Pending";
import {Logout} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import Box from "@mui/material/Box";
import HttpsIcon from '@mui/icons-material/Https';

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

function HideOnScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const AppbarCustom = (props) => {
    const user = props.user;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // <div className="navbar-nav ml-auto">
    //     <Button sx={{mr: 3}} color="inherit" variant="outlined" component={Link} to="/profile"
    //     >{ user.name } profile</Button>
    //     <Button sx={{mr: 5}} color="secondary" variant="contained" onClick={props.logOut} component={Link} to="/signin"
    //     >logout</Button>
    // </div>
    return (
        <React.Fragment>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <HideOnScroll {...props}>
                    <AppBar >
                        <Toolbar>
                            <Link sx={{ml: 5}} to="/">
                                <img src={logo} alt="Logo" className="barlogo"/>
                            </Link>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            </Typography>

                            {user ? (
                                    <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Open Menu">
                                            <IconButton
                                                onClick={handleClick}
                                                size="small"
                                                sx={{ ml: 2 }}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                            >
                                                <Avatar sx={{ width: 32, height: 32 }} {...stringAvatar('Alen Tuyakbayev')} />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 10,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link to={"/profile"} className="links">
                                                <MenuItem>
                                                    <AccountBoxRoundedIcon/> Profile
                                                </MenuItem>
                                            </Link>
                                            <Link to={"/status"} className="links">
                                                <MenuItem>
                                                    <PendingIcon /> My status
                                                </MenuItem>
                                            </Link>
                                            <Link to={"/changePass"} className="links">
                                                <MenuItem>
                                                    <HttpsIcon/> Change Pass
                                                </MenuItem>
                                            </Link>
                                            <Divider />

                                            <Link onClick={props.logOut} to="/signin" className="links">
                                                <MenuItem>
                                                    <LogoutIcon>
                                                        <Logout />
                                                    </LogoutIcon>
                                                    logout
                                                </MenuItem>
                                            </Link>

                                        </Menu>
                                    </Box>

                            ) : (
                                <div >
                                    <Button sx={{mr: 3}} color="inherit" variant="outlined" component={Link} to="/signin"
                                            endIcon={<AccountCircleIcon/>}>Log in</Button>
                                    <Button sx={{mr: 5}} color="secondary" variant="contained" component={Link} to="/signup"
                                            endIcon={<PersonAddAltIcon/>}>Sign up</Button>
                                </div>
                            )}



                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar sx={{marginBottom: 4.5}} />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default AppbarCustom;


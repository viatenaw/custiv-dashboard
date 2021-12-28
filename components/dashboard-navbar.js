import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Grid, AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { VscBellDot as BellIcon } from 'react-icons/vsc';
import { ImUser as UsersIcon } from 'react-icons/im';
import { BsChevronDown as UserMenuIcon } from 'react-icons/bs';
import { AiFillPlusCircle as AddQuotesIcon } from 'react-icons/ai';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
    const { onSidebarOpen, pageName = 'quotes', ...other } = props;
    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: 220
                    },
                    width: {
                        lg: 'calc(100% - 220px)'
                    }
                }}
                {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <h1 style={{ color: '#0E1053', marginTop: '40px' }}>
                    {pageName.toUpperCase()}
                    </h1>
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none'
                            }
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Grid container direction='column' sx={{ alignItems: 'end'}}>
                        <Grid item>
                        <Tooltip title="Notifications">
                        <IconButton >
                            <Badge
                                badgeContent={4}
                                color="primary"
                                variant="dot"
                            >
                                <BellIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                            <Tooltip title="">
                                <IconButton>
                                    <Avatar
                                        sx={{
                                            height: 24,
                                            width: 24,
                                            borderRadius: 0
                                        }}
                                        src="/static/images/avatars/avatar_1.png"
                                    >
                                        <UsersIcon fontSize="small" />
                                    </Avatar>
                                    <BasicMenu />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Button disableRipple size="small" startIcon={<AddQuotesIcon />} 
                                sx={{ 
                                    backgroundColor: '#555DFF',
                                    color: '#FFFFFF',
                                    "&:hover": {
                                        color: '#555DFF',
                                        background: '#ffffff'
                                    },
                                }}
                            >
                            START NEW QUOTE
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </DashboardNavbarRoot>
        </>
    );
};

function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div
                style={{ height: '24px' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div style={{ display: 'inline-block' }}>
                    <p style={{ fontSize: '10px', textAlign: 'start', paddingLeft: '5px' }}>
                        Kartik Raj Kumar
                    </p>
                    <p style={{ fontSize: '10px', textAlign: 'start', paddingLeft: '5px' }}>
                        Kartik21@gmail.com
                    </p>
                </div>
                <UserMenuIcon />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
}

DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func
};

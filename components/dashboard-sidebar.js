import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Drawer, useMediaQuery } from '@mui/material';
import { FaBox as ProjectIcon } from 'react-icons/fa';
import { RiMessage2Line as MessageIcon } from 'react-icons/ri';
import { FiTruck as SuppliersIcon } from 'react-icons/fi';
import { RiUser5Line as ClientIcon } from 'react-icons/ri';
import { BsFillChatSquareQuoteFill as QuoteIcon } from 'react-icons/bs';

import { NavItem } from './nav-item';

const items = [
    {
        href: '/',
        icon: (<QuoteIcon fontSize="small"/>),
        title: 'Quotes'
    },
    {
        href: '/projects',
        icon: (<ProjectIcon fontSize="small" />),
        title: 'Projects'
    },
    {
        href: '/messages',
        icon: (<MessageIcon fontSize="small" />),
        title: 'Messages'
    },
    {
        href: '/suppliers',
        icon: (<SuppliersIcon fontSize="small" />),
        title: 'Suppliers'
    },
    {
        href: '/clients',
        icon: (<ClientIcon fontSize="small" />),
        title: 'Clients'
    }
];

export const DashboardSidebar = (props) => {
    const { open, onClose } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    useEffect(
        () => {
            if (!router.isReady) {
                return;
            }

            if (open) {
                onClose?.();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    const content = (
        <>
            <ul style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
            >
                {items.map((item) => (
                    <NavItem
                        key={item.title}
                        icon={item.icon}
                        href={item.href}
                        title={item.title}
                    />
                ))}
            </ul>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 220
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 220
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};

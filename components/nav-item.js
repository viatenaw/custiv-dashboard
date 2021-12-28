import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? (router.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        mb: 1,
        py: 0
      }}
      {...others}
    >
      <NextLink
        href={href}
        passHref
      >
          <Button
            component="a"
            startIcon={!active && icon}
            disableRipple
            sx={{
              background: active && 'linear-gradient(90deg, rgba(85, 93, 255, 0.3) 0%, rgba(85, 93, 255, 3e-05) 92.31%)',
              borderRadius: 0,
              borderLeft: active && '5px solid #555DFF',
              color: 'secondary.main',
              fontWeight: active && 'fontWeightBold',
              justifyContent: 'center',
              px: 3,
              textTransform: 'none',
              width: '100%',
              '& .MuiButton-startIcon': {
                color: active ? 'secondary.main' : 'neutral.400'
              },
              '&:hover': {
                background: 'linear-gradient(90deg, rgba(85, 93, 255, 0.3) 0%, rgba(85, 93, 255, 3e-05) 92.31%)'
              }
            }}
          >
            <Box>
              {title}
            </Box>
          </Button>
      </NextLink>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};

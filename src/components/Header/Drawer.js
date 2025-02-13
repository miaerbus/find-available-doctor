import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import * as Styled from './styles';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import Languages from './Languages';
import IconButton from '@mui/material/IconButton';
import * as Icons from 'components/Shared/Icons';
import Stack from '@mui/material/Stack';
import { t } from 'i18next';

const Drawer = styled(MuiDrawer)(({ theme }) => {
  return {
    zIndex: 10_000, // ScrollTop has z-index: 9999
    '.MuiDrawer-paper': {
      width: 'clamp(300px, 40%,100vw)',
      backgroundColor: theme.customColors.brand,
    },
  };
});

export default function TemporaryDrawer({ open, setOpen }) {
  const [activeBtn, setActiveBtn] = useState();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (document.body.style.overflow = 'unset');
  });

  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(false);
  };

  const eventHandler = event => {
    const { target } = event;
    setActiveBtn(prevValue => {
      const newValue = +target.id.slice(-1);
      setOpen(false);
      if (newValue) {
        return newValue;
      }
      return prevValue;
    });
  };

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Styled.StackSmall id="nav-links-drawer" onClick={eventHandler}>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
        >
          <Typography variant="h6" component="span">
            {t('header.menu')}
          </Typography>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="close drawer"
            sx={{
              marginInline: 'auto 8px',
            }}
          >
            <Icons.CloseIcon />
          </IconButton>
        </Stack>

        <NavLinks containerId="nav-links-drawer" active={activeBtn} />
      </Styled.StackSmall>
      <Styled.StackSocialSmall>
        <SocialLinks />
        <Languages />
      </Styled.StackSocialSmall>
    </Drawer>
  );
}

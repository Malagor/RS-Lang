import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useBackgroundPage } from 'hooks/useBackgroundPage';
import { useIsMobile } from 'hooks/useIsMobile';
import { Header, Footer, SideBar } from './components';
import { useStyles } from './styled';

export const Layout: FC = ({ children }) => {
  const isMobile = useIsMobile();

  const classes = useStyles();
  const location = useLocation();

  const [open, setOpen] = React.useState(!isMobile);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const backgroundPage = useBackgroundPage();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <div className={classes.container}>
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <main
          className={classes.content}
          style={{ background: backgroundPage }}
        >
          {children}
        </main>
        {!location.pathname.includes('games') && <Footer />}
      </div>
    </div>
  );
};

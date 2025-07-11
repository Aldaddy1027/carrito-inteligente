"use client";
import "./globals.css";
import { Provider } from 'react-redux';
import { store } from '@/src/features/common/application/redux/store';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';

const APP_NAME = 'Carrito Inteligente'
const APP_DESCRIPTION = 'Sistema de carrito inteligente'

/**
 * Root layout component of the application
 * @function RootLayout
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render within the layout
 * @returns {JSX.Element} HTML element containing the main layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const drawerWidth = 240;

  const MiniDrawer = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
      setOpen(!open);
    };

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
            ml: open ? `${drawerWidth}px` : 0,
            transition: 'width 0.3s',
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ paddingLeft: open ? 1 : 6 }}>
              {APP_NAME}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: open ? drawerWidth : 60,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: open ? drawerWidth : 60,
              boxSizing: 'border-box',
              transition: 'width 0.3s',
              overflowX: 'hidden',
            },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="toggle drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: 'black', zIndex: 1300, }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            {['Catalogo', 'Carrito'].map((text, index) => (
              <Link href={`/${text.toLowerCase().replace(' ', '-')}`} key={text} passHref>
                <ListItem >
                  <ListItemIcon>
                    {index === 0 ? <CategoryIcon /> : <ShoppingCartIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: open ? 6 : 3 }}
        >
          <Toolbar />
          <Provider store={store}>{children}</Provider>
        </Box>
      </Box>
    );
  };

  return (
    <html lang='es' dir='ltr' data-lt-installed="true" suppressHydrationWarning={true}>
      <head>
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#FFFFFF' />
        <title>{APP_NAME}</title>

        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />

      </head>
      <body className={`antialiased`}>
        <MiniDrawer />
      </body>
    </html>
  );
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "black" }} position="relative">
        <Toolbar>
          <Typography
            underline="none"
            component={Link}
            to={'/'}
            variant="h6"
            style={{ textDecoration: 'none' }}
            color="white"
            noWrap
          >
            PDFopen
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Layout;

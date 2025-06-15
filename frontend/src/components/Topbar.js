import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RefreshIcon from '@mui/icons-material/Refresh';

const Topbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bengaluru EcoSphere
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="primary" aria-label="download data">
            <CloudDownloadIcon />
          </IconButton>
          <IconButton color="primary" aria-label="refresh data">
            <RefreshIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar; 
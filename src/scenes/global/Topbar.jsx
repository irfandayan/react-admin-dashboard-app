import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';

import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';

import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import Search from '@mui/icons-material/Search';

const Topbar = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={1}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          <LightModeOutlined />
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

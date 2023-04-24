import { IconButton } from "@mui/material";
import Iconify from '../../../components/iconify';

export default function DarkMode({ darkMode, setDarkMode }) {
  return (
    // Dark mode button
    <IconButton 
      sx={{
        padding: 0,
        width: 44,
        height: 44,
        }}
        onClick={() => setDarkMode()}        
    >
        {darkMode === "light" ? (<Iconify icon="eva:moon-fill" />) : (<Iconify icon="eva:sun-fill" />)}
    </IconButton>

  );
}

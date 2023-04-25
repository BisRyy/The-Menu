import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from "@mui/material";
import { changeMode } from '../../../redux/authSlice';
import Iconify from '../../../components/iconify';

export default function DarkMode() {
  const dispatch = useDispatch();

  const [mode, setMode] = useState('light');
  
  useEffect(() => {
    dispatch(changeMode(mode));
  }, [mode]);
  // const mode = useSelector((state) => state.auth.mode);

  
  const setDarkMode = () => {
    const newmode = mode === 'light' ? 'dark' : 'light';
    setMode(newmode);
    // dispatch(changeMode(newmode));
  }
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
        {mode === "light" ? (<Iconify icon="eva:moon-fill" />) : (<Iconify icon="eva:sun-fill" />)}
    </IconButton>

  );
}

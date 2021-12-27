import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './Home/Home';
import themes from './themes';
import { Select, MenuItem, Box } from '@mui/material';

import './App.css';

function App() {
  const [themeValue, setThemeValue] = useState('androidTheme');
  const [forceRender, setForceRender] = useState(true);

  useEffect(() => {
    function handleResize() {
      // getMobileOperatingSystem();
      let a = getMobileOperatingSystem();
      if (a.toString() === 'iOS') {
        setThemeValue('iosTheme')
      } else {
        setThemeValue('androidTheme')
      }
      setForceRender(false);
      setTimeout(() => {
        setForceRender(true);
      }, 0);
    }

    window.addEventListener('resize', handleResize)

  }, [])

  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  const handleChange = (event) => {
    setThemeValue(event.target.value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={themes[themeValue]}>
        <CssBaseline />
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={themeValue}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="androidTheme">Android</MenuItem>
            <MenuItem value="iosTheme">IOS</MenuItem>
          </Select>
        </Box> */}
        {forceRender && <Home />}
      </ThemeProvider>
    </div>
  );
}

export default App;

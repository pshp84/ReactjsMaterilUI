import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Select, MenuItem, Box } from '@mui/material';

import Home from './Home/Home';
import themes from './themes';

import './App.css';

function App() {
  const [themeValue, setThemeValue] = useState('androidTheme');

  const handleChange = (event) => {
    setThemeValue(event.target.value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={themes[themeValue]}>
        <CssBaseline />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
        </Box>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;

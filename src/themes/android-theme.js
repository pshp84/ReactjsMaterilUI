import { createTheme } from '@mui/material/styles';

const androidTheme = createTheme({
    palette: {
        primary: {
            main: "#6e64e6"
        },
        cardBg: {
            main: "#a59eee"
        },
        cardFont: {
            main: "#ffffff"
        },
        buttonRadius: {
            main: "10px"
        },
        cardRadius: {
            main: "10px"
        },
    },
});

export default androidTheme;
